/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com",'localhost', "murmuring-dawn-44285.herokuapp.com"]
  }
}

module.exports = nextConfig

