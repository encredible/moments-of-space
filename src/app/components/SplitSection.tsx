import Image from 'next/image';
import React, { useState } from 'react';
import Button from './Button';
import {useMediaQuery} from "react-responsive";

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
  imageOnLeft = true,
  imageWidth = 600,
  imageHeight = 800,
  className = '',
  priority = false,
  id,
}: SplitSectionProps) {
  // 자세히 보기 상태 관리
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const isMobile = useMediaQuery({maxWidth: 767}); // md 미만이면 모바일
  
  // 자세히 보기 토글 함수
  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };
  return (
    <section id={id} className={`flex flex-col md:flex-row items-start justify-between py-4 md:py-12 px-2 md:px-0 gap-6 md:gap-10 ${className}`}>
      <div 
        className={`md:w-1/2 w-full flex justify-center mb-6 md:mb-0 ${
          imageOnLeft ? 'md:pr-10' : 'md:pl-10 order-1 md:order-2'
        }`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover"
          style={{ clipPath: isMobile ? "polygon(90px 0, 100% 0, 100% 100%, 0 100%, 0 90px)" : "polygon(120px 0, 100% 0, 100% 100%, 0 100%, 0 120px)" }}
          priority={priority}
        />
      </div>
      <div
        className={`md:w-1/2 w-full flex flex-col items-start ${
          imageOnLeft ? 'md:pl-8 lg:pl-12' : 'md:pr-8 lg:pr-12 order-2 md:order-1'
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-neutral-900 mb-3 md:mb-4">{title}</h2>
        <p className="max-w-xl text-gray-700 text-sm md:text-base mb-6 whitespace-pre-line">{description}</p>
        
        {/* 상세 내용 - 애니메이션과 함께 열리고 닫힘 */}
        <div 
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${isDetailsVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {includedTitle && (
            <div className="w-full mb-4 font-korean-button">
              <h3 className="font-bold text-lg mb-2">{includedTitle}</h3>
              {includedItems.map((item, index) => (
                <div key={index} className="mb-1">
                  <p className="text-sm text-gray-500">{item}</p>
                </div>
              ))}
            </div>
          )}
          
          {feeTitle && (
            <div className="w-full mb-6 font-korean-button">
              <h3 className="font-bold text-lg mb-2">{feeTitle}</h3>
              {feeItems.map((item, index) => (
                <div key={index} className="mb-1">
                  <p className="text-sm text-gray-500">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* 자세히 보기 버튼 */}
        {(includedTitle || feeTitle) && (
          <div className="mt-2">
            <Button onClick={toggleDetails}>{isDetailsVisible ? '닫기' : '자세히 보기'}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
