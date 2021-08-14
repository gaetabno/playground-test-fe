import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
// Swiper css
import "swiper/swiper-bundle.min.css";

function Slider() {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide className="hello">
        <div className="container container-small">
          <div>
            <h1>lorem ipsum.</h1>
            <p>
              Consectetur adipiscing elit. Nulla condimentum tortor sem, in
              semper nisl bibendum eu.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="circle">
        <div className="container container-small">
          <div>
            <h2>lorem ipsum.</h2>
            <p>
              Consectetur adipiscing elit. Nulla condimentum tortor sem, in
              semper nisl bibendum eu.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="play">
        <div className="container container-small">
          <div>
            <h2>lorem ipsum.</h2>
            <p>
              Consectetur adipiscing elit. Nulla condimentum tortor sem, in
              semper nisl bibendum eu.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
