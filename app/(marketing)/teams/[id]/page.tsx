import { notFound } from 'next/navigation';
import { teams, getTeamById } from '../team-data';
import ColorSwatch from '../../components/ColorSwatch';

export async function generateStaticParams() {
  return teams.map((team) => ({
    id: team.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const team = getTeamById(params.id);
  
  if (!team) {
    return {
      title: '球隊未找到',
    };
  }

  return {
    title: `${team.fullName} | 台灣職棒`,
    description: team.description,
  };
}

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const team = getTeamById(params.id);

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
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{team.name}</h1>
          <p className="text-xl md:text-2xl">{team.fullName}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">球隊資訊</h2>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="font-semibold text-gray-600">創立年份</dt>
                  <dd className="text-gray-800">{team.establishedYear}年</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-gray-600">主場城市</dt>
                  <dd className="text-gray-800">{team.homeCity}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-gray-600">主場球場</dt>
                  <dd className="text-gray-800">{team.stadium}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-gray-600">球場容量</dt>
                  <dd className="text-gray-800">{team.capacity.toLocaleString()} 人</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-gray-600">總冠軍次數</dt>
                  <dd className="text-gray-800">{team.championships} 次</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">球隊特色</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{team.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">球隊顏色</h3>
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
                  訪問官方網站
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/teams"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            返回球隊列表
          </a>
        </div>
      </div>
    </div>
  );
}