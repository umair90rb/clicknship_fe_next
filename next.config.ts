import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  async rewrites() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'localhost',
          },
        ],
        destination: '/username-required',
      },
    ];
  },
};

export default nextConfig;
