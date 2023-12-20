/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fe-case-study-iksl55dvn-lmatheus.vercel.app",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig
