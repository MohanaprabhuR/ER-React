
const ImageGallery = () => {
  return (
    <>
      <div className="flex gap-[0_24px] pt-[100px] max-lg:pt-20 max-md:pt-16 max-sm:gap-[0_16px] max-sm:pt-0">
        <div className="relative flex flex-col gap-[24px] max-sm:gap-[16px_0]">
            <div className="flex gap-[0_24px] max-sm:items-end max-sm:gap-[0_16px]">
                <figure className="w-full max-w-[247px] overflow-hidden rounded-lg shadow-[0px_-15px_34px_0px_rgba(105,110,124,0.10)] max-sm:hidden">
                <img src="../../images/About/about-banner-image1.jpg" alt="Banner Image,Store,Rural India" />
                </figure>
                <figure className="w-full max-w-[492px] overflow-hidden rounded-lg shadow-[0px_-15px_34px_0px_rgba(105,110,124,0.10)]">
                <img src="../../images/About/about-banner-image2.jpg" alt="Banner Image,Store,Rural India,CII,UNICORN Submit" class="size-full object-cover" />
                </figure>
            </div>
            <div className="flex gap-[0_24px] max-sm:flex-row-reverse max-sm:items-end max-sm:gap-[0_16px]">
                <figure className="w-full max-w-[492px] overflow-hidden rounded-lg shadow-[0px_-15px_34px_0px_rgba(105,110,124,0.10)]">
                <img src="../../images/About/about-banner-image3.jpg" alt="Banner Iamge,Group,Store,Rural India" class="size-full object-cover" />
                </figure>
                <figure className="w-full max-w-[247px] overflow-hidden rounded-lg shadow-[0px_-15px_34px_0px_rgba(105,110,124,0.03)]">
                <img src="../../images/About/about-banner-image4.jpg" alt="Banner Image,Future Ready,Award,Large Scale Enterprise" class="size-full object-cover" />
                </figure>
            </div>
        </div>
        <figure className="w-full max-w-[323px] overflow-hidden rounded-lg shadow-[0px_-15px_34px_0px_rgba(105,110,124,0.10)] max-lg:hidden">
        <img src="../../images/About/about-banner-image5.jpg" alt="About Banner,Group,Store,Rural India" class="size-full object-cover" />
        </figure>
      </div>
    </>
  );
};

export default ImageGallery;
