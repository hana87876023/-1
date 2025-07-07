import { Team } from '../teams/team-data';
import TeamCard from './TeamCard';

interface TeamGridProps {
  teams: Team[];
}

export default function TeamGrid({ teams }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}