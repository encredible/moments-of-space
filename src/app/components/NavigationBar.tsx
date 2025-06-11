'use client';
import { useState } from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import headerContent from './header_content.json' assert { type: 'json' };

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Container for desktop nav items and mobile hamburger icon */}
      {/* Fixed position: overlays content, does not occupy space in layout flow. */}
      {/* Positioned below MarqueeText (top-10) and to the right (right-0). */}
      {/* z-40 ensures it's above most content but below MarqueeText (z-50 if they overlap). */}
      <div className="fixed top-20 right-0 z-40 flex justify-end p-8">
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:flex-col md:items-end gap-2.5">
          {headerContent.navItems.map((item, index) => (
            <NavItem key={index} text={item.text} href={item.href} />
          ))}
        </nav>

        {/* Hamburger Menu Button - for mobile */}
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

      {/* Mobile Menu Overlay - Full screen, fixed position */}
      {/* z-index is high to appear above other content, including Marquee if it had a higher z-index */}
      <div className={`md:hidden fixed inset-0 bg-white z-[60] transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" className="text-3xl text-neutral-900" onClick={() => setIsMenuOpen(false)}>
            {headerContent.logo} {/* Mobile menu also has logo */}
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
              className="font-korean-button font-bold text-xl py-2 text-neutral-900 hover:text-neutral-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
