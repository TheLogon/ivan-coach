import type { Metadata } from "next"
// import { NextIntlClientProvider } from "next-intl"
import "@/styles/globals.scss"

export const metadata: Metadata = {
	title: "Nutrition",
	description: "Press «NUTRITION» button to get the MEAL PLAN for your goal",
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode
	params: { locale: string }
}>) {
	return (
		<html lang={locale}>
			<body>
				{/* <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider> */}
				{children}
			</body>
		</html>
	)
}
