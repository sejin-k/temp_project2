/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'shop-phinf.pstatic.net',  // 네이버 쇼핑 이미지 도메인
      'shopping-phinf.pstatic.net' // 네이버 쇼핑 이미지 도메인 추가
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig