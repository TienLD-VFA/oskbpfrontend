import { Swiper } from "framework7-react";
import React from "react";
import { useState } from "react";
// here i'm use css module, not require though, you can use normal css if you want
import styles from "./Carousel.module.scss";

export const Carousel = () => {
	const [isHidePrev] = useState(false);
	const [isHideNext] = useState(false);
	return (
		<Swiper
			slidePrevClass={isHidePrev ? styles.hideBtn : ""}
			slideNextClass={isHideNext ? styles.hideBtn : ""}
			// eslint-disable-next-line react/jsx-no-comment-textnodes
		>
			{/* // Slider Content */}
		</Swiper>
	);
};
