import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'ja';
export const locales = ['ja', 'zh-TW'] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale || defaultLocale;
  
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});