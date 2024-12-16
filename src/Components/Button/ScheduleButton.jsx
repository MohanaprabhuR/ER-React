import { Link } from "react-router-dom";

const ScheduleButton = ({ text, bg, stroke, border, color }) => {
  return (
    <>
      <Link
        to="mailto:simplify@elastic.run"
        className={`
        ${bg}  ${color} ${border}  mt-[36px] inline-flex items-center justify-center gap-[0_12px] rounded-[72px]  px-7 py-[16px] font-sans text-xl leading-[100%] tracking-[-0.1px] shadow-3xl transition-all delay-100 duration-[0.25s] font-wght-600 hover:scale-[1.025] max-sm:mt-7 max-sm:py-[12px] max-sm:pl-6 max-sm:pr-5 max-sm:text-[17px] max-sm:leading-[17px] max-sm:tracking-[-0.09px]`}
      >
        {text}
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
          >
            <path
              d="M1 12H17M17 12L11 6M17 12L11 18"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </figure>
      </Link>
    </>
  );
};

export default ScheduleButton;
