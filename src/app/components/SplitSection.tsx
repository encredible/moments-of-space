import Image from 'next/image';
import React from 'react';

export interface ListItem {
  title: string;
  content: string;
}

export interface SplitSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  includedTitle?: string;
  includedItems?: string[];
  feeTitle?: string;
  feeItems?: string[];
  buttonText?: string;
  buttonLink?: string;
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
  includedTitle,
  includedItems = [],
  feeTitle,
  feeItems = [],
  buttonText,
  buttonLink = '#',
  imageOnLeft = true,
  imageWidth = 600,
  imageHeight = 800,
  className = '',
  priority = false,
  id,
}: SplitSectionProps) {
  return (
    <section id={id} className={`flex flex-col md:flex-row items-start justify-between py-8 md:py-12 px-4 md:px-0 gap-6 md:gap-10 ${className}`}>
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
          className="object-cover"
          priority={priority}
        />
      </div>
      <div
        className={`md:w-1/2 w-full flex flex-col items-start ${
          imageOnLeft ? 'md:pl-8 lg:pl-12' : 'md:pr-8 lg:pr-12 order-2 md:order-1'
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900 mb-3 md:mb-4">{title}</h2>
        <p className="max-w-xl text-gray-700 text-sm md:text-base mb-6 whitespace-pre-line">{description}</p>
        
        {includedTitle && (
          <div className="w-full mb-4">
            <h3 className="font-medium text-lg mb-2">{includedTitle}</h3>
            {includedItems.map((item, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm text-gray-500">{item}</p>
              </div>
            ))}
          </div>
        )}
        
        {feeTitle && (
          <div className="w-full mb-6">
            <h3 className="font-medium text-lg mb-2">{feeTitle}</h3>
            {feeItems.map((item, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm text-gray-500">{item}</p>
              </div>
            ))}
          </div>
        )}
        
        {buttonText && (
          <div className="mt-2">
            <a 
              href={buttonLink} 
              className="px-4 py-2 border border-1 border-gray-300 text-sm hover:bg-gray-50 transition-colors font-korean-button"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
