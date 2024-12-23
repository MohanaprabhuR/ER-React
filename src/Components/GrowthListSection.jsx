import React from "react";

const GrowthSection = ({
  growthsectionheading,
  growthsectionsubheading,
  growthcard,
}) => {
  return(
  <>
    <section className="overflow-hidden bg-[#E5E8FF] py-32 max-lg:py-28 max-sm:py-[60px]">
      <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full">
        <div className="text-center">
          <h2 className="mx-auto w-full max-w-[560px] font-area text-[40px] leading-[120%] tracking-[-1.4px] text-gray-900 font-wght-750 max-lg:max-w-[360px] max-lg:text-[32px] max-lg:leading-[120%] max-lg:tracking-[-1.2px] max-sm:text-[26px] max-sm:leading-[128%] max-sm:tracking-[-1px]">
            {growthsectionheading}
          </h2>
          <p className="mx-auto w-full max-w-[780px] pt-3 font-sans text-2xl leading-8 tracking-[-0.096px] text-[#545A69] font-wght-480 max-lg:max-w-[580px] max-sm:max-w-[360px] max-sm:pt-[10px] max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
            {growthsectionsubheading}
          </p>
        </div>
        <div className="flex flex-col gap-[30px_0] pt-[82px] max-lg:pt-0 max-sm:gap-[16px_0]">
          {growthcard}
        </div>
      </div>
    </section>
  </>
  );
};

export default GrowthSection;
