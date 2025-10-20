/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['www.bureau-broersma.nl', 'www.biocoaching-consultancy.nl'],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for old URLs
  async redirects() {
    return [
      {
        source: '/index.php/en/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/biocoaching/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      {
        source: '/diensten/:path*',
        destination: '/services/:path*',
      },
      {
        source: '/projecten/:path*',
        destination: '/projects/:path*',
      },
      {
        source: '/over-ons/:path*',
        destination: '/about/:path*',
      },
      {
        source: '/contact',
        destination: '/contact',
      },
    ];
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.bureau-broersma.nl',
    SITE_NAME: 'Bureau Broersma',
    SITE_DESCRIPTION: 'Structureel ontwerp en technische berekeningen sinds 1956. Meer dan 19.000 projecten gerealiseerd.',
  },

  // Bundle analyzer
  webpack: (config, { dev, isServer }) => {
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }

    return config;
  },

  // Output configuration
  output: 'standalone',
  
  // Trailing slash
  trailingSlash: false,
  
  // Compression
  compress: true,
  
  // PoweredByHeader
  poweredByHeader: false,
};

module.exports = nextConfig;
