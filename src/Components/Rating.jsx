import CountUp from "react-countup";
import LogoScroll from "../Components/LogoScroll/LogoScroll";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Ratin = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <>
      <section
        ref={ref}
        className="section-text-animate pt-[100px] max-lg:pt-20 max-sm:pt-[56px] bg-[image:var(--Linear,linear-gradient(0deg,#3b5ac2_0,#374ea2_100%))] bg-[50%] bg-cover"
      >
        <div className="mx-auto w-full max-w-[1142px] gap-[0_70px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full">
          <h2 className="text-center font-area text-[40px] leading-[120%] tracking-[-1.4px] text-white font-wght-750 max-lg:text-[32px] max-lg:leading-[120%] max-lg:tracking-[-1.2px] max-sm:mx-auto max-sm:w-full max-sm:max-w-[320px] max-sm:text-[26px] max-sm:leading-8 max-sm:tracking-[-1px]">
            Designed to scale seamlessly
          </h2>

          <div
            className="flex items-center justify-center pt-[75px] max-lg:flex-wrap max-lg:gap-[56px_0] max-lg:pt-[60px] max-sm:mx-auto max-sm:max-w-[300px] max-sm:gap-0 max-sm:pt-4"
            id="numberAnimate"
          >
            <div className="line-gradient relative w-1/4 bg-line-gradient bg-right-top bg-no-repeat text-center max-lg:w-1/2 max-sm:w-full max-sm:bg-none max-sm:py-7">
              <h4
                id="shipment"
                className="pb-2.5 font-sans text-[56px] leading-[96%] tracking-[-2.6px] text-white font-wght-620 max-lg:text-[40px] max-sm:pb-2 max-sm:text-[40px] max-sm:tracking-[-2.4px]"
              >
                {hasAnimated ? (
                  <CountUp start={0} end={75} duration={2} />
                ) : (
                  "0"
                )}
                M+
              </h4>

              <p className="font-sans text-2xl leading-6 tracking-[-0.096px] text-[#F7F8FC] font-wght-450-32 max-sm:text-xl">
                Shipments/month
              </p>
            </div>
            <div className="line-gradient relative w-1/4 bg-line-gradient bg-right-top bg-no-repeat text-center max-lg:w-1/2 max-lg:bg-none max-sm:w-full max-sm:py-7">
              <h4
                id="warehouse"
                className="pb-2.5 font-sans text-[56px] leading-[96%] tracking-[-2.6px] text-white font-wght-620 max-lg:text-[40px] max-sm:pb-2 max-sm:text-[40px] max-sm:tracking-[-2.4px]"
              >
                {hasAnimated ? (
                  <CountUp start={0} end={2400} duration={2} />
                ) : (
                  "0"
                )}
                +
              </h4>
              <p className="font-sans text-2xl leading-6 tracking-[-0.096px] text-[#F7F8FC] font-wght-450-32 max-sm:text-xl">
                Warehouses
              </p>
            </div>
            <div className="w-1/4 text-center max-lg:w-1/2 max-sm:w-full max-sm:pt-7">
              <h4
                id="partners"
                className="pb-2.5 font-sans text-[56px] leading-[96%] tracking-[-2.6px] text-white font-wght-620 max-lg:text-[40px] max-sm:pb-2 max-sm:text-[40px] max-sm:tracking-[-2.4px]"
              >
                {hasAnimated ? (
                  <CountUp start={0} end={50} duration={2} />
                ) : (
                  "0"
                )}
                k +
              </h4>
              <p className="font-sans text-2xl leading-6 tracking-[-0.096px] text-[#F7F8FC] font-wght-450-32 max-sm:text-xl">
                Logistics partners
              </p>
            </div>
          </div>
        </div>
        <LogoScroll />
      </section>
    </>
  );
};

export default Ratin;
