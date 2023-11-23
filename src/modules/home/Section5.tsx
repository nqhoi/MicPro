import { IconCheckPink, IconCheckPurple } from "@/components/icons";
import Heading from "@/components/ui/Heading";
import React from "react";

const Section5 = () => {
  return (
    <section className="-bg--Line">
      <div className="main-container py-[70px] mb-[95px]">
        <Heading>
          Find the plan that fits your{" "}
          <span className="-text--Primary">budget</span>
        </Heading>

        <div className="flex items-center justify-center gap-3 mb-[40px]">
          <button className="-bg--Primary rounded-[52px] text-white text-sm font-poppins w-[110px] py-2.5">
            Monthly
          </button>
          <button className="bg-[#F8F8F8] rounded-[52px] -text--Dark-1 text-sm font-poppins w-[110px] py-2.5">
            Yearly
          </button>
        </div>

        <div className="flex gap-[30px]">
          <div className="flex flex-col flex-shrink-0 w-[730px]">
            <div className="bg-white rounded-t-3xl flex-shrink-0 pt-[25px] pl-[42px] pr-[30px] pb-[38px]">
              <div className="flex items-center justify-between ">
                <p className="font-poppins text-lg font-semibold">Pro</p>
                <div className="-bg--Primary bg-opacity-10 rounded-[30px]  font-poppins font-medium text-sm -text--Primary px-6 py-3">
                  Most popular
                </div>
              </div>
              <h2 className="text-[50px] font-bold">
                $35
                <span className="font-poppins text-xl -text--Dark-1 font-normal">
                  /Per Month
                </span>
              </h2>
            </div>
            <div className="bg-[#EAEDF9] rounded-b-3xl p-[42px]">
              <div className="grid grid-cols-2 gap-[20px] mb-[45px]">
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <IconCheckPink />
                      <div className="font-poppins text-lg -text--Dark-1">
                        UI/UX Designer
                      </div>
                    </div>
                  ))}
              </div>

              <button className="text-white font-poppins font-medium rounded-[30px] bg-gradientMix py-2.5 px-9">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 w-[410px]">
            <div className="bg-white rounded-t-3xl flex-shrink-0 pt-[25px] pl-[42px] pr-[30px] pb-[38px]">
              <div className="flex items-center justify-between ">
                <p className="font-poppins text-lg font-semibold">Pro</p>
                <div className="-bg--Primary bg-opacity-10 rounded-[30px] font-poppins font-medium text-sm -text--Dark px-6 py-3">
                  Free
                </div>
              </div>
              <h2 className="text-[50px] font-bold">$0</h2>
            </div>
            <div className="bg-[#EAEDF9] rounded-b-3xl p-[42px]">
              <div className="flex flex-col gap-[20px] mb-[45px]">
                {Array(3)
                  .fill(0)
                  .map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <IconCheckPurple />
                      <div className="font-poppins text-lg -text--Dark-1">
                        UI/UX Designer
                      </div>
                    </div>
                  ))}
              </div>

              <button className="bg-transparent border border-solid border-[#5F45D9] font-poppins font-medium rounded-[30px] py-2.5 px-9">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
