"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  enableAnimation?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = false, enableAnimation = true, ...props }: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl",
        hoverEffect && "cursor-pointer transition-all duration-300 hover:bg-white/80 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      initial={enableAnimation ? { opacity: 0, y: 20 } : undefined}
      whileInView={enableAnimation ? { opacity: 1, y: 0 } : undefined}
      viewport={enableAnimation ? { once: true, margin: "-50px" } : undefined}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
