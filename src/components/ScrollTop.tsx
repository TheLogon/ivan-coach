// Module
import localFont from "next/font/local"
import Link from "next/link"
import { handleScroll } from "@/hooks/hendleScroll"
import { useTranslations } from "next-intl"
// Images

// Styles
import styles from "@/styles/page.module.scss"
// Components

const BibasBold = localFont({
	src: "../../public/fonts/bebasneuebold.woff2",
	weight: "700",
	style: "normal",
	display: "swap",
})

export function ScrollTop() {
	const t = useTranslations("")
	return (
		<Link href="#intro" onClick={handleScroll} className={styles.scroll}>
			<p className={BibasBold.className}>{t("widgets.scroll-top")}</p>
			<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect y="42" width="42" height="42" rx="10" transform="rotate(-90 0 42)" fill="#79AE07" />
				<path d="M7 21L9.4675 23.4675L19.25 13.7025L19.25 35L22.75 35L22.75 13.7025L32.5325 23.4675L35 21L21 7L7 21Z" fill="white" />
			</svg>
		</Link>
	)
}
