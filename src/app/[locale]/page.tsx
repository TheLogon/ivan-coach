import Image from "next/image"

import Link from "next/link"
import localFont from "next/font/local"
import dynamic from "next/dynamic"
import Logo from "/public/assets/logo.svg"
import { useLocale, useTranslations } from "next-intl"

import BgAbout from "/public/assets/bg-about.png"
import PartnerOne from "/public/assets/partner.svg"
import PartnerTwo from "/public/assets/partner-2.svg"
import PartnerThree from "/public/assets/partner-3.svg"

import styles from "@/styles/page.module.scss"
import container from "@/styles/container.module.scss"
import "swiper/css"
import "swiper/css/pagination"

import { BtnBay } from "@/components/BtnBay"
import { ScrollTop } from "@/components/ScrollTop"
import { ResultsBlock } from "@/components/ResultsBlock"
import { ReviewsBlock } from "@/components/ReviewsBlock"
import { IntroSlider } from "@/components/IntroSlider"
import { Header } from "@/components/Header"
import { WidgetSale } from "@/components/WidgetSale"
import { VideoMain } from "@/components/VideoMain"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { StartScreen } from "@/components/StartScreen"

const BibasBold = localFont({
	src: "../../../public/fonts/bebasneuebold.woff2",
	weight: "700",
	style: "normal",
	display: "swap",
})

