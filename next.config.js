/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
