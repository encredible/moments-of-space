import React, { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * 모든 페이지에서 공통으로 사용하는 레이아웃 컴포넌트
 * 일관된 max-width, 패딩, 플렉스 레이아웃을 제공합니다.
 */
export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`max-w-screen-xl mx-auto px-3 md:px-0 w-full ${className}`}>
      {children}
    </div>
  );
}
