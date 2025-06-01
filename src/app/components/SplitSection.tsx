import Image from 'next/image';
import React from 'react';

export interface SplitSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  imageOnLeft?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  priority?: boolean;
  shadowStyle?: string;
  id?: string;
}

export default function SplitSection({
  imageUrl,
  imageAlt,
  title,
  description,
  imageOnLeft = true,
  imageWidth = 600,
  imageHeight = 400,
  className = '',
  priority = false,
  shadowStyle = 'shadow-md',
  id,
}: SplitSectionProps) {
  return (
    <section id={id} className={`flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-0 gap-8 md:gap-0 ${className}`}>
      <div 
        className={`md:w-1/2 w-full flex justify-center mb-6 md:mb-0 ${
          !imageOnLeft ? 'order-1 md:order-2' : ''
        }`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={`${shadowStyle} object-cover w-full max-w-lg h-auto`}
          priority={priority}
        />
      </div>
      <div
        className={`md:w-1/2 w-full flex flex-col items-start ${
          imageOnLeft ? 'md:pl-12' : 'md:pr-12 order-2 md:order-1'
        }`}
      >
        <h2 className="font-plus-jakarta-sans text-2xl sm:text-3xl text-neutral-900 mb-4">{title}</h2>
        <p className="max-w-xl text-gray-700 text-base">{description}</p>
      </div>
    </section>
  );
}
