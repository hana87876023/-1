import { notFound } from "next/navigation";
import Image from "next/image";
import { cheerleaders } from "../cheer-data";
import { ColorBadge } from "@/components/ColorBadge";
import { SocialIcons } from "@/components/SocialIcons";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return cheerleaders.map((cheer) => ({
    id: cheer.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cheer = cheerleaders.find((c) => c.id === params.id);
  
  if (!cheer) {
    return {
      title: "Not Found | Taiwan Cheerleaders",
    };
  }

  return {
    title: `${cheer.nameZh} | Taiwan Cheerleaders`,
    description: `${cheer.nameZh} (${cheer.nameEn}) - ${cheer.team}のチアリーダー。誕生日: ${cheer.birthday}`,
    openGraph: {
      title: `${cheer.nameZh} | Taiwan Cheerleaders`,
      description: `${cheer.team}の人気チアリーダー`,
      images: [cheer.image],
    },
  };
}

export default function CheerleaderDetailPage({ params }: PageProps) {
  const cheer = cheerleaders.find((c) => c.id === params.id);

  if (!cheer) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={cheer.image}
              alt={`${cheer.nameZh} portrait`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {cheer.nameZh}
              </h1>
              <p className="text-2xl text-gray-600">{cheer.nameEn}</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-500" />
                <ColorBadge team={cheer.team} color={cheer.color} />
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-lg text-gray-700">{cheer.birthday}</span>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Social Media
              </h2>
              <SocialIcons socials={cheer.socials} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}