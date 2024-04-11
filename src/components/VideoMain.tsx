"use client"
// Module
// @ts-ignore
import video from "/public/Iphone.mp4"
// Images

// Styles
import styles from "@/styles/page.module.scss"
import { useEffect, useState } from "react"
// Components

export function VideoMain() {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])
	return (
		isClient && (
			<video autoPlay preload="none" loop muted className={styles.video}>
				<source src={video} type="video/mp4" />
			</video>
		)
	)
}
