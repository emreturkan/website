/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  headers: [
    {
      source: "/(.*)",
      headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
    },
    {
      source: "/vercel_app_emreturkan/(.*)",
      headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
    },
  ],
};

module.exports = nextConfig;
