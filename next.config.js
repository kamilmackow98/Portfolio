/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    isOpenForOpp: process.env.OPEN_FOR_OPP,
  },
  images: {
    domains: ['picsum.photos'],
  },
}

module.exports = nextConfig
