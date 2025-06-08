'use client';
import React from 'react';

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
  return (
    <div className={`text-center mb-10 md:mb-12 ${className}`}>
      <div className={`text-5xl md:text-3xl font-extrabold mb-4 md:mb-6 text-neutral-900 ${titleClassName}`}>
        {title}
      </div>
      <p className={`text-gray-600 max-w-3xl mx-auto whitespace-pre-line ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
}
