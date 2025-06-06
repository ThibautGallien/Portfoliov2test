/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['cdn.sanity.io']
  },
  i18n: {
    locales: ['fr', 'en', 'jp'],
    defaultLocale: 'fr',
    localeDetection: true,
  },
};

module.exports = nextConfig;