/** @type {import('next').NextConfig} */

import withVideos from "next-videos"
import createNextIntlPlugin from "next-intl/plugin"
const withNextIntl = createNextIntlPlugin()

const nextConfig = {
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
	// output: "export",
}

export default withNextIntl(withVideos(nextConfig))
