"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:from-violet-500 hover:to-indigo-500",
  secondary:
    "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:text-gray-900",
  outline:
    "border border-violet-500/50 text-violet-600 hover:bg-violet-50 hover:border-violet-500",
  ghost: "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth, className = "", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          inline-flex items-center justify-center gap-2 rounded-xl font-medium
          transition-all duration-200 cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
