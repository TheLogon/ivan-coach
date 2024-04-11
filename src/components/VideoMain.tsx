// Module

// Images
import Phone from "/public/assets/phone.png"

// Styles
import container from "@/styles/container.module.scss"
import styles from "@/styles/page.module.scss"
// Components

export function VideoMain() {
	return (
		<video autoPlay preload="none" loop muted className={styles.video}>
			<source src="/iphone.mp4" type="video/mp4" />
		</video>
	)
}
