/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "api.daily.dev"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.daily.dev',
        pathname: '/devcards/3d9fe02d8dbe416d8e153825bf9c1352.png?r=l06',
      },
    ],
  },
};

module.exports = nextConfig;