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
  headers: {
    "/*": [
      "Access-Control-Allow-Origin: *",
      "Access-Control-Allow-Methods: OPTIONS, POST, GET, PUT, DELETE",
      "Access-Control-Allow-Headers: Content-Type",
    ],
  },
};

module.exports = nextConfig;
