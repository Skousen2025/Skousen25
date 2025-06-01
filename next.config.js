/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['pt', 'en', 'da'],
    defaultLocale: 'pt',
  },
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
