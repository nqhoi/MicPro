import Heading from "@/components/ui/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section3 = () => {
  return (
    <section className=" mobile-container lg:main-container mb-[50px] lg:mb-[120px]">
      <Heading className="mb-[30px] lg:mb-[100px]">
        Our Team’s <span className="-text--Primary">Work</span>
      </Heading>

      <div className="flex flex-col gap-[100px] ">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[60px] lg:flex-row lg:odd:gap-[104px] lg:even:gap-[70px] lg:even:flex-row-reverse group"
            >
              <div className="flex flex-col lg:group-even:text-right lg:group-even:items-end lg:group-even:justify-end">
                <div className="-text--Dark-1 mb-4 lg:mb-2 font-poppins">
                  Mobile app, Weather, Software
                </div>
                <h3 className="-text--Dark text-xl lg:text-[34px] lg:leading-[42px] font-bold mb-6 lg:mb-[30px]">
                  Weather App UI Kit - WETHY
                </h3>
                <div className="text-sm lg:text-lg -text--ui-ux-agency-primary mb-5 lg:mb-[40px] font-poppins">
                  Hello Designers! This is the video calling website landing
                  page design concept. Video calling software is very popular
                  nowadays.
                </div>
                <Link href="#" className="uppercase">
                  <div className=" -text--ui-ux-agency-primary text-lg tracking-[0.625em] mb-3 lg:mb-[14px]">
                    VIEW PORTFOLIO
                  </div>
                  <div className="w-[146px] h-0.5 flex-shrink-0 bg-gradientPink group-even:ml-auto"></div>
                </Link>
              </div>
              <div className="w-full max-w-[700px] flex-shrink-0">
                <Image
                  src="/img1.png"
                  className="w-full h-full object-cover"
                  alt="image-1"
                  width={700}
                  height={585}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Section3;
