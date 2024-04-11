import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import "@/styles/globals.scss"

export const metadata: Metadata = {
	title: "IVAN YOUR ONLINE COACH",
	description: "IVAN YOUR ONLINE COACH",
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
				<NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
