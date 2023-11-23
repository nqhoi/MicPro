import Button from "@/components/ui/Button";
import React from "react";

const Section1 = () => {
  return (
    <section className="hero pb-[100px]">
      <div className="pt-[44px] l-container">
        <h1 className="pb-[30px] text-6xl font-extrabold text-center leading-snug max-w-[807px] mx-auto">
          Build Your Dream Website with Our Skilled{" "}
          <span className="text-gradient">Development</span> Team
        </h1>
        <div className="max-w-[715px] mx-auto text-lg font-normal text-center pb-[45px]">
          Are you looking for a way to close all marketing, technical and
          customer support tasks for your company in one place
        </div>

        <div className="flex items-center justify-center gap-6">
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
