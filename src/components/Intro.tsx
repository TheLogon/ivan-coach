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
export function Intro() {
	return (
		<>
			<div className={styles.preview}>
				<div className={container.container}>
					<div className={styles.preview__inner}>
						<div className={styles.preview__wrapper}>
							<h2 className={BibasBold.className}>Press «NUTRITION» button to get the MEAL PLAN for your goal</h2>
						</div>
						<div className={styles.preview__btn}>
							<a href="https://t.me/ivan_razmazin_bot" target="_blank" className={styles.preview__btn}>
								<p className={BibasBold.className}>NUTRITION</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
