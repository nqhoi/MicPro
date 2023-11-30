import React from "react";

const Section8 = () => {
  return (
    <section className="mobile-container lg:main-container mb-[120px]">
      <div className="bg-gradientPurple rounded-[20px] flex flex-col">
        <h3 className="lg:max-w-[858px] mx-auto text-center text-white text-[28px] lg:text-[34px] font-bold mb-6 lg:mb-[30px] mt-[30px] lg:mt-[70px] px-6">
          We'll take the time to understand your goals and then help you create
          a website that's exactly what you envisioned.
        </h3>
        <p className="lg:max-w-[692px] mx-auto text-center text-white mb-[40px] font-poppins px-6">
          We believe your project is only as good as the team that's working on
          it. When we work with you and your team, we know there are no
          shortcuts to success. Your research is done; now lets get down to
          business!
        </p>
        <div className="p-4 gap-2.5 mx-auto bg-white rounded-[10px] mb-14">
          <button className="font-poppins text-lg font-semibold ">
            Join the team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
