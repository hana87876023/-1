import Image from 'next/image';
import { teams } from '../app/[locale]/teams/team-data';

interface TeamStanding {
  teamId: string;
  rank: number;
  wins: number;
  losses: number;
  draws: number;
  winPercentage: number;
  gamesBehind: number;
  streak: string;
  lastTen: string;
}

const mockStandings: TeamStanding[] = [
  {
    teamId: 'ctbc-brothers',
    rank: 1,
    wins: 82,
    losses: 58,
    draws: 0,
    winPercentage: 0.586,
    gamesBehind: 0,
    streak: 'W2',
    lastTen: '7-3'
  },
  {
    teamId: 'rakuten-monkeys',
    rank: 2,
    wins: 78,
    losses: 62,
    draws: 0,
    winPercentage: 0.557,
    gamesBehind: 4,
    streak: 'L1',
    lastTen: '5-5'
  },
  {
    teamId: 'fubon-guardians',
    rank: 3,
    wins: 75,
    losses: 65,
    draws: 0,
    winPercentage: 0.536,
    gamesBehind: 7,
    streak: 'W1',
    lastTen: '6-4'
  },
  {
    teamId: 'uni-lions',
    rank: 4,
    wins: 70,
    losses: 70,
    draws: 0,
    winPercentage: 0.500,
    gamesBehind: 12,
    streak: 'W3',
    lastTen: '8-2'
  },
  {
    teamId: 'wei-chuan-dragons',
    rank: 5,
    wins: 65,
    losses: 75,
    draws: 0,
    winPercentage: 0.464,
    gamesBehind: 17,
    streak: 'L2',
    lastTen: '4-6'
  },
  {
    teamId: 'tsg-hawks',
    rank: 6,
    wins: 60,
    losses: 80,
    draws: 0,
    winPercentage: 0.429,
    gamesBehind: 22,
    streak: 'L4',
    lastTen: '3-7'
  }
];

export default function Standings() {
  const getTeamById = (id: string) => teams.find(team => team.id === id);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          順位表
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">順位</th>
                <th className="px-4 py-3 text-left">チーム</th>
                <th className="px-4 py-3 text-center">勝</th>
                <th className="px-4 py-3 text-center">負</th>
                <th className="px-4 py-3 text-center">勝率</th>
                <th className="px-4 py-3 text-center">ゲーム差</th>
                <th className="px-4 py-3 text-center hidden sm:table-cell">連勝/連敗</th>
                <th className="px-4 py-3 text-center hidden md:table-cell">直近10試合</th>
              </tr>
            </thead>
            <tbody>
              {mockStandings.map((standing, index) => {
                const team = getTeamById(standing.teamId);
                if (!team) return null;

                return (
                  <tr key={standing.teamId} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-lg text-black">
                      {standing.rank}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8">
                          <Image
                            src={team.logo}
                            alt={team.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="font-semibold text-black">{team.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center font-semibold text-black">{standing.wins}</td>
                    <td className="px-4 py-3 text-center font-semibold text-black">{standing.losses}</td>
                    <td className="px-4 py-3 text-center font-semibold text-black">
                      .{(standing.winPercentage * 1000).toFixed(0)}
                    </td>
                    <td className="px-4 py-3 text-center font-semibold text-black">
                      {standing.gamesBehind === 0 ? '-' : standing.gamesBehind}
                    </td>
                    <td className="px-4 py-3 text-center hidden sm:table-cell">
                      <span className={standing.streak.startsWith('W') ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                        {standing.streak}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center hidden md:table-cell text-sm font-semibold text-black">
                      {standing.lastTen}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-black">
            ※ 2024年シーズンの仮想データです
          </p>
        </div>
      </div>
    </section>
  );
}