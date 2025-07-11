import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n/config.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
