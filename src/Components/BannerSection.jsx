const BannerSection = (props) => {
  return (
    <section
      style={{
        backgroundImage:
          "var( --Linear,linear-gradient(0deg, #3b5ac2 0%, #374ea2 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1142px] max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full">
        <div className="mx-auto w-full max-w-[980px] bg-all-mile-bg bg-contain bg-bottom bg-no-repeat px-4 max-sm:bg-cover max-sm:px-6">
          <div className="relative mx-auto max-w-[900px] py-[100px] max-lg:max-w-[530px] max-lg:py-20 max-md:max-w-full max-md:py-[60px]">
            <h3 className=" text-center font-area text-5xl leading-[120%] tracking-[-1.4px] text-white font-wght-750 max-lg:text-[32px] max-lg:leading-10 max-md:mx-auto max-md:max-w-[400px] max-sm:max-w-[320px]  max-sm:text-[26px] max-sm:leading-[120%] max-sm:tracking-[-1px]">
              {props.bannerText}
            </h3>
            <div className="flex justify-center">{props.actingButton}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
