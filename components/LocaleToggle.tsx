'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LocaleToggle() {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'ja' ? 'zh-TW' : 'ja';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {locale === 'ja' ? t('chinese') : t('japanese')}
    </Button>
  );
}