import Image from 'next/image';

interface TeamLogoProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export default function TeamLogo({ src, alt, className = "", fallback = "/logos/default.png" }: TeamLogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-contain ${className}`}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = fallback;
      }}
    />
  );
}