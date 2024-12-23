import React from "react";

const GrothCard = ({
  growthCardIcon,
  growthCardTitle,
  growthCardDescription,
  growthImage,
}) => {
  return (
    <>
      
          <div className="flex justify-between gap-[0_45px] rounded-3xl bg-white p-14 shadow-3xl max-md:p-8 max-sm:rounded-2xl max-sm:px-5 max-sm:pb-8 max-sm:pt-6">
            <div>
              <figure className="size-[100px] max-sm:size-20">
                <img src={growthCardIcon} alt={growthCardTitle} />
              </figure>
              <h4 className="pb-5 pt-10 font-sans text-[32px] leading-[35.84px] tracking-[-0.4px] text-gray-900 font-wght-700 max-md:text-[30px] max-sm:pb-[18px] max-sm:pt-7 max-sm:text-[22px] max-sm:leading-[23.76px] max-sm:tracking-[-0.396px]">
                {growthCardTitle}
              </h4>
              <p className="font-sans text-lg leading-7 tracking-[-0.072px] text-[#545A69] font-wght-480 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
                {growthCardDescription}
              </p>
            </div>
            <figure className="w-full min-w-[512px] overflow-hidden rounded-lg max-xl:min-w-[380px] max-lg:hidden">
              <img
                src={growthImage}
                alt={growthCardTitle}
                className="size-full object-cover"
              />
            </figure>
          </div>
       
    </>
  );
};

export default GrothCard;
