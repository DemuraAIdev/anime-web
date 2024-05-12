/** @type {import('next').NextConfig} */
const nextConfig = {
  // image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
};

export default nextConfig;