export default function Home() {
	const t = useTranslations("")
	const locale = useLocale()

	return (
		<>
			<StartScreen />
			<Header linkOne={t("header.link-1")} linkTwo={t("header.link-2")} linkThree={t("header.link-3")} linkFour={t("header.link-4")} />
			<div id="intro" className={styles.intro}>
				<div className={styles.intro__slider}>
					<IntroSlider />
				</div>
				<div className={container.container}>
					<div className={styles.intro__inner}>
						<div className={styles.offer}>
							<h1 className={[styles.offer__title, BibasBold.className].join(" ")}>
								{t("intro.title")}
								<span>{t("intro.title-2")}</span>
								{t("intro.title-3")}
							</h1>
							<p className={styles.offer__descr}>{t("intro.description")}</p>
							<div className={styles.offer__btns}>
								<BtnBay />
								<div className={[styles.offer__btn, BibasBold.className].join(" ")}>{t("intro.text-1")}</div>
								{locale == "en" && (
									<div className={[styles.offer__text, BibasBold.className].join(" ")}>
										<span>+</span>
										{t("intro.text-2")}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className={styles.product}>
				<div className={styles.product__elipse}>
					<svg width="1920" height="1269" viewBox="0 0 1920 1269" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle opacity="0.5" cx="960.5" cy="115.5" r="1153.5" fill="url(#paint0_radial_67_4512)" />
						<defs>
							<radialGradient id="paint0_radial_67_4512" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(960.5 115.5) rotate(-90) scale(1153.5)">
								<stop stopColor="#AE0707" />
								<stop offset="0.315796" stopColor="#AE0707" stopOpacity="0.365672" />
								<stop offset="0.477267" stopColor="#AE0707" stopOpacity="0.21" />
								<stop offset="0.595995" stopColor="#AE0707" stopOpacity="0.094061" />
								<stop offset="0.7076" stopColor="#AE0707" stopOpacity="0.04" />
								<stop offset="0.797834" stopColor="#AE0707" stopOpacity="0.0352753" />
								<stop offset="0.890442" stopColor="#AE0707" stopOpacity="0.0268645" />
								<stop offset="1" stopColor="#AE0707" stopOpacity="0" />
							</radialGradient>
						</defs>
					</svg>
				</div>
				<div className={container.container}>
					<div className={styles.product__inner}>
						<div className={styles.product__top}>
							<h2 className={BibasBold.className}>{t("product.title")}</h2>
							<p className={BibasBold.className}>{t("product.title-2")}</p>
						</div>
						<div className={styles.product__cards}>
							<div className={styles.product__card}>
								<h4 className={BibasBold.className}>{t("product.card.title")}</h4>
								<div className={styles.product__card_wrapper}>
									<p className={BibasBold.className}>{t("product.card.text")}</p>
								</div>
							</div>
							<div className={styles.product__card}>
								<h4 className={BibasBold.className}>{t("product.card-2.title")}</h4>
								<div className={styles.product__card_wrapper}>
									<p className={BibasBold.className}>{t("product.card-2.text")}</p>
								</div>
							</div>
							<div className={styles.product__card}>
								<h4 className={BibasBold.className}>{t("product.card-3.title")}</h4>
								<div className={styles.product__card_wrapper}>
									<p className={BibasBold.className}>{t("product.card-3.text")}</p>
								</div>
							</div>
						</div>
						<div className={styles.product__wrapper}>
							<VideoMain />
							<div className={styles.product__wrapper_right}>
								<h2 className={BibasBold.className}>{t("product.video-title")}</h2>
								<BtnBay red={true} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="bonus" className={styles.about}>
				<div className={styles.about__img}>
					<Image src={BgAbout} width={1920} height={700} alt="bg" />
				</div>
				<div className={container.container}>
					<div className={styles.about__inner}>
						<div className={styles.about__title}>
							<h2 className={BibasBold.className}>{t("about.title")}</h2>
							<h4 className={BibasBold.className}>{t("about.title-2")}</h4>
						</div>
						<p className={styles.about__text}>{t("about.descr")}</p>
						<div className={styles.about__btns}>
							{locale == "en" && <div className={styles.about__btn}>{t("about.text")}</div>}
							<BtnBay />
						</div>
						{locale == "en" && (
							<div className={styles.about__bottom}>
								<p>{t("about.text-2")}</p>
							</div>
						)}
					</div>
				</div>
			</section>
			{locale == "en" && (
				<section className={styles.partners}>
					<div className={container.container}>
						<div className={[styles.partners__inner, BibasBold.className].join(" ")}>
							<h2>{t("partners.title")}</h2>
							<h4>
								{t("partners.subtitle")} <span>They Trust me</span>
							</h4>
							<div className={styles.partners__imgs}>
								<div className={styles.partners__img}>
									<Image src={PartnerOne} width={259} height={100} alt="" />
									<h4>Good Health</h4>
									<p>company with a wide range of products and quality.</p>
									<span>get 5-20 % discount</span>
								</div>
								<div className={styles.partners__img}>
									<Image src={PartnerTwo} width={259} height={100} alt="" />
									<h4>Basiligo</h4>
									<p>Only quality food and delicious recipes. They have discounts on rations of 15 and 20 %</p>
									<span>get an additional 5% discount</span>
								</div>
								{/* <div className={styles.partners__img}>
								<Image src={PartnerThree} width={259} height={100} alt="" />
							</div> */}
							</div>
							<h4>{t("partners.subtitle-2")}</h4>
							<p>{t("partners.text")}</p>
							<BtnBay />
						</div>
					</div>
				</section>
			)}
			<ResultsBlock
				title={t("results.title")}
				text={t("results.text")}
				slide={t("results.slider.slide")}
				slideTwo={t("results.slider.slide-2")}
				slideThree={t("results.slider.slide-3")}
				slideFour={t("results.slider.slide-4")}
				slideFive={t("results.slider.slide-5")}
				slideSix={t("results.slider.slide-6")}
				slideSeven={t("results.slider.slide-7")}
				slideEight={t("results.slider.slide-8")}
				textTwo={t("results.text-2")}
			/>
			<ReviewsBlock
				title={t("reviews.title")}
				reviewName={t("reviews.review.name")}
				reviewDecr={t("reviews.review.decr")}
				reviewText={t("reviews.review.text")}
				reviewTwoName={t("reviews.review-2.name")}
				reviewTwoDecr={t("reviews.review-2.decr")}
				reviewTwoText={t("reviews.review-2.text")}
				reviewThreeName={t("reviews.review-3.name")}
				reviewThreeDecr={t("reviews.review-3.decr")}
				reviewThreeText={t("reviews.review-3.text")}
			/>
			<div className={styles["section-btn"]}>
				<div className={container.container}>
					<div className={styles["section-btn__inner"]}>
						<BtnBay />
					</div>
				</div>
			</div>
			<section id="price" className={[styles.price, BibasBold.className].join(" ")}>
				<div className={container.container}>
					<div className={styles.price__inner}>
						<h2>{t("price.title")}</h2>
						<div className={styles.price__wrapper}>
							<div className={styles.price__wrapper_price}>
								<h4>{t("price.old-price")}</h4>
								<h2>{t("price.price")}</h2>
							</div>
							<div className={styles.price__wrapper_btns}>
								<div className={[styles.offer__btn, BibasBold.className].join(" ")}>{t("intro.text-1")}</div>
								{locale == "en" && (
									<div className={[styles.offer__text, BibasBold.className].join(" ")}>
										<span>+</span>
										{t("intro.text-2")}
									</div>
								)}
							</div>
						</div>
						<p>{t("price.text")}</p>
						<BtnBay />
					</div>
				</div>
			</section>
			<footer className={styles.footer}>
				<div className={container.container}>
					<div className={styles.footer__inner}>
						<div className={styles.footer__logo}>
							<Image src={Logo} width={182} height={71} alt="" />
						</div>
						<ScrollTop />
					</div>
				</div>
			</footer>
			<WidgetSale price={t("price.price")} oldPrice={t("price.old-price")} text={t("widgets.text")} btn={t("widgets.btn")} />
			<SpeedInsights />
		</>
	)
}
