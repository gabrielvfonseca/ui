import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default withContentlayer(nextConfig);