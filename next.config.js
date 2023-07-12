/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'pbs.twimg.com',
			'i.ytimg.com',
			'repository-images.githubusercontent.com',
			'images.unsplash.com',
			'seeklogo.com',
			'shadcn.com',
			'raw.githubusercontent.com',
		],
	},
}

module.exports = nextConfig
