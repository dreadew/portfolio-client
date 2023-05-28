/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '7777',
				pathname: '/files/**'
			},
			{
				protocol: 'http',
				hostname: '45.12.74.211',
				port: '7777',
				pathname: '/files/**'
			}
		]
	}
}

module.exports = nextConfig
