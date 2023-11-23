import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-[50px] py-[18px] rounded-full font-medium text-base flex items-center justify-center gap-2.5",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
