

const AboutHero = ({aboutheading, aboutsubheading,imageGallery}) => {
  return (
    <>
      <section className="bg-about-hero overflow-hidden bg-cover bg-no-repeat py-36 pt-[207px] max-lg:pb-32 max-lg:pt-[160px] max-md:pb-24 max-sm:pb-5 max-sm:pt-[142px]">
        <div className="relative z-10 mx-auto w-full max-w-[1142px] px-4 text-center max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full max-sm:px-0">
          <div className="mx-auto w-full max-w-[700px] text-center max-md:max-w-full max-sm:px-5">
            <h1 className="mx-auto w-full pb-5 font-area text-[48px] leading-[110%] tracking-[-2.4px] text-gray-900 font-wght-750 max-lg2:text-[42px] max-lg:pb-4 max-lg:text-[40px] max-sm:mx-auto max-sm:max-w-[300px] max-sm:pb-3 max-sm:text-[36px] max-sm:leading-10 max-sm:tracking-[-0.72px]">
              {aboutheading}
            </h1>
            <p className="mx-auto w-full font-sans text-2xl leading-8 tracking-[-0.096px] text-[#545A69] font-wght-480 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">{aboutsubheading}</p>
          </div>
        {imageGallery}
        </div>
      </section>
    </>
  );
};

export default AboutHero;
