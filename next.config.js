/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    isOpenForOpp: process.env.OPEN_FOR_OPP,
  },
}

module.exports = nextConfig
