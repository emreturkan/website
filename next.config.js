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
			'ui.shadcn.com',
			'rdl.ink',
			'www.jordienric.com',
			'cdn.akamai.steamstatic.com',
			'image.tmdb.org',
		],
	},
}

module.exports = nextConfig
