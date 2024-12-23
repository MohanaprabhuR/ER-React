import React from 'react';

const VoiceOfCustomerSection = ({ customerHeading, testimonials }) => {
  return (
    <section className="overflow-hidden bg-customer-bg bg-cover bg-no-repeat pb-[100px] pt-32 max-md:py-20 max-sm:py-[60px]">
    <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:flex max-sm:max-w-full max-sm:flex-wrap">
      {customerHeading && (
        <div className="mx-auto max-w-[700px] pb-[82px] max-lg:max-w-full max-md:pb-24 max-sm:px-5 max-sm:pb-4">
          <h2 className="text-center font-area text-[40px] leading-[112%] tracking-[-1.4px] text-gray-900 font-wght-750 max-lg:text-[32px] max-lg:leading-[120%] max-lg:tracking-[-1.2px] max-sm:text-[26px] max-sm:leading-[128%] max-sm:tracking-[-1px]">
            {customerHeading}
          </h2>
        </div>
      )}
    </div>
    <div className="animation-card flex space-x-4 max-md:overflow-scroll max-md:px-4 max-md:pt-6">
      {[1, 2].map((groupIndex) => (
        <div 
          key={groupIndex}
          className="marquee__group flex items-end gap-[0_16px] max-md:animate-none"
          aria-hidden={groupIndex === 2 ? "true" : undefined}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full min-w-[350px] max-w-[350px] flex-col justify-between rounded-[20px] border border-solid bg-white p-8 transition-all delay-150 duration-150 ease-in-out hover:-translate-y-3 hover:scale-105 max-sm:min-w-[315px] max-sm:max-w-[315px] max-sm:p-6 max-sm:hover:translate-y-0 max-sm:hover:scale-100"
            >
              <p className="font-sans text-lg leading-7 tracking-[-0.072px] text-[rgba(17,24,39,0.85)] font-wght-480-32 max-sm:text-[17px] max-sm:leading-[25px] max-sm:tracking-[-0.068px]">
                {testimonial.testimonialContent}
              </p>
              <div className="flex items-center gap-3 pt-10 max-sm:pt-6">
                {testimonial.testimonialImage && (
                  <figure className={`flex ${
                    testimonial.isLogo ? 'h-8 w-auto' : 'h-10 w-10 rounded-full overflow-hidden'
                  }`}>
                    <img 
                      src={testimonial.testimonialImage} 
                      alt={testimonial.testimonialName}
                      className={testimonial.isLogo ? 'object-contain' : 'object-cover w-full h-full'} 
                    />
                  </figure>
                )}
                <div className="flex flex-col">
                {testimonial.testimonialRole && (
                  <span className="text-ellipsis font-sans text-base not-italic leading-[138%] tracking-[0.192px] text-[#211F28] font-wght-600 max-sm:text-[15px] max-sm:leading-[138%]">
                    {testimonial.testimonialName}
                  </span>
                )}
                  {testimonial.testimonialRole && (
                    <span className="font-sans text-sm not-italic leading-[131%] tracking-[0.196px] text-[#545A69] font-wght-450 max-sm:text-[13px] max-sm:leading-[131%]">
                      {testimonial.testimonialRole}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
  );
};

export default VoiceOfCustomerSection;


