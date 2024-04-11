"use client"
// Module
import Link from "next/link"
import { useState } from "react"
import localFont from "next/font/local"
import { handleScroll } from "@/hooks/hendleScroll"
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

export function WidgetSale({ price, oldPrice, text, btn }: { price: string; oldPrice: string; text: string; btn: string }) {
	const [open, setOpen] = useState(true)
	return (
		<div className={[styles.widget, open && styles.active].join(" ")}>
			<div className={styles.widget__price}>
				<p className={BibasBold.className}>{price}</p>
				<span className={BibasBold.className}>{oldPrice}</span>
			</div>
			<div className={styles.widget__text}>{text}</div>
			<Link href="#bonus" onClick={handleScroll} className={styles.widget__btn}>
				{btn}
			</Link>
			<button onClick={() => setOpen(false)} className={styles.widget__close}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
				</svg>
			</button>
		</div>
	)
}
