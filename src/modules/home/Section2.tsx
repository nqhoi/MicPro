import { IconApple } from "@/components/icons";
import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="bg-white mobile-container lg:main-container rounded-[30px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] pb-11 lg:pb-[120px] px-10 lg:px-12 pt-[70px]">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <div className="p-[30px]" key={index}>
              <div className="rounded-[60px] w-[88px] h-[88px] bg-gradientPink p-[30px]">
                <IconApple />
              </div>
              <div className="text-lg font-semibold ">
                Discover, Explore the Product
              </div>
            </div>
          ))}
      </div>

      <div className=" pb-[70px] lg:pb-[120px]">
        <h2 className="lg:max-w-[810px] mx-auto text-[28px] lg:text-[50px] font-bold leading-snug text-center pb-10">
          More than <span className="-text--Primary">80,000+</span> companies
          trust Micpro
        </h2>

        <div className="overflow-hidden flex items-center justify-between gap-10 lg:px-14">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <Image
                key={index}
                src="/logo-stack.svg"
                alt="Logo-Stack"
                width={110}
                height={30}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
