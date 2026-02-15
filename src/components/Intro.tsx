"use client"
// Module
import Image from "next/image"
import localFont from "next/font/local"
// Images
import Logo from "/public/assets/logo.svg"
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

const BibasRegular = localFont({
	src: "../../public/fonts/bebasneueregular.woff2",
	weight: "400",
	style: "normal",
	display: "swap",
})

export function Intro() {
	return (
		<>
			<div className={styles.preview}>
				<div className={styles.preview__toast}>
					<p>Open in <br /> browser</p>
					<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.0427 5.60474L8.31949 10.328C8.22633 10.4211 8.15243 10.5317 8.10201 10.6535C8.05159 10.7752 8.02563 10.9057 8.02563 11.0374C8.02563 11.1692 8.05159 11.2996 8.10201 11.4214C8.15243 11.5431 8.22633 11.6537 8.31949 11.7469C8.41266 11.84 8.52326 11.9139 8.64499 11.9643C8.76671 12.0148 8.89718 12.0407 9.02893 12.0407C9.16069 12.0407 9.29115 12.0148 9.41288 11.9643C9.5346 11.9139 9.64521 11.84 9.73837 11.7469L12.0393 9.44594V17.0581C12.0393 17.3242 12.145 17.5795 12.3332 17.7677C12.5214 17.9558 12.7766 18.0616 13.0427 18.0616C13.3089 18.0616 13.5641 17.9558 13.7523 17.7677C13.9405 17.5795 14.0462 17.3242 14.0462 17.0581V9.44594L16.3471 11.7469C16.4401 11.8404 16.5506 11.9146 16.6724 11.9652C16.7941 12.0158 16.9247 12.0419 17.0565 12.0419C17.1884 12.0419 17.3189 12.0158 17.4407 11.9652C17.5625 11.9146 17.673 11.8404 17.766 11.7469C17.9541 11.5587 18.0598 11.3035 18.0598 11.0374C18.0598 10.7713 17.9541 10.5161 17.766 10.328L13.0427 5.60474Z" fill="white" />
					</svg>
				</div>
				<div className={container.container}>
					<div className={styles.preview__inner}>
						<div className={styles.preview__wrapper}>
							<h2 className={BibasBold.className}>Free <br /> <span>Fat Loss</span> <br /> Calories</h2>
							<p className={styles.preview__descr}>Enter your weight <span>→</span> get your daily <br /> calories instantly</p>
							<div className={styles.preview__list}>
								<div className={styles.preview__item}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.4743 6.43243L8.04164 12.8651L4.82532 9.64875" stroke="#4EAE2C" stroke-width="1.60816" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
									<p>For men</p>
								</div>
								<div className={styles.preview__item}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.4743 6.43243L8.04164 12.8651L4.82532 9.64875" stroke="#4EAE2C" stroke-width="1.60816" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
									<p>Minimal equipment</p>
								</div>
								<div className={styles.preview__item}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.4743 6.43243L8.04164 12.8651L4.82532 9.64875" stroke="#4EAE2C" stroke-width="1.60816" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
									<p>Takes 60 seconds</p>
								</div>
							</div>
						</div>
						<a href="https://t.me/ivan_razmazin_bot" className={styles.preview__btn}>
							<p className={BibasBold.className}>GET MY PLAN</p>
						</a>
						<p className={styles.preview__text}>If button doesn’t work <br /> <span>→</span> Open in browser (...)</p>
					</div>
				</div>
			</div>
		</>
	)
}
