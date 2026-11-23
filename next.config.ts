import type {NextConfig} from 'next';
import {resolve} from 'node:path';

const requestConfig = './src/i18n/request.ts';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'images.unsplash.com'},
    ],
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {'next-intl/config': requestConfig},
  },
  webpack(config) {
    config.resolve.alias['next-intl/config'] = resolve(config.context, requestConfig);
    return config;
  },
};

export default nextConfig;
