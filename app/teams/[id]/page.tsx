import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { teams, getTeamById } from '../../(marketing)/teams/team-data';
import ColorSwatch from '../../(marketing)/components/ColorSwatch';

export async function generateStaticParams() {
  return teams.map((team) => ({
    id: team.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const team = getTeamById(id);
  
  if (!team) {
    return {
      title: '球団が見つかりません',
    };
  }

  return {
    title: `${team.fullName} | 台灣職棒`,
    description: team.description,
  };
}

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const team = getTeamById(id);

  if (!team) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative h-96 bg-gradient-to-b from-black/60 to-black/30 flex items-center justify-center"
        style={{
          backgroundColor: team.colors.primary,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <div className="relative w-40 h-40 mx-auto mb-4">
            <Image
              src={team.logo}
              alt={`${team.name}のロゴ`}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{team.name}</h1>
          <p className="text-xl md:text-2xl">{team.fullName}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">球団情報</h2>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="font-semibold text-black">創立年</dt>
                  <dd className="text-black font-medium">{team.establishedYear}年</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-black">ホームタウン</dt>
                  <dd className="text-black font-medium">{team.homeCity}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-black">ホーム球場</dt>
                  <dd className="text-black font-medium">{team.stadium}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-black">収容人数</dt>
                  <dd className="text-black font-medium">{team.capacity.toLocaleString()} 人</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-black">優勝回数</dt>
                  <dd className="text-black font-medium">{team.championships} 次</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">球団の特色</h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={team.logo}
                    alt={`${team.name}のロゴ`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-black leading-relaxed">{team.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-black">チームカラー</h3>
                <div className="flex gap-4">
                  <ColorSwatch color={team.colors.primary} label="主色" />
                  <ColorSwatch color={team.colors.secondary} label="副色" />
                </div>
              </div>

              {team.website && (
                <a 
                  href={team.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  公式サイトへ
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/teams"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            球団一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}