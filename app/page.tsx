import { CheerHero } from "@/components/CheerHero";
import { CheerGrid } from "@/components/CheerGrid";
import { cheerleaders } from "./cheerleaders/cheer-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredCheerleaders = cheerleaders.slice(0, 6);

  return (
    <>
      <CheerHero />
      
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
              About Taiwan Cheerleaders
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              台湾プロ野球（CPBL）の各球団には、試合を盛り上げる専属のチアリーダーチームがあります。
              彼女たちはダンスパフォーマンスだけでなく、SNSでの発信やファンとの交流を通じて、
              台湾野球文化の重要な一部となっています。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}