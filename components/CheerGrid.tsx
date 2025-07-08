"use client";

import { CheerCard } from "./CheerCard";
import type { Cheer } from "@/app/[locale]/cheerleaders/cheer-data";
import { motion } from "framer-motion";

interface CheerGridProps {
  cheerleaders: Cheer[];
}

export function CheerGrid({ cheerleaders }: CheerGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6">
      {cheerleaders.map((cheer, index) => (
        <motion.div
          key={cheer.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <CheerCard cheer={cheer} />
        </motion.div>
      ))}
    </div>
  );
}