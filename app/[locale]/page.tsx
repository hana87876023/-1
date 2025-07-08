import { CheerHero } from "@/components/CheerHero";
import { CheerGrid } from "@/components/CheerGrid";
import { cheerleaders } from "./cheerleaders/cheer-data";
import GameSchedule from '@/components/GameSchedule';
import Standings from '@/components/Standings';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('home');
  const featuredCheerleaders = cheerleaders.slice(0, 5);

  return (
    <>
      <CheerHero />
      
      {/* チアリーダーセクション */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('featured.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t('featured.description')}
          </p>
        </div>
        
        <CheerGrid cheerleaders={featuredCheerleaders} />
        
        <div className="text-center mt-12">
          <Link href={`/${locale}/cheerleaders`}>
            <Button size="lg" variant="outline">
              {t('featured.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <Link href={`/${locale}/teams`}>
              <Button size="lg" variant="outline">
                {t('about.viewTeams')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 試合予定セクション */}
      <GameSchedule />
      
      {/* 順位表セクション */}
      <Standings />

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">{t('footer.copyright')}</p>
          <p className="text-blue-300 text-sm">
            {t('footer.description')}
          </p>
        </div>
      </footer>
    </>
  );
}