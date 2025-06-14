'use client';
import React from 'react';
import {useMediaQuery} from "react-responsive";

interface TextSectionProps {
  title: string;
  description: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionTitle({
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}: TextSectionProps) {
  const isMobile = useMediaQuery({maxWidth: 767}); // md 미만이면 모바일
  
  return (
    <div className={`text-center mb-10 md:mb-12 ${className} ${isMobile ? 'whitespace-pre-wrap' : ''}`}>
      <div className={`text-3xl md:text-5xl font-gillsansnova-book font-extrabold mb-4 md:mb-6 text-neutral-900 ${titleClassName}`}>
        {title}
      </div>
      <p className={`text-neutral-900 text-lg md:text-2xl font-medium max-w-3xl mx-auto ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
}
