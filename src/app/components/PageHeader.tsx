import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  textColor?: 'light' | 'dark';
  className?: string;
}

/**
 * 페이지 상단에 위치하는 제목과 설명을 표시하는 공통 컴포넌트
 * 모든 페이지에서 일관된 스타일로 헤더를 표시합니다.
 */
export default function PageHeader({
  title,
  description,
  textColor = 'dark',
  className = ''
}: PageHeaderProps) {
  const titleColorClass = textColor === 'light' ? 'text-white' : 'text-neutral-900';
  const descColorClass = textColor === 'light' ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={`pt-5 pb-8 ${className}`}>
      <h2 className={`font-plus-jakarta-sans font-bold text-3xl sm:text-4xl ${titleColorClass} text-center mb-10`}>
        {title}
      </h2>
      {description && (
        <p className={`text-center text-lg ${descColorClass} max-w-3xl mx-auto`}>
          {description}
        </p>
      )}
    </div>
  );
}
