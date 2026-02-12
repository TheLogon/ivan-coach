// import createMiddleware from "next-intl/middleware"

// export default createMiddleware({
// 	// A list of all locales that are supported
// 	locales: ["en", "ru"],

// 	// Used when no locale matches
// 	defaultLocale: "en",
// })

// export const config = {
// 	// Match only internationalized pathnames
// 	matcher: ["/", "/(ru|en)/:path*"],
// }

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
	return NextResponse.next()
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
}
