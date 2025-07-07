import { teams } from './team-data';
import TeamGrid from '../components/TeamGrid';

export const metadata = {
  title: '台灣職棒球隊 | CPBL Teams',
  description: '探索台灣職業棒球大聯盟（CPBL）的所有球隊，了解各隊歷史、主場、成就等資訊。',
};

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            台灣職棒球隊
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            中華職業棒球大聯盟（CPBL）成立於1989年，是台灣最高層級的職業棒球聯盟。
            目前共有6支球隊，分布於台灣各地。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            全球団を知る
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            球団カードをクリックして、各チームの歴史、球場、栄光の記録などの詳細情報をご覧ください
          </p>
        </div>

        <TeamGrid teams={teams} />
      </div>

      <div className="bg-blue-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2024 台湾プロ野球チーム紹介 | データソース：中華職業棒球大聯盟
          </p>
        </div>
      </div>
    </div>
  );
}