import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-90" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            台灣職業棒球大聯盟
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in-delay">
            CPBL6球団の素晴らしいストーリーを探索
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/teams"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg animate-fade-in-delay-2"
            >
              球団一覧を見る
            </Link>
            <a 
              href="#about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors animate-fade-in-delay-3"
            >
              詳しく見る
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent" />
      </div>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            關於中華職業棒球大聯盟
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-900">35</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">年の歴史</h3>
              <p className="text-gray-600">1989年の設立以来、台湾野球の黄金時代を見守ってきました</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-900">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">球団</h3>
              <p className="text-gray-600">台湾全土に分布し、それぞれ特色と熱心なファンを持つ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-900">∞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">無限の情熱</h3>
              <p className="text-gray-600">ファンの熱い応援が、台湾野球の最も美しい風景です</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">台湾野球の誇り</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              中華職業棒球大聯盟（CPBL）は台湾最高レベルのプロスポーツリーグであるだけでなく、
              台湾全土の野球ファンの情熱が集まる舞台でもあります。北から南まで、各チームは独自の文化と伝統を持ち、
              共に台湾野球の輝かしい歴史を築いています。
            </p>
            <Link 
              href="/teams"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              各球団を知る →
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 台湾プロ野球チーム紹介</p>
          <p className="text-blue-300 text-sm">
            本サイトは紹介目的のものであり、全ての情報は公開情報に基づいています
          </p>
        </div>
      </footer>
    </div>
  );
}