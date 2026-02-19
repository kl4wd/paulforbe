import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useSection } from "@/context/SectionContext";

interface DomainItem {
    title: string;
    desc: string;
    list?: string[];
    icon: LucideIcon;
    image: string;
}

interface StickyScrollRevealProps {
    items: DomainItem[];
    sectionTitle?: string;
}

export const StickyScrollReveal = ({ items, sectionTitle }: StickyScrollRevealProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    
    // Sync Title Logic
    const { setActiveTitle } = useSection();

    useEffect(() => {
        if (!sectionTitle) return;

        const unsubscribe = scrollYProgress.on("change", (v) => {
            if (v > 0.05 && v < 0.95) {
                setActiveTitle(sectionTitle);
            } else {
                setActiveTitle((prev) => prev === sectionTitle ? null : prev);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, sectionTitle, setActiveTitle]);

    // ... existing render logic ...
    
    return (
        <div ref={containerRef} className="relative h-[400vh] bg-slate-50"> 
            <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-gray-900">
                    {items.map((item, index) => {
                         return (
                            <SectionImage 
                                key={index} 
                                item={item} 
                                index={index} 
                                total={items.length} 
                                scrollYProgress={scrollYProgress} 
                            />
                         );
                    })}
                     
                     {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-10" />
                </div>

                <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white flex items-center justify-center p-6 md:p-20 relative z-20">
                     <div className="relative w-full max-w-xl grid place-items-center">
                        {items.map((item, index) => (
                             <SectionText 
                                key={index} 
                                item={item} 
                                index={index} 
                                total={items.length} 
                                scrollYProgress={scrollYProgress} 
                             />
                        ))}
                     </div>

                    <SummaryWheel items={items} scrollYProgress={scrollYProgress} />
                </div>

            </div>
        </div>
    );
};

const SectionImage = ({ item, index, total, scrollYProgress }: { item: DomainItem, index: number, total: number, scrollYProgress: MotionValue<number> }) => {
    const opacity = useTransform(scrollYProgress, 
        index === 0 
        ? [0, (index+1)/total] 
        : index === total - 1
            ? [index/total, 1]
            : [index/total, index/total+0.05, (index+1)/total-0.05, (index+1)/total],
        index === 0
        ? [1, 0]
        : index === total - 1
            ? [0, 1]
            : [0, 1, 1, 0]
    );

    return (
        <motion.div 
            style={{ opacity }}
            className="absolute inset-0 w-full h-full"
        >
            <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                className="object-cover object-center"
                priority={index === 0}
            />
        </motion.div>
    );
};

const SectionText = ({ item, index, total, scrollYProgress }: { item: DomainItem, index: number, total: number, scrollYProgress: MotionValue<number> }) => {
    const rangeStart = index / total;
    const rangeEnd = (index + 1) / total;

    const opacity = useTransform(scrollYProgress, 
        index === 0
        ? [0, rangeEnd - 0.05, rangeEnd]
        : index === total - 1
            ? [rangeStart, rangeStart + 0.05, 1]
            : [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd], 
        index === 0
        ? [1, 1, 0]
        : index === total - 1
            ? [0, 1, 1]
            : [0, 1, 1, 0]
    );

    const y = useTransform(scrollYProgress,
        index === 0
        ? [0, rangeEnd - 0.1, rangeEnd]
        : index === total - 1
            ? [rangeStart, rangeStart + 0.1, 1]
            : [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd],
        index === 0
        ? [0, 0, -20]
        : index === total - 1
            ? [20, 0, 0]
            : [20, 0, 0, -20]
    );

    const display = useTransform(scrollYProgress, (v: number) => {
        if (index === 0 && v < rangeEnd) return "block";
        if (index === total - 1 && v >= rangeStart) return "block";
        return (v >= rangeStart && v < rangeEnd) ? "block" : "none";
    });

    return (
        <motion.div 
            style={{ opacity, y, display }}
            className="col-start-1 row-start-1 w-full text-center mx-auto"
        >
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-rothschild">
                    <item.icon size={24} />
                </div>

            </div>

            <h3 className="text-2xl md:text-5xl font-serif font-bold text-rothschild mb-4 md:mb-6 leading-tight">
                {item.title}
            </h3>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                {item.desc}
            </p>

            {item.list && (
                 <ul className="space-y-3 inline-block text-left">
                    {item.list.map((li, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                             <div className="w-1.5 h-1.5 rounded-full bg-rothschild mt-2.5 shrink-0" />
                             <span className="text-gray-700 font-medium">{li}</span>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

const SummaryWheel = ({ items, scrollYProgress }: { items: DomainItem[], scrollYProgress: MotionValue<number> }) => {
    
    const ITEM_HEIGHT = 40;

    const yScan = useTransform(scrollYProgress, [0, 1], [0, -(items.length - 1) * ITEM_HEIGHT]);
    
    return (
        <div className="absolute bottom-8 right-8 z-30 h-[120px] overflow-hidden mask-linear-gradient flex flex-col items-center pointer-events-none select-none">
             <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent z-10" />
             <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-10" />
             
             <motion.div 
                style={{ y: yScan, marginTop: ITEM_HEIGHT * 1 }}
                className="flex flex-col items-end px-4"
             >
                {items.map((item, i) => (
                    <WheelItem 
                         key={i} 
                         index={i} 
                         total={items.length} 
                         text={item.title} 
                         scrollYProgress={scrollYProgress}
                         height={ITEM_HEIGHT}
                    />
                ))}
             </motion.div>
        </div>
    );
};

interface WheelItemProps {
    index: number;
    total: number;
    text: string;
    scrollYProgress: MotionValue<number>;
    height: number;
}

const WheelItem = ({ index, total, text, scrollYProgress, height }: WheelItemProps) => {
    
    const progressPoint = index / max(total - 1, 1);
    
    const range = 1 / total;   
    
    const opacity = useTransform(scrollYProgress, 
        [progressPoint - range, progressPoint, progressPoint + range], 
        [0.3, 1, 0.3]
    );
    
    const scale = useTransform(scrollYProgress, 
        [progressPoint - range, progressPoint, progressPoint + range], 
        [0.8, 1, 0.8]
    );

    const color = useTransform(scrollYProgress,
        [progressPoint - range/2, progressPoint, progressPoint + range/2],
        ["#9ca3af", "#1e3a8a", "#9ca3af"]
    );
    
    return (
        <motion.div 
            style={{ height, opacity, scale, color }} 
            className="flex items-center justify-end text-sm font-bold font-serif whitespace-nowrap origin-right"
        >
            {text}
        </motion.div>
    );
};

function max(a: number, b: number) { return a > b ? a : b; }
