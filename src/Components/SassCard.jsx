import { Link } from "react-router-dom";

const SassCard = ({
  brand,
  logo,
  title,
  description,
  metrics,
  features,
  color = "blue",
}) => {
  const MetricBox = ({ value, label }) => (
    <div className="w-1/2 py-[30px] max-sm:py-7 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );

  const FeatureBox = ({ icon, title, url }) => (
    <div className="w-1/2 p-2 max-sm:w-full max-sm:p-0">
      <Link to={url} className="group flex size-full">
        <div
          style={{
            boxShadow:
              "0px 0px 1px 0px rgba(38, 50, 56, 0.3),0px 1px 2px 0px rgba(38, 50, 56, 0.06)",
          }}
          className="dutration-200 relative size-full min-h-[134px] rounded-2xl border border-transparent bg-[#f7f8fc] p-5 shadow-3xl group-hover:border-[#3A54B2] group-hover:bg-[#ffffff] max-sm:flex max-sm:min-h-[unset] max-sm:items-center max-sm:rounded-xl max-sm:px-4 max-sm:py-[18px]"
        >
          <figure>
            <img src={icon} alt={title} />
          </figure>
          <div className="mt-2 font-medium">{title}</div>
        </div>
      </Link>
    </div>
  );

  const themeColor = color === "blue" ? "text-[#3A54B2]" : "text-[#F96D41]";

  return (
    <div className="w-1/2 px-[15px] pt-[56px] max-xl:w-full max-xl:px-2.5 max-lg:mx-auto max-lg:max-w-[540px] max-lg:px-0 max-lg:pt-8 max-md:max-w-full">
      <div className="relative h-full overflow-hidden rounded-3xl bg-white p-8 pb-6 max-sm:rounded-2xl max-sm:px-4 max-sm:pb-4 max-sm:pt-7 shadow-[0px_0px_1px_0px_rgba(38,50,56,0.3),0px_1px_2px_0px_rgba(38,50,56,0.06)]">
        <div className="w-full">
          <figure className="mx-auto size-20 max-sm:size-16">
            <img className="size-full" src={logo} alt={brand} />
          </figure>
          <h2
            className={`${themeColor} pb-4 pt-7 text-center font-area text-[36px] leading-[100%] tracking-[-1.4px] font-wght-750 max-lg:leading-[110%] max-sm:pb-3 max-sm:pt-6 max-sm:text-[28px] max-sm:leading-[110%] max-sm:-tracking-[1.4px]`}
          >
            {brand}
          </h2>
          <p className="pb-[10px] text-center font-area text-xl leading-[110%] tracking-[-0.5px] text-gray-900 font-wght-700 max-xl:mx-auto max-xl:max-w-[280px]">
            {title}
          </p>
          <p className="text-center font-sans text-xl leading-6 tracking-[-0.08px] text-[#545A69] font-wght-480-32 max-xl:-mx-2 max-lg:mx-0 max-sm:mx-auto max-sm:max-w-[320px] max-sm:text-[15px] max-sm:leading-5 max-sm:-tracking-[0.06px]">
            {description}
          </p>
          <div className="relative mb-[18px] mt-[14px] flex flex-wrap items-center justify-center">
            {metrics.map((metric, index) => (
              <MetricBox
                key={index}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
          <div className="flex justify-center py-4">
            <p className="z-10 inline-block bg-white px-2 text-center font-sans text-[15px] leading-6 tracking-[-0.06px] text-[#545A69] font-wght-480-32">
              {brand}
            </p>
          </div>
          <div className="-mx-[8px] flex flex-wrap max-sm:mx-0 max-sm:space-y-4">
            {features.map((feature, index) => (
              <FeatureBox
                key={index}
                icon={feature.icon}
                title={feature.title}
                url={feature.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SassCard;
