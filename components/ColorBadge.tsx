import { Badge } from "@/components/ui/badge";

interface ColorBadgeProps {
  team: string;
  color: string;
}

export function ColorBadge({ team, color }: ColorBadgeProps) {
  return (
    <Badge
      className="px-3 py-1 text-white font-semibold"
      style={{ backgroundColor: color }}
    >
      {team}
    </Badge>
  );
}