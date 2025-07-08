"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CheerHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <Image
        src="/images/ballpark-hero.jpg"
        alt="Taiwan Baseball Stadium"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Taiwan Cheerleaders
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            台湾プロ野球を彩る人気チアリーダーたちを紹介
          </p>
          <Link href="/cheerleaders">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Meet the Cheerleaders
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}