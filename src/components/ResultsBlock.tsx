"use client"
// Module
import Image from "next/image"
import localFont from "next/font/local"
import { useRef } from "react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Images
import SliderResultsOne from "/public/assets/results/1.png"
import SliderResultsTwo from "/public/assets/results/2.png"
import SliderResultsThree from "/public/assets/results/3.png"
import SliderResultsFour from "/public/assets/results/4.png"
import SliderResultsFive from "/public/assets/results/5.png"
import SliderResultsSix from "/public/assets/results/6.png"
import SliderResultsSeven from "/public/assets/results/7.png"
import SliderResultsEach from "/public/assets/results/8.png"
import SliderResultsNine from "/public/assets/results/9.png"
import SliderResultsTen from "/public/assets/results/10.png"
import SliderResultsEleven from "/public/assets/results/11.png"
import SliderResultsTwelve from "/public/assets/results/12.png"
import SliderResultsThirteen from "/public/assets/results/13.png"
import SliderResultsFourteen from "/public/assets/results/14.png"
import SliderResultsFiveteen from "/public/assets/results/15.png"
import SliderResultsSixteen from "/public/assets/results/16.png"
// Styles
import styles from "@/styles/page.module.scss"
import container from "@/styles/container.module.scss"
// Components
const BibasBold = localFont({
	src: "../../public/fonts/bebasneuebold.woff2",
	weight: "700",
	style: "normal",
	display: "swap",
})
export function ResultsBlock({
	title,
	text,
	slide,
	slideTwo,
	slideThree,
	slideFour,
	slideFive,
	slideSix,
	slideSeven,
	slideEight,
	textTwo,
}: {
	title: string
	text: string
	slide: string
	slideTwo: string
	slideThree: string
	slideFour: string
	slideFive: string
	slideSix: string
	slideSeven: string
	slideEight: string
	textTwo: string
}) {
	const sliderRef = useRef()
	return (
		<section id="results" className={[styles.results, BibasBold.className].join(" ")}>
			<div className={container.container}>
				<div className={styles.results__inner}>
					<h2>{title}</h2>
					<p>{text}</p>
					<Swiper className={styles.results__swiper} onSwiper={it => ((sliderRef.current as any) = it)} modules={[Navigation]} spaceBetween={40} slidesPerView={3} breakpoints={{ 1577: { slidesPerView: 3 }, 1145: { slidesPerView: 2 }, 320: { slidesPerView: 1 } }}>
						<SwiperSlide>
							<div className={styles.results__slide}>
								<div className={styles.results__slide_imgs}>
									<Image src={SliderResultsOne} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
									<Image src={SliderResultsTwo} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
								</div>
								<p className={[styles.results__slide_text, BibasBold.className].join(" ")}>{slide}</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.results__slide}>
								<div className={styles.results__slide_imgs}>
									<Image src={SliderResultsThree} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
									<Image src={SliderResultsFour} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
								</div>
								<p className={[styles.results__slide_text, BibasBold.className].join(" ")}>{slideTwo}</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.results__slide}>
								<div className={styles.results__slide_imgs}>
									<Image src={SliderResultsFive} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
									<Image src={SliderResultsSix} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
								</div>
								<p className={[styles.results__slide_text, BibasBold.className].join(" ")}>{slideThree}</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.results__slide}>
								<div className={styles.results__slide_imgs}>
									<Image src={SliderResultsSeven} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
									<Image src={SliderResultsEach} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
								</div>
								<p className={[styles.results__slide_text, BibasBold.className].join(" ")}>{slideFour}</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.results__slide}>
								<div className={styles.results__slide_imgs}>
									<Image src={SliderResultsNine} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
									<Image src={SliderResultsTen} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
								</div>
								<p className={[styles.results__slide_text, BibasBold.className].join(" ")}>{slideFive}</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.results__slide}>
								<div className={styles.results__slide_imgs}>
									<Image src={SliderResultsEleven} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
									<Image src={SliderResultsTwelve} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
								</div>
								<p className={[styles.results__slide_text, BibasBold.className].join(" ")}>{slideSix}</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.results__slide}>
								<div className={styles.results__slide_imgs}>
									<Image src={SliderResultsThirteen} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
									<Image src={SliderResultsFourteen} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
								</div>
								<p className={[styles.results__slide_text, BibasBold.className].join(" ")}>{slideSeven}</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.results__slide}>
								<div className={styles.results__slide_imgs}>
									<Image src={SliderResultsFiveteen} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
									<Image src={SliderResultsSixteen} width={262} height={360} style={{ objectFit: "cover" }} alt="" />
								</div>
								<p className={[styles.results__slide_text, BibasBold.className].join(" ")}>{slideEight}</p>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className={styles.results__control}>
						<button onClick={() => (sliderRef.current as any)?.slidePrev()} className={styles.results__control_arrow}>
							<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M31.9098 14.82L29.0898 12L17.0898 24L29.0898 36L31.9098 33.18L22.7498 24L31.9098 14.82Z" fill="white" />
							</svg>
						</button>
						<p className={BibasBold.className}>{textTwo}</p>
						<button onClick={() => (sliderRef.current as any)?.slideNext()} className={styles.results__control_arrow}>
							<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.9098 12L17.0898 14.82L26.2498 24L17.0898 33.18L19.9098 36L31.9098 24L19.9098 12Z" fill="white" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
