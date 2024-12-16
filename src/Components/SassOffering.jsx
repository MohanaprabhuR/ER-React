import LogoScroll from "./LogoScroll/LogoScroll";
import SassCard from "./SassCard";

const SassOffering = () => {
  const liberaData = {
    brand: "Libera",
    logo: "../images/svg/home/libera.svg",
    title: "AI-powered end-to-end fulfillment platform",
    description:
      "Maximize operational efficiency across logistics and fulfillment networks for accelerated growth",
    metrics: [
      { value: "2 Bn+", label: "Shipments Handled" },
      { value: "97 Bn+", label: "Checkpoints Generated" },
      { value: "99.96%", label: "On Time Deliveries" },
      { value: "400 K+", label: "Vendors Onboarded" },
    ],
    features: [
      {
        icon: "../../images/svg/home/journey.svg",
        title: "Intelligent All Mile Logistics",
        url: "/",
      },
      {
        icon: "../../images/svg/home/storage-unit.svg",
        title: "Warehouse Management System",
        url: "/",
      },
      {
        icon: "../../images/svg/home/delivery-fast.svg",
        title: "Transport Management System",
        url: "/",
      },
      {
        icon: "../../images/svg/home/api.svg",
        title: "Address Sorting Engine",
        url: "/",
      },
      {
        icon: "../../images/svg/home/distance.svg",
        title: "Route Planning Engine",
        url: "/",
      },
    ],
    color: "blue",
  };
  const rtmnxtData = {
    brand: "Sales Lyft ",
    logo: "../../images/svg/home/sales-lyft.svg", // Replace with actual logo component
    title: "AI-powered RTM transformation platform",
    description:
      "Unlock peak sales performance and channel efficiency to boost revenue growth",
    metrics: [
      { value: "22 Mn+", label: "Orders Processed" },
      { value: "$2 Bn+", label: "GMV Transactions" },
      { value: "200+", label: "Brands Onboarded" },
      { value: "400 K+", label: "Vendors Onboarded" },
    ],
    features: [
      {
        icon: "../../images/svg/home/gamified-sfa.svg",
        title: "Gamified SFA",
        url: "/",
      },
      {
        icon: "../../images/svg/home/multi-brand-dms.svg",
        title: "Multi-Brand DMS",
        url: "/",
      },
      {
        icon: "../../images/svg/home/ai-powered-wms.svg",
        title: "Warehouse Management System",
        url: "/",
      },
    ],
    color: "orange",
  };

  return (
    <section className="bg-[#F7F8FC] pb-32 pt-[230px] max-lg:py-[100px] max-sm:pb-[56px] max-sm:pt-[120px]">
      <LogoScroll />
      <div className="mx-auto w-full max-w-[1142px] px-4 pt-[20px] max-xl:max-w-[960px] max-lg:max-w-[720px] max-lg:pt-0 max-md:max-w-[540px] max-sm:max-w-full">
        <h2 className="text-center font-area text-[40px] leading-[120%] tracking-[-1.4px] text-[#111827] font-wght-750 max-lg:mx-auto max-lg:max-w-[380px] max-lg:text-[32px] max-lg:leading-[120%] max-md:mx-auto max-sm:max-w-[290px] max-sm:px-2 max-sm:text-[26px] max-sm:leading-8 max-sm:tracking-[-1px]">
          Our SaaS Offerings
        </h2>
        <div className="-mx-[15px] flex max-xl:-mx-[30px] max-lg:mx-0 max-lg:flex-col">
          <SassCard {...liberaData} />
          <SassCard {...rtmnxtData} />
        </div>
      </div>
    </section>
  );
};

export default SassOffering;
