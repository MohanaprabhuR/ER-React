import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <footer className="relative border-t border-solid border-t-[#F1F8FE] bg-white pb-5 pt-[100px] max-md:pt-20 max-sm:pt-[56px]">
        <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full max-sm:px-5">
          <div className="flex justify-between gap-[0_16px] pb-16 max-lg:flex-col max-sm:pb-3">
            <div className="w-full max-w-[380px] max-sm:max-w-full flex flex-col gap-[37px_0] max-sm:gap-[28px_0]">
              <Link to="/">
                <figure className="h-[48px] w-[222px] max-sm:h-10 max-sm:w-[186px]">
                  <img src="../../images/svg/elasticrun-logo.svg" alt="Logo" />
                </figure>
              </Link>
              <div className="flex items-center space-x-5 max-sm:ml-2 max-sm:space-x-4">
                <Link
                  to="https://x.com/elastic_run"
                  className="group cursor-pointer"
                >
                  <figure className="flex size-6 items-center justify-center max-sm:size-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-full"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-gray-800 group-hover:fill-[#F96D41]"
                        d="M10.8442 15.152L4.4085 22.5005H0.84375L9.17925 12.9785L10.8442 15.152Z"
                        fill="#545A69"
                      ></path>
                      <path
                        className="fill-gray-800 group-hover:fill-[#F96D41]"
                        d="M12.7891 8.241L18.6818 1.5H22.2443L14.4391 10.4265L12.7891 8.241Z"
                        fill="#545A69"
                      ></path>
                      <path
                        className="fill-gray-800 group-hover:fill-[#F96D41]"
                        d="M23.6148 22.5H16.4456L0.382812 1.5H7.73356L23.6148 22.5ZM17.4288 20.3678H19.4028L6.66106 3.5205H4.54306L17.4288 20.3678Z"
                        fill="#545A69"
                      ></path>
                    </svg>
                  </figure>
                </Link>
                <Link
                  className="group cursor-pointer"
                  to="https://www.facebook.com/elasticrunofficial/"
                >
                  <figure className="flex size-6 items-center justify-center max-sm:size-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-full"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-gray-800 group-hover:fill-[#F96D41]"
                        d="M9.66613 23V12.9648H6.28906V9.05384H9.66613V6.16964C9.66613 2.82255 11.7104 1 14.6963 1C16.1265 1 17.3557 1.10649 17.7139 1.15408V4.65199L15.6431 4.65293C14.0192 4.65293 13.7048 5.42456 13.7048 6.55688V9.05384H17.5776L17.0733 12.9648H13.7048V23H9.66613Z"
                        fill="#545A69"
                      ></path>
                    </svg>
                  </figure>
                </Link>
                <Link
                  className="group cursor-pointer"
                  to="https://www.instagram.com/elasticrunofficial/"
                >
                  <figure className="flex size-6 items-center justify-center max-sm:size-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-full"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="fill-gray-800 group-hover:fill-[#F96D41]"
                        d="M11.9994 2.16218C15.2033 2.16218 15.5827 2.17418 16.8483 2.23189C17.6093 2.24121 18.3631 2.38094 19.0768 2.64502C19.5944 2.84463 20.0645 3.15042 20.4567 3.54269C20.849 3.93496 21.1548 4.40502 21.3544 4.92262C21.6185 5.63637 21.7582 6.39011 21.7675 7.15109C21.8247 8.41674 21.8372 8.79615 21.8372 12C21.8372 15.2038 21.8253 15.5833 21.7675 16.8489C21.7582 17.6099 21.6185 18.3636 21.3544 19.0774C21.1548 19.595 20.849 20.065 20.4567 20.4573C20.0645 20.8496 19.5944 21.1554 19.0768 21.355C18.3631 21.6191 17.6093 21.7588 16.8483 21.7681C15.5833 21.8252 15.2039 21.8378 11.9994 21.8378C8.79501 21.8378 8.4156 21.8258 7.15052 21.7681C6.38954 21.7588 5.6358 21.6191 4.92205 21.355C4.40445 21.1554 3.93439 20.8496 3.54212 20.4573C3.14985 20.065 2.84406 19.595 2.64445 19.0774C2.38037 18.3636 2.24064 17.6099 2.23132 16.8489C2.17418 15.5833 2.16161 15.2038 2.16161 12C2.16161 8.79615 2.17361 8.41674 2.23132 7.15109C2.24064 6.39011 2.38037 5.63637 2.64445 4.92262C2.84406 4.40502 3.14985 3.93496 3.54212 3.54269C3.93439 3.15042 4.40445 2.84463 4.92205 2.64502C5.6358 2.38094 6.38954 2.24121 7.15052 2.23189C8.41617 2.17475 8.79558 2.16218 11.9994 2.16218ZM11.9994 0C8.74244 0 8.33218 0.0137136 7.05224 0.0719965C6.05631 0.0918058 5.07096 0.280376 4.13809 0.629684C3.33784 0.931193 2.61301 1.40368 2.01419 2.01419C1.40313 2.61323 0.930238 3.33847 0.628542 4.13923C0.279233 5.0721 0.0906631 6.05745 0.0708538 7.05338C0.0137137 8.33217 0 8.74244 0 11.9994C0 15.2564 0.0137136 15.6667 0.0719965 16.9466C0.0918058 17.9425 0.280376 18.9279 0.629685 19.8608C0.931046 20.6614 1.40355 21.3867 2.01419 21.9858C2.61335 22.5965 3.33857 23.069 4.13923 23.3703C5.0721 23.7196 6.05745 23.9082 7.05338 23.928C8.33332 23.9851 8.74187 24 12.0006 24C15.2593 24 15.6678 23.9863 16.9478 23.928C17.9437 23.9082 18.929 23.7196 19.8619 23.3703C20.6588 23.0614 21.3824 22.5896 21.9865 21.9851C22.5906 21.3806 23.062 20.6567 23.3703 19.8596C23.7196 18.9268 23.9082 17.9414 23.928 16.9455C23.9851 15.6667 23.9989 15.2564 23.9989 11.9994C23.9989 8.74244 23.9851 8.33217 23.9269 7.05224C23.9071 6.05631 23.7185 5.07096 23.3692 4.13809C23.0678 3.33743 22.5953 2.6122 21.9847 2.01305C21.3855 1.4024 20.6603 0.929903 19.8596 0.628541C18.9268 0.279233 17.9414 0.0906631 16.9455 0.0708538C15.6667 0.0137137 15.2564 0 11.9994 0Z"
                        fill="#545A69"
                      ></path>
                      <path
                        className="fill-gray-800 group-hover:fill-[#F96D41]"
                        d="M11.9979 5.83594C10.7792 5.83594 9.58785 6.19733 8.57451 6.87442C7.56118 7.55151 6.77138 8.51388 6.30499 9.63984C5.83861 10.7658 5.71658 12.0048 5.95434 13.2001C6.1921 14.3954 6.77898 15.4933 7.64075 16.3551C8.50252 17.2169 9.60048 17.8038 10.7958 18.0415C11.9911 18.2793 13.2301 18.1573 14.356 17.6909C15.482 17.2245 16.4444 16.4347 17.1214 15.4213C17.7985 14.408 18.1599 13.2167 18.1599 11.9979C18.1599 10.3637 17.5107 8.79634 16.3551 7.64074C15.1995 6.48515 13.6322 5.83594 11.9979 5.83594ZM11.9979 15.9977C11.2068 15.9977 10.4335 15.7632 9.77576 15.3237C9.11799 14.8841 8.60533 14.2595 8.30259 13.5286C7.99985 12.7977 7.92064 11.9935 8.07498 11.2176C8.22931 10.4417 8.61026 9.72902 9.16964 9.16964C9.72902 8.61025 10.4417 8.22931 11.2176 8.07498C11.9935 7.92064 12.7977 7.99985 13.5286 8.30259C14.2595 8.60532 14.8841 9.11799 15.3237 9.77575C15.7632 10.4335 15.9977 11.2068 15.9977 11.9979C15.9977 13.0587 15.5763 14.0761 14.8262 14.8262C14.0761 15.5763 13.0587 15.9977 11.9979 15.9977Z"
                        fill="#545A69"
                      ></path>
                      <path
                        className="fill-gray-800 group-hover:fill-[#F96D41]"
                        d="M18.4009 7.03221C19.1961 7.03221 19.8408 6.38753 19.8408 5.59228C19.8408 4.79702 19.1961 4.15234 18.4009 4.15234C17.6056 4.15234 16.9609 4.79702 16.9609 5.59228C16.9609 6.38753 17.6056 7.03221 18.4009 7.03221Z"
                        fill="#545A69"
                      ></path>
                    </svg>
                  </figure>
                </Link>
                <Link
                  className="group cursor-pointer"
                  to="https://www.linkedin.com/company/elasticrun/"
                >
                  <figure className="flex size-6 items-center justify-center max-sm:size-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-full"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_8349_348)">
                        <path
                          className="fill-gray-800 group-hover:fill-[#F96D41]"
                          d="M22.2656 0.75H1.73438C1.17187 0.75 0.75 1.17187 0.75 1.73438V22.4062C0.75 22.8281 1.17187 23.25 1.73438 23.25H22.4062C22.9688 23.25 23.3906 22.8281 23.3906 22.2656V1.73438C23.25 1.17187 22.8281 0.75 22.2656 0.75ZM7.35937 19.875H4.125V9.1875H7.5V19.875H7.35937ZM5.8125 7.78125C4.6875 7.78125 3.84375 6.79688 3.84375 5.8125C3.84375 4.6875 4.6875 3.84375 5.8125 3.84375C6.9375 3.84375 7.78125 4.6875 7.78125 5.8125C7.64062 6.79688 6.79688 7.78125 5.8125 7.78125ZM19.875 19.875H16.5V14.6719C16.5 13.4062 16.5 11.8594 14.8125 11.8594C13.125 11.8594 12.8438 13.2656 12.8438 14.6719V20.0156H9.46875V9.1875H12.7031V10.5938C13.125 9.75 14.25 8.90625 15.7969 8.90625C19.1719 8.90625 19.7344 11.1562 19.7344 13.9687V19.875H19.875Z"
                          fill="#545A69"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_8349_348">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </figure>
                </Link>
              </div>
            </div>
            <div className="flex space-x-16 max-xl:space-x-12 max-lg:justify-between max-lg:gap-[0_16px] max-lg:space-x-0 max-lg:pt-12 max-md:flex-wrap max-md:justify-between max-sm:gap-[30px_16px] max-sm:py-10">
              <div className="w-[167px] max-xl:w-[140px] max-md:w-[48%] max-sm:w-[47%]">
                <h5 className="mb-[18px]   font-area text-[22px] leading-[22px] tracking-[-0.264px] text-gray-900 font-wght-700  max-sm:mb-4 max-sm:text-lg max-sm:leading-[18px] max-sm:tracking-[-0.216px]">
                  Company
                </h5>
                <ul className="space-y-3 max-sm:space-x-0">
                  <li>
                    <Link
                      to="/about"
                      className="flex w-fit font-sans text-base leading-6 tracking-[-0.064px] text-[#545A69] transition-all duration-200 font-wght-450 hover:text-[#F96D41]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      className="flex w-fit font-sans text-base leading-6 tracking-[-0.064px] text-[#545A69] transition-all duration-200 font-wght-450 hover:text-[#F96D41]"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="flex w-fit font-sans text-base leading-6 tracking-[-0.064px] text-[#545A69] transition-all duration-200 font-wght-450 hover:text-[#F96D41]"
                    >
                      Investors
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[167px] max-xl:w-[140px] max-md:w-[48%] max-sm:w-[47%]">
                <h5 className="mb-[18px]  font-area text-[22px] leading-[22px] tracking-[-0.264px] text-gray-900 font-wght-700  max-sm:mb-4 max-sm:text-lg max-sm:leading-[18px] max-sm:tracking-[-0.216px]">
                  Products
                </h5>
                <ul className="space-y-3 max-sm:space-x-0">
                  <li>
                    <Link
                      to="/"
                      className="flex w-fit font-sans text-base leading-6 tracking-[-0.064px] text-[#545A69] transition-all duration-200 font-wght-450 hover:text-[#F96D41]"
                    >
                      Libera
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="flex w-fit font-sans text-base leading-6 tracking-[-0.064px] text-[#545A69] transition-all duration-200 font-wght-450 hover:text-[#F96D41]"
                    >
                      RTMNxt
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[167px] max-xl:w-[140px] max-md:w-[48%] max-md:pt-12 max-sm:w-[47%] max-sm:pt-0">
                <h5 className="mb-[18px] font-area text-[22px] leading-[22px] tracking-[-0.264px] text-gray-900 font-wght-700  max-sm:mb-4 max-sm:text-lg max-sm:leading-[18px] max-sm:tracking-[-0.216px]">
                  Legal
                </h5>
                <ul className="space-y-3 max-sm:space-x-0">
                  <li>
                    <Link
                      to="/"
                      className="flex w-fit font-sans text-base leading-6 tracking-[-0.064px] text-[#545A69] transition-all duration-200 font-wght-450 hover:text-[#F96D41]"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-solid border-t-[#F1F3F9] pt-6 max-md:flex-col">
            <p className="w-full text-center font-sans text-base leading-6 tracking-[-0.064px] text-[#545A69] font-wght-450-32">
              © 2024 ElasticRun. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
