/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'img.icons8.com',
        },
        {
            hostname:"assets.mongodb-cdn.com",
          }
        ],
      },
};

export default nextConfig;