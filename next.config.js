/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://master.d1x43m0c5zctuv.amplifyapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "https://kadynpearce.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
