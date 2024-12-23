import React from "react";

const CommunityInvites = ({
  communityInvitesHeading,
  communityInvitesSubHeading,
  imageArray,
}) => {
  return (
    <section className="overflow-hidden bg-white py-[128px] max-lg2:py-28 max-sm:py-[60px]">
      <div className="mx-auto w-full max-w-[1142px] overflow-hidden px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full">
        <div className="mx-auto w-full max-w-[520px] text-center max-md:max-w-full">
          <h2 className="font-area text-[40px] leading-[112%] tracking-[-1.4px] text-gray-900 font-wght-750 max-lg:text-[32px] max-lg:leading-[120%] max-lg:tracking-[-1.2px] max-sm:text-[26px] max-sm:leading-[128%] max-sm:tracking-[-1px]">
            {communityInvitesHeading}
          </h2>
          <p className="pt-3 font-sans text-2xl leading-8 tracking-[-0.096px] text-[#545A69] font-wght-480 max-sm:pt-[10px] max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
            {communityInvitesSubHeading}
          </p>
        </div>
      </div>
      <div className="flex gap-[0_30px] max-md:gap-[0_16px]">
        <div className="marquee__group flex gap-[0_30px] pt-[102px] max-lg:pt-20 max-md:gap-[0_16px] max-sm:pt-12 animate-marquee">
          {imageArray.map((imageUrl, index) => (
            <div
              key={index}
              className="w-full min-w-[540px] overflow-hidden rounded-lg shadow-[0px_4px_54px_0px_rgba(105,110,124,0.12)] max-lg:min-w-[350px] max-sm:min-w-[284px]"
            >
              <figure>
                <img
                  src={imageUrl}
                  alt={`Community Invite Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="marquee__group flex gap-[0_30px] pt-[102px] max-lg:pt-20 max-md:gap-[0_16px] max-sm:pt-12 animate-marquee"
        >
          {imageArray.map((imageUrl, index) => (
            <div
              key={index}
              className="w-full min-w-[540px] overflow-hidden rounded-lg shadow-[0px_4px_54px_0px_rgba(105,110,124,0.12)] max-lg:min-w-[350px] max-sm:min-w-[284px]"
            >
              <figure>
                <img
                  src={imageUrl}
                  alt={`Community Invite Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityInvites;
