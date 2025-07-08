"use client";

import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";

interface SocialIconsProps {
  socials: { x?: string; ig?: string; tt?: string };
}

export function SocialIcons({ socials }: SocialIconsProps) {
  return (
    <div className="flex gap-4 justify-center">
      {socials.x && (
        <Link
          href={socials.x}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-colors duration-300"
          aria-label="X (Twitter)"
        >
          <Twitter className="w-5 h-5" />
        </Link>
      )}
      {socials.ig && (
        <Link
          href={socials.ig}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </Link>
      )}
      {socials.tt && (
        <Link
          href={socials.tt}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-colors duration-300"
          aria-label="TikTok"
        >
          <SiTiktok className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}