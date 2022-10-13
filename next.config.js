/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    SERVER: process.env.SERVER,
    API_ROUTE_SECRET: process.env.API_ROUTE_SECRET,
    DB_NAME: process.env.DB_NAME,
    MONGODB_URI: process.env.MONGODB_URI,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
};

module.exports = nextConfig;
