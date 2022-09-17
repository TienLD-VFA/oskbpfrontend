import React, { useEffect, useState } from "react";
import "./TutorialDialog.scss";
import { Swiper, SwiperSlide } from "framework7-react";
import ReactDOM from "react-dom";
import { Slider1 } from "../TutorialSlider/TutorialSlider";
// here i'm use css module, not require though, you can use normal css if you want
import { useRef } from "react";

const TutorialDialog = () => {
	const [currentId, setCurrentId] = useState(0);

	// useEffect(() => {
	// 	document.querySelector(".swiper-button-prev").style.display = "none";
	// }, []);

	// function handleABC(data) {
	// 	console.log(data);
	// 	if (!data.activeIndex) {
	// 	  document.querySelector(".swiper-button-prev").style.display = "none";
	// 	} else {
	// 	  document.querySelector(".swiper-button-prev").style.display = "";
	// 	}
	// 	if (data.activeIndex === 7) {
	// 	  document.querySelector(".swiper-button-next").style.display = "none";
	// 	} else {
	// 	  document.querySelector(".swiper-button-next").style.display = "";
	// 	}
	// }

	const swiperRef = useRef(null);

	useEffect(() => {
		if (swiperRef?.current !== null) {
			const prevBtn = swiperRef.current.querySelector(".swiper-button-prev");
			const nextBtn = swiperRef.current.querySelector(".swiper-button-next");
			prevBtn.style.display = currentId === 0 ? "none" : "flex";
			nextBtn.style.display = currentId === 7 ? "none" : "flex";
		}
	}, [currentId, swiperRef]);

	return ReactDOM.createPortal(
		<div className="tutorial-dialog">
			<Swiper
				navigation
				pagination
				speed={700}
				initialSlide={0}
				slidesPerView={1}
				onActiveIndexChange={({ activeIndex }) => setCurrentId(activeIndex)}
				ref={swiperRef}
			>
				<SwiperSlide className="swiper-slide-1">
					<Slider1 />
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="slide-item"
						src="https://cf.shopee.vn/file/5b5de1582d99cbbe75a8f9a5c4dae1c2_xxhdpi"
            alt="slide-item-img"
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
				<span className="tutorial-dialog__button-text__abc" style={{opacity: currentId === 0 ? 0 : 1 }}>前へ</span>
				<span className=""  style={{opacity: currentId === 7 ? 0 : 1 }}>次へ</span>
			</div>
		</div>,
		document.querySelector("body")
	);
};

export default TutorialDialog;
