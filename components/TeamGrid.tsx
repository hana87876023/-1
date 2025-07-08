import Link from 'next/link';
import Image from 'next/image';
import { Team } from '../app/teams/team-data';

interface TeamGridProps {
  teams: Team[];
}

export default function TeamGrid({ teams }: TeamGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teams.map((team) => (
        <Link 
          key={team.id}
          href={`/teams/${team.id}`}
          className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div 
            className="relative h-48 rounded-t-xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${team.colors.primary} 0%, ${team.colors.secondary} 100%)`
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="relative w-24 h-24">
                <Image
                  src={team.logo}
                  alt={`${team.name}のロゴ`}
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-blue-600 transition-colors">
              {team.name}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {team.description.slice(0, 80)}...
            </p>
            
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>創立: {team.establishedYear}年</span>
              <span>優勝: {team.championships}回</span>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              <span>{team.homeCity} | {team.stadium}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}