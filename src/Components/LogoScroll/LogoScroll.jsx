import "./LogoScroll.css";
import { useLocation } from "react-router-dom";

const LogoScroll = () => {
  const location = useLocation();

  const imageList = [
    {
      imageUrl: "../../../images/logos/logo-flipkart.png",
      imageAlt: "Flipkart",
    },
    {
      imageUrl: "../../../images/logos/logo-mesho.png",
      imageAlt: "Mesho",
    },
    {
      imageUrl: "../../../images/logos/logo-ubanic.png",
      imageAlt: "ubanic",
    },
    {
      imageUrl: "../../../images/logos/logo-swasthum.png",
      imageAlt: "swasthum",
    },
    {
      imageUrl: "../../../images/logos/logo-ikea.png",
      imageAlt: "ikea",
    },
    {
      imageUrl: "../../../images/logos/logo-vintage.png",
      imageAlt: "vintage",
    },
  ];

  return (
    <div
      className={`${
        location.pathname === "/" ? "-mt-[365px] mb-20" : "top-[100px]"
      } relative z-20 mx-auto w-full max-w-[1276px] overflow-hidden rounded-3xl bg-white py-[70px] shadow-3xl max-xl:w-[95%] max-xl:max-w-full max-lg:-mt-[210px] max-lg:mb-[60px] max-lg:py-[50px] max-sm:rounded-lg max-sm:py-8`}
    >
      <p className="px-4 text-center font-sans text-2xl leading-[30px] tracking-[-0.096px] text-[#545A69] font-wght-480-32 max-lg:text-xl max-lg:leading-[120%] max-lg:tracking-[-0.080px] max-md:max-w-full max-sm:mx-auto max-sm:w-full max-sm:max-w-[228px] max-sm:text-[17px] max-sm:leading-[18px] max-sm:tracking-[-0.136px]">
        Trusted by leading brands across the globe
      </p>
      <div className="relative mt-12 flex gap-[0_32px] overflow-hidden max-lg:gap-[0_24px] max-sm:gap-[0_8px] before:absolute before:-top-4 before:z-10 before:h-20 before:w-[203px] before:bg-logo-left-shadow after:absolute after:-right-12 after:-top-4 after:h-20 after:w-[203px] after:bg-logo-right-shadow max-lg:mt-6 max-sm:mt-7  max-sm:before:-left-28 max-sm:after:-right-2">
        <div className="marquee__group flex gap-[0_32px] max-lg:gap-[0_24px] max-sm:gap-[0_8px]">
          {imageList.map((image, index) => (
            <figure
              key={index}
              className="w-[160px] max-lg:w-[126px] max-sm:w-[100px]"
            >
              <img src={image.imageUrl} alt={image.imageAlt} />
            </figure>
          ))}
        </div>
        <div className="marquee__group flex gap-[0_32px] max-lg:gap-[0_24px] max-sm:gap-[0_8px]">
          {imageList.map((image, index) => (
            <figure
              key={index}
              className="w-[160px] max-lg:w-[126px] max-sm:w-[100px]"
            >
              <img src={image.imageUrl} alt={image.imageAlt} />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;
