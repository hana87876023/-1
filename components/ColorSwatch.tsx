interface ColorSwatchProps {
  color: string;
  label: string;
}

export default function ColorSwatch({ color, label }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-2">
      <div 
        className="w-6 h-6 rounded-full border-2 border-gray-300"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm text-black">{label}</span>
    </div>
  );
}