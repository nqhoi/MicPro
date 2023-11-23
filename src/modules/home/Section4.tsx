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
    <ul className="flex flex-col gap-4 font-poppins">
      {features.map((feature, index) => (
        <li key={index} className="flex gap-3">
          <div className="">{icon}</div>
          <div className="">{feature}</div>
        </li>
      ))}
    </ul>
  );
};

const Section4 = () => {
  return (
    <section className="main-container mb-[105px]">
      <div className="bg-[#F1F5F9] rounded-[30px]">
        <Heading className="pb-[30px] pt-[70px]">
          Explore our core <span className="-text--Primary">Expertise</span>
        </Heading>
        <p className="font-poppins text-lg -text--Dark max-w-[709px] text-center mx-auto pb-12">
          We produce beautiful and engaging websites. Our team is mostly
          experienced in the design of stunning interfaces, e-commerce and
          marketing website development, ready to work with you on your project!
        </p>
        <div className="grid grid-cols-2 px-[40px] gap-y-6 gap-x-[30px] pb-12">
          {expertiseList.map((item, index) => (
            <div key={index} className="bg-white rounded-[10px] py-6 px-[30px]">
              <h5 className="text-black text-xl font-semibold pb-[45px]">
                {item.title}
              </h5>
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
