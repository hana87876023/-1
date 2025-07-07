interface ColorSwatchProps {
  color: string;
  label: string;
}

export default function ColorSwatch({ color, label }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-3">
      <div 
        className="w-12 h-12 rounded-lg border-2 border-gray-300 shadow-sm"
        style={{ backgroundColor: color }}
      />
      <div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <p className="text-xs text-gray-500">{color}</p>
      </div>
    </div>
  );
}