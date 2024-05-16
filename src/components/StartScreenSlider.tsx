"use client"
// Module
import Image from "next/image"
import localFont from "next/font/local"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
// Images
import SlideOne from "/public/assets/slider-start/1.png"
import SlideTwo from "/public/assets/slider-start/2.png"
import SlideThree from "/public/assets/slider-start/3.png"
import SlideFour from "/public/assets/slider-start/4.png"
import SlideFive from "/public/assets/slider-start/5.png"
// Styles
import styles from "@/styles/page.module.scss"

// Components
const BibasBold = localFont({
	src: "../../public/fonts/bebasneuebold.woff2",
	weight: "700",
	style: "normal",
	display: "swap",
})
export function StartScreenSlider({ btn }: { btn: Function }) {
	return (
		<div className={styles.start__inner}>
			<div className={styles.start__wrapper}>
				<h2 className={BibasBold.className}>ready-made program</h2>
			</div>
			<Swiper className={styles.start__swiper} spaceBetween={40} slidesPerView={"auto"}>
				<SwiperSlide className={styles.start__slide}>
					<div className={styles.start__slide_top}>
						<h4 className={BibasBold.className}>Broad shoulders</h4>
					</div>
					<div className={styles.start__slide_img}>
						<Image src={SlideOne} width={408} height={350} alt="" />
					</div>
					<div className={styles.start__slide_price}>
						<p className={BibasBold.className}>99 AED (26,95$)</p>
						<p className={BibasBold.className}>149 AED </p>
					</div>
					<div className={styles.start__slide_descr}>
						<p>You’ll find out all features of training, and where to make a focus for wide shoulders</p>
					</div>
					<div className={styles.start__slide_btn}>
						<Link href="https://pay.ziina.com/ivanrazmazin13/kwazyDS2b" className={BibasBold.className}>
							Buy
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.start__slide}>
					<div className={styles.start__slide_top}>
						<h4 className={BibasBold.className}>Big arms</h4>
					</div>
					<div className={styles.start__slide_img}>
						<Image src={SlideTwo} width={408} height={350} alt="" />
					</div>
					<div className={styles.start__slide_price}>
						<p className={BibasBold.className}>99 AED (26,95$)</p>
						<p className={BibasBold.className}>149 AED </p>
					</div>
					<div className={styles.start__slide_descr}>
						<p>You’ll get knowledge about arms muscles that you didn’t know and didn’t train</p>
					</div>
					<div className={styles.start__slide_btn}>
						<Link href="https://pay.ziina.com/ivanrazmazin13/H3iRZcEZ3" className={BibasBold.className}>
							Buy
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.start__slide}>
					<div className={styles.start__slide_top}>
						<h4 className={BibasBold.className}>Steel ABS</h4>
					</div>
					<div className={styles.start__slide_img}>
						<Image src={SlideThree} width={408} height={350} alt="" />
					</div>
					<div className={styles.start__slide_price}>
						<p className={BibasBold.className}>99 AED (26,95$)</p>
						<p className={BibasBold.className}>149 AED </p>
					</div>
					<div className={styles.start__slide_descr}>
						<p>This program contains exercises that make your abs BURN 🔥</p>
					</div>
					<div className={styles.start__slide_btn}>
						<Link href="https://pay.ziina.com/ivanrazmazin13/qpBkJmiiK" className={BibasBold.className}>
							Buy
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.start__slide}>
					<div className={styles.start__slide_top}>
						<h4 className={BibasBold.className}>Wide back</h4>
					</div>
					<div className={styles.start__slide_img}>
						<Image src={SlideFour} width={408} height={350} alt="" />
					</div>
					<div className={styles.start__slide_price}>
						<p className={BibasBold.className}>99 AED (26,95$)</p>
						<p className={BibasBold.className}>149 AED </p>
					</div>
					<div className={styles.start__slide_descr}>
						<p>We’re pumping out all the back and which muscles are responsible for the back width</p>
					</div>
					<div className={styles.start__slide_btn}>
						<Link href="https://pay.ziina.com/ivanrazmazin13/BwS4d9v8i" className={BibasBold.className}>
							Buy
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.start__slide}>
					<div className={styles.start__slide_top}>
						<h4 className={BibasBold.className}>Sexy glutes</h4>
					</div>
					<div className={styles.start__slide_img}>
						<Image src={SlideFive} width={408} height={350} alt="" />
					</div>
					<div className={styles.start__slide_price}>
						<p className={BibasBold.className}>99 AED (26,95$)</p>
						<p className={BibasBold.className}>149 AED </p>
					</div>
					<div className={styles.start__slide_descr}>
						<p>You will be shocked as in a month your glutes will become bigger and rounder. You never tried most of exercises and techniques</p>
					</div>
					<div className={styles.start__slide_btn}>
						<Link href="https://pay.ziina.com/ivanrazmazin13/OLeye6dDE" className={BibasBold.className}>
							Buy
						</Link>
					</div>
				</SwiperSlide>
			</Swiper>
			<p className={styles.start__slide_descr}>Please be kind to mention your email during payment, because I’ll send a link with program on your email address</p>
			<button
				onClick={() => {
					btn(false)
				}}
				className={[styles.start__back, BibasBold.className].join(" ")}>
				Back
			</button>
		</div>
	)
}
