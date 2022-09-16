import React, { useEffect } from "react";
import "./TutorialDialog.scss";
import { Swiper, SwiperSlide } from "framework7-react";
import ReactDOM from "react-dom";
import { Slider1 } from "../TutorialSlider/TutorialSlider";

const TutorialDialog = () => {
  useEffect(() => {
    document.querySelector(".swiper-button-prev").style.display = "none";
  }, []);

  function handleABC(data) {
    console.log(data);
    if (!data.activeIndex) {
      document.querySelector(".swiper-button-prev").style.display = "none";
    } else {
      document.querySelector(".swiper-button-prev").style.display = "";
    }
    if (data.activeIndex === 7) {
      document.querySelector(".swiper-button-next").style.display = "none";
    } else {
      document.querySelector(".swiper-button-next").style.display = "";
    }
  }

  return ReactDOM.createPortal(
    <div className="tutorial-dialog">
      <Swiper
        navigation
        pagination
        speed={700}
        initialSlide={0}
        slidesPerView={1}
        onActiveIndexChange={handleABC}
      >
        <SwiperSlide className="swiper-slide-1">
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-item"
            src="https://cf.shopee.vn/file/5b5de1582d99cbbe75a8f9a5c4dae1c2_xxhdpi"
          ></img>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-1">
          <Slider1 />
        </SwiperSlide>
      </Swiper>
      <div className="tutorial-dialog__button-text">
        <span className="tutorial-dialog__button-text__abc">前へ</span>
        <span className="">次へ</span>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default TutorialDialog;
