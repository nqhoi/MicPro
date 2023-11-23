import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <section className="main-container mb-[120px]">
      <Heading className="mb-[60px]">
        OUR Design <span className="-text--Primary">BLOG</span>
      </Heading>
      <div className="grid grid-cols-3 gap-7 ">
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <div key={index} className="">
              <div className="w-full aspect-video relative mb-5">
                <Image
                  className="w-full h-full object-cover "
                  src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image"
                  fill
                />
              </div>
              <div className="flex flex-col font-poppins gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium -bg--Orange px-2 py-1.5 rounded">
                    Design Blog
                  </div>
                  <p className="-text--Dark-1 text-xs ">Jul 12, 2022</p>
                </div>
                <p className="font-medium">
                  15 Important Usability Principles for User Interface Design
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Section7;
