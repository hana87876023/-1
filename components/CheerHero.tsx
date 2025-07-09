"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CheerHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* 複数の背景画像でよりダイナミックに */}
      <div className="absolute inset-0">
        <Image
          src="/images/logos/images (1).jpg"
          alt="Taiwan Baseball Stadium"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-transparent to-blue-900/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        {/* 野球ボールの装飾要素 */}
        <div className="absolute top-10 left-10 w-8 h-8 bg-white rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-20 right-20 w-6 h-6 bg-white rounded-full opacity-15 animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-white rounded-full opacity-10 animate-pulse delay-2000" />
        <div className="absolute bottom-10 right-10 w-10 h-10 bg-white rounded-full opacity-25 animate-pulse delay-500" />
        
        {/* 野球場の雰囲気を演出する光の効果 */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 via-transparent to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
            Taiwan Cheerleaders
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            台湾プロ野球を彩る人気チアリーダーたちを紹介
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-lg">⚾</span>
              <span className="text-sm font-medium">CPBL 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-lg">🏟️</span>
              <span className="text-sm font-medium">6 Teams</span>
            </div>
          </div>
          <Link href="/cheerleaders">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">⭐</span>
              Meet the Cheerleaders
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}