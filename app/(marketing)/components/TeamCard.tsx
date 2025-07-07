import Link from 'next/link';
import { Team } from '../teams/team-data';

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link href={`/teams/${team.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        <div 
          className="h-48 relative flex items-center justify-center"
          style={{
            backgroundColor: team.colors.primary,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          <h3 className="text-3xl font-bold text-white z-10">{team.name}</h3>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-4">{team.fullName}</p>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">創立年份</span>
              <span className="font-semibold">{team.establishedYear}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">主場</span>
              <span className="font-semibold">{team.homeCity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">總冠軍</span>
              <span className="font-semibold">{team.championships} 次</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div 
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: team.colors.primary }}
                  title="主色"
                />
                <div 
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: team.colors.secondary }}
                  title="副色"
                />
              </div>
              <span className="text-blue-600 font-semibold text-sm">
                查看詳情 →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}