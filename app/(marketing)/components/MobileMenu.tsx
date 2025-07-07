'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative z-50 flex flex-col justify-center items-center w-10 h-10 md:hidden"
        aria-label="メニューを開く"
      >
        <span className={`bg-gray-700 h-0.5 w-6 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`} />
        <span className={`bg-gray-700 h-0.5 w-6 transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1.5'}`} />
        <span className={`bg-gray-700 h-0.5 w-6 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* メニュー */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 
        transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <nav className="flex flex-col pt-20 px-8">
          <Link 
            href="/" 
            onClick={closeMenu}
            className="py-4 text-lg font-medium text-gray-700 hover:text-blue-600 border-b border-gray-200"
          >
            ホーム
          </Link>
          <Link 
            href="/teams" 
            onClick={closeMenu}
            className="py-4 text-lg font-medium text-gray-700 hover:text-blue-600 border-b border-gray-200"
          >
            球団一覧
          </Link>
          <div className="mt-8 space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              球団別ページ
            </h3>
            <Link 
              href="/teams/ctbc-brothers" 
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              中信兄弟
            </Link>
            <Link 
              href="/teams/rakuten-monkeys" 
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              樂天桃猿
            </Link>
            <Link 
              href="/teams/uni-lions" 
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              統一7-ELEVEn獅
            </Link>
            <Link 
              href="/teams/fubon-guardians" 
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              富邦悍將
            </Link>
            <Link 
              href="/teams/wei-chuan-dragons" 
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              味全龍
            </Link>
            <Link 
              href="/teams/tsg-hawks" 
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              台鋼雄鷹
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}