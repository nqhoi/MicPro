import IconCheckList from "@/components/icons/IconCheckList";
import Heading from "@/components/ui/Heading";
import { expertiseList } from "@/constant";
import React from "react";

const CoreItem = ({
  icon,
  features,
}: {
  icon: React.ReactNode;
  features: string[];
}) => {
  return (
    <ul className="flex flex-col gap-5 font-poppins">
      {features.map((feature, index) => (
        <li key={index} className="flex gap-3">
          <div>{icon}</div>
          <div className="text-sm">{feature}</div>
        </li>
      ))}
    </ul>
  );
};

const Section4 = () => {
  return (
    <section className="mobile-container lg:main-container mb-10 lg:mb-[105px]">
      <div className="bg-[#F1F5F9] rounded-[20px] lg:rounded-[30px]">
        <Heading className="pb-6 lg:pb-[30px] pt-[70px]">
          Explore our core <span className="-text--Primary">Expertise</span>
        </Heading>
        <p className="font-poppins lg:text-lg -text--Dark w-full lg:max-w-[709px] text-center mx-auto mb-8 lg:pb-12">
          We produce beautiful and engaging websites. Our team is mostly
          experienced in the design of stunning interfaces, e-commerce and
          marketing website development, ready to work with you on your project!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-2.5 lg:px-[40px] gap-y-4 lg:gap-y-6 lg:gap-x-[30px] pb-5 lg:pb-12">
          {expertiseList.map((item, index) => (
            <div key={index} className="bg-white rounded-[10px] p-6 lg:py-6 lg:px-[30px]">
              <h5 className="text-black text-xl font-semibold pb-5">
                {item.title}
              </h5>
              <div className="border border-solid border-[#F0F0F0] mb-6" />
              <CoreItem
                icon={<IconCheckList type={item.iconColor} />}
                features={item.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
