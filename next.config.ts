import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['pt_BR', 'es', 'en'],
    defaultLocale: 'pt_BR',
    localeDetection: false,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
