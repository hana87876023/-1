"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useState } from "react";
import type { Cheer } from "@/app/[locale]/cheerleaders/cheer-data";

interface CheerCardProps {
  cheer: Cheer;
}

export function CheerCard({ cheer }: CheerCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/cheerleaders/${cheer.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <Image
            src={imageError ? "/images/placeholder.jpg" : cheer.image}
            alt={`${cheer.nameZh} portrait`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: cheer.color }}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-gray-900">{cheer.nameZh}</h3>
          <p className="text-sm text-gray-600 mt-1">{cheer.nameEn}</p>
          <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{cheer.birthday}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}