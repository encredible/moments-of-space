'use client';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ 
  href, 
  children, 
  className = '', 
}: ButtonProps) {
  
  return (
    <Link
      href={href}
      className={`
        inline-block
        font-korean-button
        text-neutral-900
        border
        border-black
        px-6 py-3 text-base
        hover:bg-gray-50
        transition-colors
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
