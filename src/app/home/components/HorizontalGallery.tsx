"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface GalleryImageData {
  src: string;
  alt: string;
}

interface GalleryImage {
  after: GalleryImageData;
  before: GalleryImageData | null;
  hasPair: boolean;
}

interface HorizontalGalleryProps {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
  height?: number; // 갤러리 이미지 높이 (픽셀 단위)
}

const HorizontalGallery = ({
  title,
  subtitle,
  images,
  height = 400, // 기본 높이 400px
}: HorizontalGalleryProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // 각 이미지의 현재 보기 상태 (true: before, false: after)
  const [showBeforeStates, setShowBeforeStates] = useState<boolean[]>(new Array(images.length).fill(false));
  // 페이드 효과를 위한 상태
  const [fadeStates, setFadeStates] = useState<boolean[]>(new Array(images.length).fill(false));

  const scrollToImage = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const imageElements = container.querySelectorAll(".gallery-image-container");
    
    if (imageElements[index]) {
      setActiveIndex(index);
      
      // 해당 이미지를 중앙으로 스크롤
      imageElements[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };
  
  // 이미지 더블 클릭 핸들러
  const handleDoubleClick = (index: number) => {
    const image = images[index];
    
    // before 이미지가 있는 경우에만 전환
    if (image.hasPair && image.before) {
      // 현재 상태 반전
      setShowBeforeStates(prev => {
        const newState = [...prev];
        newState[index] = !newState[index];
        return newState;
      });
      
      // 페이드 효과 적용
      setFadeStates(prev => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
      
      // 페이드 효과 제거 (애니메이션 완료 후)
      setTimeout(() => {
        setFadeStates(prev => {
          const newState = [...prev];
          newState[index] = false;
          return newState;
        });
      }, 800); // 애니메이션 완료를 위해 충분한 시간 확보
    }
  };

  return (
    <div className="w-full py-16 bg-stone-50">
      {/* 제목과 부제목 */}
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>
      )}

      {/* 갤러리 스크롤 컨테이너 */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto hide-scrollbar flex gap-4 pl-4 pr-4 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* 왼쪽 그라데이션 효과 */}
        <div className="pointer-events-none fixed left-0 w-16 h-full bg-gradient-to-r from-stone-50 to-transparent z-10"></div>
        
        {/* 이미지 목록 */}
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`gallery-image-container flex-shrink-0 cursor-pointer transition-all duration-300 ${activeIndex === index ? "scale-105" : "scale-100"}`}
            onClick={() => scrollToImage(index)}
            onDoubleClick={() => handleDoubleClick(index)}
          >
            <div className="flex overflow-hidden rounded-md shadow-md">
              <div style={{ height: `${height}px` }}>
                {/* After 이미지 (배경) */}
                <div className="w-full h-full">
                  <Image 
                    src={image.after.src}
                    alt={image.after.alt}
                    width={1000} 
                    height={height} 
                    className="object-cover"
                    style={{ 
                      height: `${height}px`,
                      width: "auto",
                      maxWidth: "none"
                    }}
                    priority={index < 3} // 처음 몇 개 이미지는 우선 로드
                  />
                </div>
                
                {/* Before 이미지 (오버레이) - 페어가 있는 경우만 */}
                {image.hasPair && image.before && (
                  <div 
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-800 ease-in-out ${showBeforeStates[index] ? "opacity-100" : "opacity-0"}`}
                    style={fadeStates[index] ? { transitionDuration: "800ms" } : {}}
                  >
                    <Image 
                      src={image.before.src}
                      alt={image.before.alt}
                      width={1000} 
                      height={height} 
                      className="object-cover"
                      style={{ 
                        height: `${height}px`,
                        width: "auto",
                        maxWidth: "none"
                      }}
                    />
                  </div>
                )}
              </div>
              
              {/* before/after 아이콘 표시 (페어가 있는 경우만) */}
              {image.hasPair && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  {showBeforeStates[index] ? "Before" : "After"}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* 오른쪽 그라데이션 효과 */}
        <div className="pointer-events-none fixed right-0 w-16 h-full bg-gradient-to-l from-stone-50 to-transparent z-10"></div>
      </div>

      {/* 인디케이터 (선택 사항) */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${activeIndex === index ? "bg-black w-4" : "bg-gray-300"}`}
            aria-label={`이미지 ${index + 1}로 이동`}
          ></button>
        ))}
      </div>

      {/* 스크롤바 숨기는 스타일 */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalGallery;