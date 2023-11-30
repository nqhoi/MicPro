import React from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className = "" }: HeadingProps) => {
  return (
    <h2
      className={twMerge(
        "text-[28px] lg:text-[50px] font-bold leading-tight mx-auto text-center",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
