'use client';
import React from 'react';

interface TextSectionProps {
  title: string;
  description: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function TextSection({
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}: TextSectionProps) {
  return (
    <div className={`text-center mb-10 md:mb-12 ${className}`}>
      <h2 className={`text-2xl md:text-3xl font-medium mb-4 md:mb-6 text-neutral-900 ${titleClassName}`}>
        {title}
      </h2>
      <p className={`text-gray-600 max-w-3xl mx-auto whitespace-pre-line ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
}
