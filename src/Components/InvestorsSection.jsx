import React from "react";

const InvestorsSection = ({
  investorsHeading,
  investorsSubHeading,
  logoList,
}) => {
  return (
    <>
      <section className="bg-[#32397C] py-[128px] max-md:pb-28 max-sm:pb-[54px] max-sm:pt-16">
        <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full">
          <div className="mx-auto max-w-[730px] pb-[82px] text-center max-md:pb-12 max-sm:pb-[54px]">
            <h2 className="pb-4 font-area text-[40px] leading-[112%] tracking-[-1.4px] text-white font-wght-750 max-lg:text-[32px] max-lg:leading-[120%] max-lg:tracking-[-1.2px] max-sm:pb-2.5 max-sm:text-[26px] max-sm:leading-[128%] max-sm:tracking-[-1px]">
              {investorsHeading}
            </h2>
            <p className="font-sans text-2xl leading-[30px] tracking-[-0.096px] text-[#DDDCFF] font-wght-480 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
              {investorsSubHeading}
            </p>
          </div>
          <div className="flex flex-wrap w-full max-w-[1000px] mx-auto items-center justify-center space-x-6 gap-[16px_0]  max-md:flex-wrap max-md:space-x-0 max-md:pb-0">
            {logoList.map((imageUrl, index) => (
              <figure className="flex h-24 w-48 items-center justify-center max-md:my-4 max-md:h-full max-md:w-1/2 max-sm:my-2.5">
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Logo ${index + 1}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorsSection;
