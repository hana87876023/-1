'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import LocaleToggle from './LocaleToggle';

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="text-xl font-bold text-blue-900">
            {t('taiwan')} CPBL
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href={`/${locale}`}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/cheerleaders`}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              {t('cheerleaders')}
            </Link>
            <Link 
              href={`/${locale}/teams`}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              {t('teams')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LocaleToggle />
          </div>
        </div>
      </div>
    </header>
  );
}