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
    <section id={id} className={`flex flex-col md:flex-row items-center justify-between py-8 md:py-12 px-4 md:px-0 gap-6 md:gap-10 ${className}`}>
      <div 
        className={`md:w-1/2 w-full flex justify-center mb-6 md:mb-0 ${
          !imageOnLeft ? 'order-1 md:order-2' : ''
        }`}
      >
        <div className="w-full relative">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={`${shadowStyle} object-cover w-full max-w-lg h-auto rounded-sm`}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div
        className={`md:w-1/2 w-full flex flex-col items-start ${
          imageOnLeft ? 'md:pl-8 lg:pl-12' : 'md:pr-8 lg:pr-12 order-2 md:order-1'
        }`}
      >
        <h2 className="font-korean text-xl sm:text-2xl md:text-3xl text-neutral-900 mb-3 md:mb-4">{title}</h2>
        <p className="max-w-xl text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </section>
  );
}
