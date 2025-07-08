import { CheerGrid } from "@/components/CheerGrid";
import { cheerleaders } from "./cheer-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "チアリーダー一覧 | Taiwan Cheerleaders",
  description: "台湾プロ野球の人気チアリーダー一覧。各球団の応援団メンバーのプロフィールをご覧いただけます。",
};

export default function CheerlerdersPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Cheerleaders
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          台湾プロ野球を盛り上げる人気チアリーダーたち
        </p>
      </div>
      <CheerGrid cheerleaders={cheerleaders} />
    </div>
  );
}