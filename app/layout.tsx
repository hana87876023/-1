import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taiwan Baseball | 台湾野球・球団紹介",
  description: "台湾プロ野球の各球団を紹介。楽天モンキーズ、中信ブラザーズなど人気球団の情報とチアリーダーのプロフィール。",
  keywords: ["台湾", "野球", "球団", "プロ野球", "楽天モンキーズ", "中信ブラザーズ"],
  openGraph: {
    title: "Taiwan Baseball",
    description: "台湾野球・球団紹介サイト",
    images: ["/og-image.png"],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {children}
        </main>
      </body>
    </html>
  );
}