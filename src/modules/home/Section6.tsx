import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

const Section6 = () => {
  return (
    <section className="mobile-container lg:main-container mb-[60px] lg:mb-[120px]">
      <Heading className="mb-6 lg:mb-[30px]">
        Our Creative <span className="-text--Primary">Team</span>
      </Heading>
      <p className="-text--Dark-1 text-lg text-center mx-auto lg:max-w-[481px] font-poppins mb-12 lg:mb-[70px]">
        Flowgiri is a creative and modern theme for startups, freelancers and
        creatives.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:max-w-[1075px] mx-auto">
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <div key={index} className="w-full h-[385px] relative group">
              <div className="absolute z-10 -bg--Primary rounded-full w-full h-full bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <p className="font-poppins font-medium text-white text-xl">
                  STEVE THOMAS
                </p>
                <p className="font-poppins font-medium text-white text-sm">
                  STEVE THOMAS
                </p>
              </div>
              <Image
                className="w-full h-full object-cover rounded-full"
                src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image-person"
                fill
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Section6;
