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
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
