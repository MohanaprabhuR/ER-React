import { useLocation } from "react-router-dom";

const HeroSection = ({
  heading,
  subheading,
  actingButton,
  heroImage,
  imageAlt,
}) => {
  const location = useLocation();

  return (
    <section
      className={`${
        location.pathname === "/"
          ? "bg-[linear-gradient(117deg,#202948_27.47%,#0C173D_92.3%)] heigth-section home-hero-section pb-[246px] pt-[180px] max-lg:pt-[140px] max-sm:pb-[148px] max-sm:pt-[120px]"
          : "heigth-section bg-hero-bg bg-cover pb-[130px] pt-[224px] max-lg:pt-[180px] max-sm:pb-[80px] max-sm:pt-[112px]"
      }  relative`}
    >
      <div className="relative z-20 mx-auto flex w-full max-w-[1142px] justify-between gap-[0_70px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-lg:flex-wrap max-lg:gap-0 max-md:max-w-[540px] max-sm:max-w-full">
        <div className="w-full max-w-[535px] pt-11 max-xl:max-w-[400px] max-lg:max-w-full max-lg:pt-0 max-lg:text-center max-md:mx-auto max-md:max-w-[500px] max-sm:max-w-[400px] max-sm:px-2">
          <h1
            className={` ${
              location.pathname === "/" ? "text-[#F7F8FC]" : " text-[#111827]"
            } mx-auto w-full font-area text-5xl leading-[57.6px] tracking-[-2px] font-wght-750 max-lg:max-w-full max-lg:text-[42px] max-lg:leading-[110%] max-lg:tracking-[-1.4px] max-sm:text-3xl max-sm:leading-9 max-sm:tracking-[-0.54px]`}
          >
            {heading}
          </h1>

          <h2
            className={`${
              location.pathname === "/"
                ? "bg-[linear-gradient(272deg,#FD8746_48.08%,#F2BC57_98.19%)] bg-clip-text pt-4 font-area text-5xl leading-[57.6px] tracking-[-2px] text-transparent font-wght-750 max-lg:max-w-full max-lg:text-[42px] max-lg:leading-[110%] max-lg:tracking-[-1.4px] max-sm:text-3xl max-sm:leading-9 max-sm:tracking-[-0.54px]"
                : "pt-3 font-sans text-2xl leading-[36px] tracking-[-0.096px] text-[#545A69] font-wght-480-32 max-lg:text-xl max-lg:leading-[120%] max-lg:tracking-[-0.080px] max-sm:pt-2 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]"
            }`}
          >
            {subheading}
          </h2>
          {actingButton}
        </div>
        <div className="relative w-[488px] max-lg:mx-auto max-lg:mt-[60px]">
          <figure className="relative z-10 size-full">
            <img
              src={heroImage}
              alt={imageAlt}
              className="size-full object-contain"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
