"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export const Timeline = ({ children, className }: TimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("relative group", className)}>

      <div className="hidden md:block absolute top-[45%] -left-12 z-20">
        <button
          onClick={() => scroll("left")}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 text-rothschild shadow-lg hover:bg-white transition-all disabled:opacity-50 hover:scale-110 active:scale-95"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="hidden md:block absolute top-[45%] -right-12 z-20">
        <button
          onClick={() => scroll("right")}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 text-rothschild shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} />
        </button>
      </div>


      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-12 pt-4 px-6 snap-x snap-mandatory scrollbar-hide md:scrollbar-default"
        style={{ scrollBehavior: "smooth" }}
      >
        {children}
      </div>
    </div>
  );
};

export const TimelineItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("shrink-0 snap-center w-[90vw] md:w-[450px]", className)}>
      {children}
    </div>
  );
};
