// Module
import localFont from "next/font/local"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
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
export function BtnBay({ red }: { red?: boolean }) {
	const t = useTranslations("")
	const locale = useLocale()

	return (
		<Link href={locale == "en" ? "https://pay.ziina.com/ivanrazmazin13/pPqqmy9Az" : "https://t.me/Ivan_Razmazin"} className={[styles.offer__btn, styles.tg, BibasBold.className, red && styles.red].join(" ")}>
			{t("btns.btn")}
		</Link>
	)
}
