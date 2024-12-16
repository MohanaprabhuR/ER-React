import { useState } from "react";

const ImageTextSection = ({
  bgcolor,
  heading,
  subheading,
  PopUpVideo,
  column: initialColumn,
  imageUrl,
  imageAlt,
}) => {
  const [column] = useState(initialColumn || false);

  const sectionClass = PopUpVideo
    ? `${bgcolor} pb-32 pt-[200px] max-lg:pb-[100px] max-lg:pt-[166px] max-md:pt-32 max-sm:pb-[80px] max-sm:pt-[125px]`
    : `${bgcolor} py-32 max-lg:pb-[112px] max-lg:pt-[100px] max-sm:py-[56px]`;

  const textClass = PopUpVideo ? `pt-[128px] max-sm:pt-[56px]` : ``;

  return (
    <section className={sectionClass}>
      <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full">
        {PopUpVideo}

        <div
          className={`${textClass} ${
            column
              ? "flex items-center justify-between max-lg:flex-wrap"
              : "flex flex-row-reverse items-center justify-between max-lg:flex-wrap"
          }`}
        >
          <div className="relative h-fit max-w-[500px] max-xl:max-w-[490px] max-lg:mx-auto max-sm:mx-auto max-sm:max-w-[350px]">
            <figure className="w-full">
              <img className="size-full" src={imageUrl} alt={imageAlt} />
            </figure>
          </div>
          <div className="max-w-[460px] max-xl:max-w-[390px] max-lg:max-w-full  max-lg:text-center max-sm:mx-auto max-sm:max-w-[390px] max-sm:px-2 ">
            <h2 className="font-area text-[40px] leading-[120%] tracking-[-1.4px] text-[#111827] font-wght-750 max-lg:mx-auto  max-lg:text-[32px] max-lg:leading-[120%]  max-sm:text-[26px] max-sm:leading-8 max-sm:tracking-[-1px]">
              {heading}
            </h2>
            <p className="pt-4 font-sans text-2xl leading-[36px] tracking-[-0.096px] text-[#545A69] font-wght-480-32 max-lg:max-w-full max-lg:text-xl max-lg:leading-[120%] max-lg:tracking-[-0.080px] max-sm:pt-3 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
              {subheading}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
