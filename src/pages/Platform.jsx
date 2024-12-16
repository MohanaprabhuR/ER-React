import Herosection from "../Components/HeroSection";
import ScheduleButton from "../Components/Button/ScheduleButton";
import SassOffering from "../Components/SassOffering";
import BannerSection from "../Components/BannerSection";

const Platform = () => {
  return (
    <>
      <Herosection
        heading="Technology powering India's largest sales and fulfillment networks -"
        subheading="Now available in SaaS"
        actingButton={
          <ScheduleButton
            text="Schedule a Demo"
            bg="bg-transparent"
            border="border"
            stroke="#ffffff"
            color="text-white"
          />
        }
        heroImage="../../images/svg/home/tech-home-hero-image.svg"
        imageAlt="Technology Powering,India's Largest Sales"
      />
      <SassOffering />
      <BannerSection
        bannerText="Transform your sales and fulfillment network to drive accelerated growth"
        actingButton={
          <ScheduleButton
            text="Schedule a Demo"
            bg="bg-white"
            stroke="#374EA2"
            color="text-[#374EA2]"
          />
        }
      />
    </>
  );
};

export default Platform;
