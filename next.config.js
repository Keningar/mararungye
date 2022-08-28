/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/maintenance",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
