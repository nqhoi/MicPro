import Button from "@/components/ui/Button";
import React from "react";

const Section1 = () => {
  return (
    <section className="hero pb-10 lg:pb-[100px]">
      <div className="pt-[44px] lg:l-container mobile-container">
        <h1 className="pb-5 lg:pb-[30px] text-[34px] lg:text-6xl font-extrabold text-center leading-snug max-w-[283px] lg:max-w-[807px] mx-auto">
          Build Your Dream Website with Our Skilled{" "}
          <span className="text-gradient">Development</span> Team
        </h1>
        <div className="max-w-[275px] lg:max-w-[715px] mx-auto lg:text-lg font-normal text-center pb-[30px] lg:pb-[45px] font-poppins">
          Are you looking for a way to close all marketing, technical and
          customer support tasks for your company in one place
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-6">
          <Button className="-bg--Primary rounded-[30px] -text--White">
            Get Started
          </Button>

          <Button className="bg-transparent rounded-[60px] border border-solid border-[#1F2326] ">
            Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
