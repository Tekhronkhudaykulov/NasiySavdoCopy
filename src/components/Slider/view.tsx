// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./banner.scss";
// import { Shimmer } from "react-shimmer";
import { Image } from "antd";
import { bannerQuery } from "../../hook/queries";
import { API_URL } from "../../config";
import { imgUrl } from "../../helpers/api";


const Slider = () => {
  const { data } = bannerQuery();

  console.log(data);

  return (
    <Swiper
      className="swiper-arrow md:rounded-[20px] rounded-[10px] mt-[10px]"
      loop
      speed={1500}
    
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
      }}
    >
      {/* <SwiperSlide>
        <Skeleton
          paragraph={{ rows: 0 }}
          className="md:h-[400px] h-[185px] [&>div>h3]:!h-full [&>div>h3]:!w-full"
        />
      </SwiperSlide> */}
      {data?.map((item: any, ind: any) => (
        <SwiperSlide className="cursor-pointer" key={ind}>
          <div className="block aspect-[2/1] md:aspect-[3.4/1]">
            <Image
              className="md:!rounded-[20px] rounded-[10px] !h-full object-cover"
              src={`${imgUrl}/${item.photo}`}
              rootClassName="h-full w-full"
            >
              <LazyLoadImage
                effect="opacity"
                alt=""
                className="h-full object-cover w-full bg-[#eee] md:rounded-[0] rounded-[20px]"
                src={`${API_URL}/${item.photo}`}
                wrapperClassName="w-full h-full"
              />
            </Image>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
