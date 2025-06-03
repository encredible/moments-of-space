'use client';
import { useState } from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import headerContent from './header_content.json' assert { type: 'json' };

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[20vh] border-b border-gray-200 max-w-screen-xl mx-auto w-full">
      <div className="flex flex-row justify-between items-center py-6 md:py-12 w-full px-4 md:px-0">
        <Link href="/" className="group text-3xl leading-none text-neutral-900 group-hover:text-neutral-700 transition-colors tracking-tight">
          {headerContent.logo}
        </Link>
        
        {/* 데스크탑 네비게이션 - 중간 크기 이상의 화면에서만 표시 */}
        <nav className="hidden md:flex md:flex-col md:items-end gap-1.5 ml-auto">
          {headerContent.navItems.map((item, index) => (
            <NavItem key={index} text={item.text} href={item.href} />
          ))}
        </nav>
        
        {/* 햄버거 메뉴 버튼 - 중간 크기 미만의 화면에서만 표시 */}
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          onClick={toggleMenu}
          aria-label="메뉴 열기/닫기"
        >
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-neutral-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* 모바일 메뉴 오버레이 */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" className="text-3xl text-neutral-900" onClick={() => setIsMenuOpen(false)}>
            {headerContent.logo}
          </Link>
          <button 
            className="p-3 mr-2"
            onClick={toggleMenu}
            aria-label="메뉴 닫기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-4">
          {headerContent.navItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="font-korean-button text-xl py-2 text-neutral-900 hover:text-neutral-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 