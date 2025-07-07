import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-900">台灣職棒</span>
            <span className="text-sm text-gray-600">CPBL</span>
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              ホーム
            </Link>
            <Link 
              href="/teams" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              球団一覧
            </Link>
          </nav>

          {/* モバイルメニュー */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}