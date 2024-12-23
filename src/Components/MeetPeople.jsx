import React from "react";

const MeetPeople = ({ bgcolor, heading, subheading, founderList,columnCount }) => {
  let containerClassName;

  if (columnCount === 3) {
    containerClassName = "flex gap-[0_30px] pt-[82px] max-xl:justify-center max-lg:justify-start max-lg:overflow-scroll max-md:flex-wrap max-md:gap-[15px] max-sm:justify-start max-sm:pt-14"; 
  } else if (columnCount === 4) {
    containerClassName = "flex flex-wrap gap-[30px] pt-[82px] max-xl:justify-center max-md:gap-[16px] max-sm:justify-start max-sm:gap-[15px] max-sm:pt-8"; 
  } else {
    containerClassName = "flex gap-[0_30px] pt-[82px] max-xl:justify-center max-lg:justify-start max-lg:overflow-scroll max-md:flex-wrap max-md:gap-[15px] max-sm:justify-start max-sm:pt-14"; 
  }
  return (
    <section className={`${bgcolor} py-[128px] max-lg:py-28 max-md:py-16`}>
      <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full">
        <div className="mx-auto w-full max-w-[700px] text-center max-md:max-w-full">
          <h2 className="font-area text-[40px] leading-[112%] tracking-[-1.4px] text-gray-900 font-wght-750 max-lg:text-[32px] max-lg:leading-[120%] max-lg:tracking-[-1.2px] max-sm:text-[26px] max-sm:leading-[128%] max-sm:tracking-[-1px]">
            {heading}
          </h2>
          {subheading && (
            <p className="pt-2 text-center font-sans text-2xl leading-8 tracking-[-0.096px] text-[#545A69] font-wght-480 max-sm:px-[10px] max-sm:pt-3 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
              {subheading}
            </p>
          )}
        </div>
        <div className={containerClassName}>
          {founderList}
        </div>
      </div>
    </section>
  );
};

export default MeetPeople;
