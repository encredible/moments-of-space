'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 해시 링크(#으로 시작하는 링크)인 경우에만 특별 처리
    if (href.startsWith('/#')) {
      e.preventDefault();
      
      // 현재 경로가 홈이 아닌 경우 홈으로 이동
      if (window.location.pathname !== '/') {
        router.push(href);
        return;
      }
      
      // 홈 페이지에 있을 경우 해당 요소로 스크롤
      const elementId = href.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`
        inline-block
        font-korean-button
        text-neutral-500
        border
        border-neutral-500
        px-3 py-2 text-base
        hover:bg-gray-50
        transition-colors
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
