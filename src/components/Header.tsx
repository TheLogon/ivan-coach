"use client"
// Module
import Image from "next/image"
import localFont from "next/font/local"
import Link from "next/link"
import { handleScroll } from "@/hooks/hendleScroll"
// Images
import Logo from "/public/assets/logo.svg"
// Styles
import styles from "@/styles/header.module.scss"
import container from "@/styles/container.module.scss"
import { LangSwitcher } from "./LangSwitcher"
import { useState } from "react"
// Components
const robotoBold = localFont({
	src: "../../public/fonts/bebasneuebold.woff2",
	weight: "700",
	style: "normal",
	display: "swap",
})
export function Header({ linkOne, linkTwo, linkThree, linkFour }: { linkOne: string; linkTwo: string; linkThree: string; linkFour: string }) {
	const [open, setOpen] = useState(false)
	return (
		<header id="header" className={styles.header}>
			<div className={container.container}>
				<div className={styles.header__inner}>
					<Link href="#intro" onClick={handleScroll} className={styles.header__logo}>
						<Image src={Logo} width={182} height={71} alt="" />
					</Link>
					<div className={[styles.header__menu, open && styles.active].join(" ")}>
						<Link
							href="#bonus"
							onClick={e => {
								handleScroll(e)
								setOpen(false)
							}}
							className={[styles.header__menu_item, styles.red, robotoBold.className].join(" ")}>
							{linkOne}
						</Link>
						<Link
							href="#results"
							onClick={e => {
								handleScroll(e)
								setOpen(false)
							}}
							className={[styles.header__menu_item, robotoBold.className].join(" ")}>
							{linkTwo}
						</Link>
						<Link
							href="#reviews"
							onClick={e => {
								handleScroll(e)
								setOpen(false)
							}}
							className={[styles.header__menu_item, robotoBold.className].join(" ")}>
							{linkThree}
						</Link>
						<Link
							href="#price"
							onClick={e => {
								handleScroll(e)
								setOpen(false)
							}}
							className={[styles.header__menu_item, robotoBold.className].join(" ")}>
							{linkFour}
						</Link>
					</div>
					<LangSwitcher />
					<button
						onClick={() => {
							setOpen(open => !open)
						}}
						className={styles.header__burger}>
						<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="64" height="64" rx="8.37209" fill="#79AE07" />
							<rect x="12" y="16" width="40" height="4" rx="2" fill="white" />
							<rect x="12" y="30" width="40" height="4" rx="2" fill="white" />
							<rect x="12" y="44" width="40" height="4" rx="2" fill="white" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	)
}
