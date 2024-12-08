/*
 * @Author: Adrian Zephyr Liao liaowenrun@gmail.com
 * @Date: 2024-12-01 14:02:31
 * @LastEditors: Adrian Zephyr Liao liaowenrun@gmail.com
 * @LastEditTime: 2024-12-08 18:22:17
 * @FilePath: /Zephyr-Blog/next.config.ts
 * @Description:
 */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bu.dusays.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ]
  },
}

export default nextConfig
