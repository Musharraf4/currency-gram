import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./app-carousal.scss";

const AppCarousel = (props: any) => {
  const { slides, className, slidesPerView } = props;

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={`mySwiper ${className}`}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        "@1.50": {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        "@1.80": {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slides.map((slide: any) => {
        return <SwiperSlide>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
};
export default AppCarousel;
