const OurPurpose = ({ purposeHeading, purposeSubHeading, purposeCard }) => {
  return (
    <>
      <section className="overflow-hidden bg-[#E5E8FF] py-32 max-md:py-32 max-sm:py-[60px]">
        <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full">
          <div className="mx-auto w-full max-w-[620px] text-center max-md:max-w-full">
            <h2 className="pb-3 font-area text-[40px] leading-[112%] tracking-[-1.4px] text-gray-900 font-wght-750 max-lg:text-[32px] max-lg:leading-[120%] max-lg:tracking-[-1.2px] max-sm:pb-2.5 max-sm:text-[26px] max-sm:leading-[128%] max-sm:tracking-[-1px]">
              {purposeHeading}
            </h2>
            <p className="font-sans text-2xl leading-8 tracking-[-0.096px] text-[#545A69] font-wght-480 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
              {purposeSubHeading}
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-[920px] flex-col gap-[16px_0] pt-16 max-lg:max-w-full max-sm:pt-10">
              {purposeCard}
            </div>
        </div>
      </section>
    </>
  );
};

export default OurPurpose;
