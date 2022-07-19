/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      'https://s3.ap-south-1.amazonaws.com/'
    ]
  }
  
}

module.exports = nextConfig
