// about.js
import Herosection from "../Components/HeroSection";
import Ratting from "../Components/Rating";
import ScheduleButton from "../Components/Button/ScheduleButton";
import PopUpVideo from "../Components/PopUpVideo/PopUpVideo";
import ImageTextSection from "../Components/ImageTextSection";
import BannerSection from "../Components/BannerSection";

const data = {
  heroSection: {
    heading: "Turn Logistics into a Growth Engine",
    subheading:
      "Unlock growth with on-demand scalability and six sigma customer experience, achieving 99.96% shipment processing without any supervisory overheads",
    actingButton: (
      <ScheduleButton
        text="Explore Now"
        bg="bg-[#374EA2]"
        stroke="#ffffff"
        color="text-white"
      />
    ),
    heroImage: "../../images/All-mile/all-mile-logistics-hero.png",
    imageAlt: "All Mile Dashboard,Schedule Arrival,Shipment,Package",
  },
  imageTextSections: [
    {
      bgcolor: "bg-[#F7F8FC]",
      heading: "Eliminate first-mile defects, elevate customer trust",
      subheading:
        "Ensure accurate task assignments during first-mile pickup and avoid re-deliveries to increase workforce productivity and elevate customer trust",
      imageUrl: "../../public/images/All-mile/seamless-logistics-img.png",
      imageAlt:
        "Seamless Logistics, End-to-end AI-powered autonomous logistics operations",
      PopUpVideo: (
        <PopUpVideo
          videoUrl="iYgzpqHGnWA"
          thumbnailImage="../../../images/All-mile/all-mile-video-thumbnail.png"
        />
      ),
    },
    {
      bgcolor: "bg-[#ffffff]",
      heading: "Eliminate first-mile defects, elevate customer trust",
      subheading:
        "Ensure accurate task assignments during first-mile pickup and avoid re-deliveries to increase workforce productivity and elevate customer trust",
      column: true,
      imageUrl: "../../public/images/All-mile/first-mile-trust.png",
      imageAlt:
        "First Mile, Eliminate First-Mile Defects, Elevate Customer Trust",
    },
    {
      bgcolor: "bg-[#ffffff]",
      heading: "Consistently assure seamless last-mile customer experience",
      subheading:
        "Deliver on-time by assigning deliveries to the best agents based on location, route, risk profile, delivery time and more, ensuring a delightful customer experience",
      column: true,
      imageUrl: "../../public/images/All-mile/svg/last-mile.svg",
      imageAlt:
        "Last Mile, Consistently Assure Seamless Last- Mile Customer Experience",
    },
  ],
  bannerSection: {
    bannerText:
      "Transform your logistics and fulfillment operations into a revenue powerhouse",
    actingButton: (
      <ScheduleButton
        text="Schedule a Demo"
        bg="bg-white"
        stroke="#374EA2"
        color="text-[#374EA2]"
      />
    ),
  },
};

const allMile = () => {
  return (
    <>
      <Herosection
        heading={data.heroSection.heading}
        subheading={data.heroSection.subheading}
        actingButton={data.heroSection.actingButton}
        heroImage={data.heroSection.heroImage}
        imageAlt={data.heroSection.imageAlt}
      />

      <Ratting />

      {data.imageTextSections.map((section, index) => (
        <ImageTextSection
          key={index}
          bgcolor={section.bgcolor}
          heading={section.heading}
          subheading={section.subheading}
          imageUrl={section.imageUrl}
          PopUpVideo={section.PopUpVideo}
          column={section.column}
          imageAlt={section.imageAlt}
        />
      ))}

      <BannerSection
        bannerText={data.bannerSection.bannerText}
        actingButton={data.bannerSection.actingButton}
      />
    </>
  );
};

export default allMile;
