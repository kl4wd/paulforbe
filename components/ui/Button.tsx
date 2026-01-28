import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variant === "primary" && "bg-rothschild text-white hover:bg-rothschild-700 shadow-lg hover:shadow-xl hover:shadow-rothschild/20",
          variant === "outline" && "border border-rothschild/20 text-rothschild hover:bg-rothschild-50 hover:border-rothschild",
          variant === "ghost" && "text-rothschild hover:bg-rothschild-50",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
