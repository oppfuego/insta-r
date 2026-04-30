"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <input
          ref={ref}
          className={`
            w-full rounded-xl border border-gray-200 bg-white px-4 py-3
            text-gray-900 placeholder-gray-400
            transition-all duration-200
            focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20
            ${error ? "border-red-400 focus:border-red-400 focus:ring-red-500/20" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
