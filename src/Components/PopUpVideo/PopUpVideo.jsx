import { useState, useEffect } from "react";
import Popup from "./Popup";
import "./PopupVideo.css";

const PopUpVideo = ({ videoUrl, thumbnailImage }) => {
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
      <div
        onClick={openPopup}
        className="relative mx-auto w-full max-w-[765px] cursor-pointer max-lg:max-w-[500px] max-sm:max-w-full max-sm:px-4"
      >
        <div className="btn-primary youtube-popup size-full cursor-pointer">
          <div className="group relative w-full cursor-pointer max-md:flex">
            <figure className="relative w-full overflow-hidden rounded-xl before:absolute before:left-0 before:top-0 before:size-full before:bg-thumbnail-shadow before:bg-cover before:content-['']">
              <img src={thumbnailImage} alt="All Mile Video Thumbnail" />
            </figure>
            <div
              id="playIcon"
              className="play-icon absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 transition-all delay-200 duration-200 ease-in-out group-hover:scale-105"
            >
              <div className="relative flex size-[100px] items-center justify-center max-sm:size-[70px]">
                <figure className="flex size-[54px] items-center justify-center rounded-[5429.668px] border-[1.2px] border-solid border-[color:var(--Linear,#3B5AC2)] bg-[#F7F8FC] max-sm:size-[44px]">
                  <svg
                    className="relative left-[2px] max-sm:left-px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9689 10.7262C14.6816 9.73659 14.6816 7.26364 12.9689 6.27302L4.21991 1.21499C2.50613 0.22437 0.361328 1.46187 0.361328 3.44209V13.5581C0.361328 15.5384 2.50613 16.7759 4.21991 15.7842L12.9689 10.7262Z"
                      fill="url(#paint0_linear_8427_625)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_8427_625"
                        x1="7.30737"
                        y1="16.1336"
                        x2="7.30737"
                        y2="0.866211"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3B5AC2"></stop>
                        <stop offset="1" stopColor="#374EA2"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </figure>
                <figure className="absolute left-0 top-0 size-[100px] animate-[rotate360_10s_linear_infinite] rounded-full max-sm:size-[70px]">
                  <img
                    src="../../../images/svg/play-video.svg"
                    alt="play-video"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} videoId={videoUrl} />
    </>
  );
};

export default PopUpVideo;
