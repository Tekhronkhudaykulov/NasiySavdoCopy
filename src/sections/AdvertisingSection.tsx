// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Image } from "antd";

const AdvertisingSection = () => {
  return (
    <Swiper
      className="swiper-arrow md:rounded-[20px] rounded-[10px] md:my-[48px] my-[20px]"
      loop
      speed={1500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      modules={[Autoplay]}
      breakpoints={{
        1440: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide className="cursor-pointer">
        <div className="block md:h-[160px] rounded-[20px]">
          <Image
            className="!rounded-[20px] !h-full object-cover"
            src="https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg"
            rootClassName="h-full w-full"
          >
            <LazyLoadImage
              effect="opacity"
              alt=""
              className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
              src="https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg"
              wrapperClassName="w-full h-full"
            />
          </Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer">
        <div className="block md:h-[160px] rounded-[20px]">
          <Image
            className="!rounded-[20px] !h-full object-cover"
            src="https://images.uzum.uz/co0o1jf2u18gghclhubg/main_page_banner.jpg"
            rootClassName="h-full w-full"
          >
            <LazyLoadImage
              effect="opacity"
              alt=""
              className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
              src="https://images.uzum.uz/co0o1jf2u18gghclhubg/main_page_banner.jpg"
              wrapperClassName="w-full h-full"
            />
          </Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer">
        <div className="block md:h-[160px] rounded-[20px]">
          <Image
            className="!rounded-[20px] !h-full object-cover"
            src="https://images.uzum.uz/cpcsva4crcfqljg1c62g/main_page_banner.jpg"
            rootClassName="h-full w-full"
          >
            <LazyLoadImage
              effect="opacity"
              alt=""
              className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
              src="https://images.uzum.uz/cpcsva4crcfqljg1c62g/main_page_banner.jpg"
              wrapperClassName="w-full h-full"
            />
          </Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer">
        <div className="block md:h-[160px] rounded-[20px]">
          <Image
            className="!rounded-[20px] !h-full object-cover"
            src="https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg"
            rootClassName="h-full w-full"
          >
            <LazyLoadImage
              effect="opacity"
              alt=""
              className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
              src="https://images.uzum.uz/cq1uu8j5qt1gj8ddqckg/main_page_banner.jpg"
              wrapperClassName="w-full h-full"
            />
          </Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer">
        <div className="block md:h-[160px] rounded-[20px]">
          <Image
            className="!rounded-[20px] !h-full object-cover"
            src="https://images.uzum.uz/co0o1jf2u18gghclhubg/main_page_banner.jpg"
            rootClassName="h-full w-full"
          >
            <LazyLoadImage
              effect="opacity"
              alt=""
              className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
              src="https://images.uzum.uz/co0o1jf2u18gghclhubg/main_page_banner.jpg"
              wrapperClassName="w-full h-full"
            />
          </Image>
        </div>
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer">
        <div className="block md:h-[160px] rounded-[20px]">
          <Image
            className="!rounded-[20px] !h-full object-cover"
            src="https://images.uzum.uz/cpcsva4crcfqljg1c62g/main_page_banner.jpg"
            rootClassName="h-full w-full"
          >
            <LazyLoadImage
              effect="opacity"
              alt=""
              className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
              src="https://images.uzum.uz/cpcsva4crcfqljg1c62g/main_page_banner.jpg"
              wrapperClassName="w-full h-full"
            />
          </Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AdvertisingSection;
