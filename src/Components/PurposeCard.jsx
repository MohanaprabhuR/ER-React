import { useState, useEffect } from "react";
import Popup from "./PopUpVideo/Popup";
import "./PopUpVideo/PopupVideo.css";

const PurposeCard = ({ cardHeading, cardSubheading,videoUrl,imageUrl,imageAlt }) => {

    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);
  
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isOpen]);
  return (
    <>
      <div className="flex min-h-[361px] justify-between gap-[0_70px] rounded-[20px] border border-solid bg-white p-7 max-lg:min-h-[290px] max-lg:gap-[0_16px] max-md:min-h-fit max-md:flex-col-reverse max-md:flex-wrap max-md:p-8 max-sm:px-4 max-sm:py-7">
        <div className="w-full max-w-[383px] p-7 pr-2.5 max-lg:w-1/2 max-lg:max-w-full max-lg:p-0 max-md:w-full max-md:pt-8 max-sm:px-1">
          <h5 className="pb-4 text-[28px] leading-[31.36px] tracking-[-0.336px] text-gray-900 font-wght-700 max-md:pt-0 max-sm:pb-4 max-sm:text-2xl max-sm:leading-[26.88px] max-sm:tracking-[-0.288px]1">
            {cardHeading}
          </h5>
          <p className="font-sans text-lg leading-7 tracking-[-0.072px] text-[#545A69] font-wght-480 max-lg:text-base max-md:pr-0 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
            <span className="font-sans text-[#F96D41] font-wght-600">
              Story:&nbsp;
            </span>
            {cardSubheading}
          </p>
        </div>
        <div onClick={openPopup}
          class="youtube-popup size-full max-w-[416px] cursor-pointer max-lg:w-1/2 max-lg:max-w-full max-md:w-full"
        >
          <div class="group relative min-h-[317px] w-full cursor-pointer max-lg:min-h-[280px] max-md:flex max-md:min-h-fit max-sm:h-[192px]">
            <figure class="relative h-[317px] w-full overflow-hidden rounded-xl before:absolute before:left-0 before:top-0 before:size-full before:bg-thumbnail-shadow before:bg-cover before:content-[''] max-lg:h-[280px] max-sm:h-[192px]">
              <img
                src={imageUrl}
                alt={imageAlt}
                class="size-full object-cover max-sm:object-left-top"
              />
            </figure>
            <figure class="absolute left-2/4 top-2/4 size-14 -translate-x-2/4 -translate-y-2/4 rounded-full transition-all delay-150 duration-150 group-hover:scale-110 max-sm:size-12">
              <img
                src="../../images/About/svg/icon-play.svg"
                alt="Play Icon"
                class="size-full"
              />
            </figure>
          </div>
        </div>
        <Popup isOpen={isOpen} onClose={closePopup} videoId={videoUrl} />
      </div>
    </>
  );
};

export default PurposeCard;
