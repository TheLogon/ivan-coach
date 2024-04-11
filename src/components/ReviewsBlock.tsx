"use client"
// Module
import localFont from "next/font/local"
import { useRef } from "react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Images

// Styles
import styles from "@/styles/page.module.scss"
import container from "@/styles/container.module.scss"
import { BtnBay } from "./BtnBay"
// Components
const BibasBold = localFont({
	src: "../../public/fonts/bebasneuebold.woff2",
	weight: "700",
	style: "normal",
	display: "swap",
})
export function ReviewsBlock({
	title,
	reviewName,
	reviewDecr,
	reviewText,
	reviewTwoName,
	reviewTwoDecr,
	reviewTwoText,
	reviewThreeName,
	reviewThreeDecr,
	reviewThreeText,
}: {
	title: string
	reviewName: string
	reviewDecr: string
	reviewText: string
	reviewTwoName: string
	reviewTwoDecr: string
	reviewTwoText: string
	reviewThreeName: string
	reviewThreeDecr: string
	reviewThreeText: string
}) {
	const sliderRef = useRef()
	return (
		<section id="reviews" className={[styles.reviews, BibasBold.className].join(" ")}>
			<div className={container.container}>
				<div className={styles.reviews__inner}>
					<h2>{title}</h2>
					<div className={styles.reviews__slider}>
						<button onClick={() => (sliderRef.current as any)?.slidePrev()} className={styles.rewiews__slide_arrow}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z" fill="white" />
							</svg>
						</button>
						<Swiper className={styles.reviews__swiper} onSwiper={it => ((sliderRef.current as any) = it)} modules={[Navigation]} spaceBetween={40} slidesPerView={3} breakpoints={{ 1577: { slidesPerView: 3 }, 1440: { slidesPerView: 2 }, 320: { slidesPerView: 1 } }}>
							<SwiperSlide className={styles.reviews__slide}>
								<div className={styles.reviews__slide_top}>
									<h4>{reviewName}</h4>
									<div className={styles.reviews__slide_star}>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
									</div>
								</div>
								<p className={styles.reviews__slide_time}>{reviewDecr}</p>
								<p className={styles.reviews__slide_text}>{reviewText}</p>
							</SwiperSlide>
							<SwiperSlide className={styles.reviews__slide}>
								<div className={styles.reviews__slide_top}>
									<h4>{reviewTwoName}</h4>
									<div className={styles.reviews__slide_star}>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
									</div>
								</div>
								<p className={styles.reviews__slide_time}>{reviewTwoDecr}</p>
								<p className={styles.reviews__slide_text}>{reviewTwoText}</p>
							</SwiperSlide>
							<SwiperSlide className={styles.reviews__slide}>
								<div className={styles.reviews__slide_top}>
									<h4>{reviewThreeName}</h4>
									<div className={styles.reviews__slide_star}>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
									</div>
								</div>
								<p className={styles.reviews__slide_time}>{reviewThreeDecr}</p>
								<p className={styles.reviews__slide_text}>{reviewThreeText}</p>
							</SwiperSlide>
							<SwiperSlide className={styles.reviews__slide}>
								<div className={styles.reviews__slide_top}>
									<h4>Евгений</h4>
									<div className={styles.reviews__slide_star}>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
										<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 0L12.6215 6.39178L19.5106 6.90983L14.2417 11.3782L15.8779 18.0902L10 14.46L4.12215 18.0902L5.75829 11.3782L0.489435 6.90983L7.37848 6.39178L10 0Z" fill="#79AE07" />
										</svg>
									</div>
								</div>
								<p className={styles.reviews__slide_time}>2 года тренировок</p>
								<p className={styles.reviews__slide_text}>
									С Иваном занимаюсь 2 года. Начинали тренировки офлайн. Выбор был сделан случайный, но ни капли не пожалел. С самого начала увлек разнообразными тренировками. Когда перешли на онлайн, вовлеченность в процесс как тренера никак не снизилась. Все тренировки
									прописывает подробно, на начальных этапах или при вводе нового упражнения отправляет видео правильного выполнения. В случае вопросов оперативно дает обратную связь. Всегда дает нагрузки немного сверх твоих возможностей для стимула, но без перебора. Всегда просит
									обратную связь о состоянии, для корректировок программы при необходимости. Советую как приветливого, но строгого профессионального тренера.
								</p>
							</SwiperSlide>
						</Swiper>
						<button onClick={() => (sliderRef.current as any)?.slideNext()} className={styles.rewiews__slide_arrow}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" fill="white" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
