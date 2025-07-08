import { CheerHero } from "@/components/CheerHero";
import { CheerGrid } from "@/components/CheerGrid";
import { cheerleaders } from "./cheerleaders/cheer-data";
import GameSchedule from './(marketing)/components/GameSchedule';
import Standings from './(marketing)/components/Standings';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredCheerleaders = cheerleaders.slice(0, 5);

  return (
    <>
      <CheerHero />
      
      {/* チアリーダーセクション */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Cheerleaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            台湾プロ野球で活躍する人気チアリーダーたちをご紹介します
          </p>
        </div>
        
        <CheerGrid cheerleaders={featuredCheerleaders} />
        
        <div className="text-center mt-12">
          <Link href="/cheerleaders">
            <Button size="lg" variant="outline">
              View All Cheerleaders
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              About Taiwan Baseball
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              台湾プロ野球（CPBL）の各球団には、試合を盛り上げる専属のチアリーダーチームがあります。
              彼女たちはダンスパフォーマンスだけでなく、SNSでの発信やファンとの交流を通じて、
              台湾野球文化の重要な一部となっています。
            </p>
            <Link href="/teams">
              <Button size="lg" variant="outline">
                球団紹介を見る
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
          <p className="mb-2">© 2024 Taiwan Cheerleaders & CPBL Info</p>
          <p className="text-blue-300 text-sm">
            台湾プロ野球チアリーダーと試合情報を紹介するファンサイト
          </p>
        </div>
      </footer>
    </>
  );
}