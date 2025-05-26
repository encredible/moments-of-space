'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import React from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Inclusions', href: '/inclusions' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex justify-between items-center px-6 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
          <span className="font-bold text-xl text-gray-900 font-sans">
            Moments of Space
          </span>
        </Link>

        {/* Desktop Navigation & Mobile Menu Button Container */}
        <div className="flex items-center">
          {/* Desktop Navigation - Centered (within this right-aligned block) */}
          <div className="hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-900 font-medium text-lg hover:text-amber-600 transition-colors duration-300 font-sans px-2 py-3"
                >
                  {item.name}
                </Link>
                {index < menuItems.length - 1 && <div className="w-9"></div>}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-amber-600 transition-colors ml-4"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - This part needs to be full-width relative to the viewport, not constrained by the new parent structure */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-900 font-medium text-base hover:text-amber-600 transition-colors duration-300 py-2 font-sans"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 