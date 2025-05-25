'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Inclusions', href: '/inclusions' },
    { 
      name: 'Projects', 
      href: '/projects',
      hasDropdown: true,
      subItems: [
        { name: '주거 공간', href: '/projects/residential' },
        { name: '상업 공간', href: '/projects/commercial' },
        { name: '팝업 & 이벤트', href: '/projects/popup' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 shadow-lg' 
          : 'bg-gray-900'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* 로고 */}
          <Link 
            href="/" 
            className="text-xl lg:text-2xl font-heading font-bold text-white hover:text-accent-400 transition-colors duration-300"
          >
            Moments of Space
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                        isActive(item.href)
                          ? 'text-accent-400 border-b-2 border-accent-400'
                          : 'text-white hover:text-accent-400'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    
                    {/* 드롭다운 메뉴 */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-text-primary hover:bg-primary-50 hover:text-accent-500 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-accent-400 border-b-2 border-accent-400'
                        : 'text-white hover:text-accent-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* 태블릿 메뉴 */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-accent-400'
                    : 'text-white hover:text-accent-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent-400 transition-colors duration-300"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* 모바일 햄버거 메뉴 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-accent-400 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* 모바일/태블릿 전체 화면 메뉴 */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-primary-900/95 backdrop-blur-lg z-40">
          <div className="container mx-auto py-8">
            <div className="flex flex-col space-y-nav-mobile">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-white hover:text-accent-400 transition-colors duration-300"
                      >
                        {item.name}
                        <ChevronDown 
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isProjectsOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {isProjectsOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-4 py-2 text-base text-primary-200 hover:text-accent-400 transition-colors duration-300"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-lg font-medium transition-colors duration-300 ${
                        isActive(item.href)
                          ? 'text-accent-400'
                          : 'text-white hover:text-accent-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 