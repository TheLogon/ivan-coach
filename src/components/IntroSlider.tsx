"use client"
// Module
import Image from "next/image"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Images
import SliderOne from "/public/assets/slider-main/1.png"
import SliderTwo from "/public/assets/slider-main/2.png"
import SliderThree from "/public/assets/slider-main/3.png"
// Styles
import styles from "@/styles/page.module.scss"
// Components
export function IntroSlider() {
	return (
		<Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} autoplay loop>
			<SwiperSlide>
				<div className={styles.intro__slider_img}>
					<Image src={SliderOne} width={1920} height={1000} style={{ objectFit: "cover" }} alt="" priority />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.intro__slider_img}>
					<Image src={SliderTwo} width={1920} height={1000} style={{ objectFit: "cover" }} alt="" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.intro__slider_img}>
					<Image src={SliderThree} width={1920} height={1000} style={{ objectFit: "cover" }} alt="" />
				</div>
			</SwiperSlide>
		</Swiper>
	)
}
