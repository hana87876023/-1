import { CheerGrid } from "@/components/CheerGrid";
import { cheerleaders } from "./cheer-data";
import type { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: "チアリーダー一覧 | Taiwan Cheerleaders",
  description: "台湾プロ野球の人気チアリーダー一覧。各球団の応援団メンバーのプロフィールをご覧いただけます。",
};

export default async function CheerlerdersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const teams = [
    { name: "Rakuten Monkeys", color: "#B90C14" },
    { name: "CTBC Brothers", color: "#F9D400" },
    { name: "Fubon Guardians", color: "#003876" },
    { name: "Uni-Lions", color: "#FF6600" },
    { name: "Wei Chuan Dragons", color: "#C8102E" },
    { name: "TSG Hawks", color: "#1C1C1C" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Cheerleaders
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          台湾プロ野球を盛り上げる人気チアリーダーたち（全30名）
        </p>
        
        {/* チーム別インジケーター */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {teams.map((team) => (
            <div key={team.name} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: team.color }}
              />
              <span className="text-sm text-gray-600">{team.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <CheerGrid cheerleaders={cheerleaders} />
      
      <div className="text-center mt-12">
        <p className="text-gray-500">
          全{cheerleaders.length}名のチアリーダーを紹介しています
        </p>
      </div>
    </div>
  );
}