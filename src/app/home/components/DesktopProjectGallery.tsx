"use client";

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import SectionTitle from "@/app/components/SectionTitle";

interface GalleryImageData {
  src: string;
  alt: string;
}

interface GalleryImage {
  after: GalleryImageData;
  before: GalleryImageData | null;
  hasPair: boolean;
}

interface HorizontalBeforeAfterGalleryProps {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
  height?: number; // 갤러리 이미지 높이 (픽셀 단위)
}

const DesktopProjectGallery = ({
  title,
  subtitle,
  images,
  height = 400, // 기본 높이 400px
}: HorizontalBeforeAfterGalleryProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // 각 이미지의 비교 슬라이더 위치 (0: after만 보임, 100: before만 보임, 50: 반반)
  const [sliderPositions, setSliderPositions] = useState<number[]>(new Array(images.length).fill(50));
  // 현재 드래그 중인 이미지 인덱스 (-1은 드래그 중이 아님)
  const [draggingIndex, setDraggingIndex] = useState<number>(-1);
  // 디바이스 화면 높이를 기준으로 한 이미지 높이 계산
  const [responsiveHeight, setResponsiveHeight] = useState(height);
  
  // 화면 크기 변경시 반응형 높이 조정
  useEffect(() => {
    const handleResize = () => {
      // 모바일에서는 높이를 2/3로 설정
      if (window.innerWidth < 768) {
        setResponsiveHeight(Math.floor(height * 2 / 3));
      } else {
        setResponsiveHeight(height);
      }
    };
    
    // 초기화
    handleResize();
    
    // 화면 크기 변경 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [height]);

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
  
  // 드래그 시작 핸들러
  const handleDragStart = (index: number, e: MouseEvent) => {
    const image = images[index];
    
    // before 이미지가 있는 경우에만 드래그 기능 활성화
    if (image.hasPair && image.before) {
      setDraggingIndex(index);
      e.preventDefault(); // 기본 드래그 동작 방지
    }
  };
  
  // 터치 시작 핸들러 (모바일용)
  const handleTouchStart = (index: number, e: React.TouchEvent) => {
    const image = images[index];
    
    // before 이미지가 있는 경우에만 드래그 기능 활성화
    if (image.hasPair && image.before) {
      e.stopPropagation();
      e.preventDefault();
      setDraggingIndex(index);
    }
  };
  
  // 드래그 종료 핸들러
  const handleDragEnd = () => {
    setDraggingIndex(-1);
  };
  
  // 마우스 이동 핸들러
  const handleMouseMove = (e: MouseEvent) => {
    if (draggingIndex === -1) return;
    
    updateSliderPosition(e.clientX, draggingIndex);
  };
  
  // 터치 이동 핸들러 (모바일용)
  const handleTouchMove = (e: TouchEvent | React.TouchEvent) => {
    if (draggingIndex === -1) return;
    
    const touch = 'touches' in e ? e.touches[0] : (e as any).touches[0];
    if (touch) {
      e.preventDefault?.();
      e.stopPropagation?.();
      updateSliderPosition(touch.clientX, draggingIndex);
    }
  };
  
  // 슬라이더 위치 업데이트 함수 - 베퍼링 적용
  const updateSliderPosition = (clientX: number, index: number) => {
    // RAF를 통한 성능 최적화
    requestAnimationFrame(() => {
      const imageElement = document.querySelector(`[data-image-index="${index}"]`) as HTMLElement;
      if (!imageElement) return;
      
      const rect = imageElement.getBoundingClientRect();
      const x = clientX - rect.left; // 이미지 기준 상대적 x 좌표
      
      // 퍼센트 계산 (0~100)
      let percent = (x / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      
      setSliderPositions(prev => {
        // 이전 값과 동일할 경우 상태 변경 없이 성능 최적화
        if (Math.abs(prev[index] - percent) < 0.5) return prev;
        
        const newPositions = [...prev];
        newPositions[index] = percent;
        return newPositions;
      });
    });
  };
  
  // 마우스 포인터 및 터치 이벤트 전역 처리
  useEffect(() => {
    // 드래그 중인 경우에만 전역 이벤트 리스너 추가
    if (draggingIndex !== -1) {
      const handleGlobalMouseMove = (e: globalThis.MouseEvent) => handleMouseMove(e as unknown as MouseEvent);
      const handleGlobalTouchMove = (e: globalThis.TouchEvent) => {
        if (draggingIndex !== -1) {
          e.preventDefault();
          e.stopPropagation();
          handleTouchMove(e as unknown as TouchEvent);
        }
      };
      const handleGlobalMouseUp = () => handleDragEnd();
      const handleGlobalTouchEnd = () => handleDragEnd();
      
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false }); // passive: false로 preventDefault 허용
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('touchmove', handleGlobalTouchMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.removeEventListener('touchend', handleGlobalTouchEnd);
      };
    }
  }, [draggingIndex]);
  
  // 모바일에서 스크롤 연동 방지 - 슬라이더 드래그 중에만 적용
  useEffect(() => {
    // 터치 이벤트를 모든 요소에 전파시키지 않고 바로 처리하는 함수
    const handleTouchMoveGlobal = (e: globalThis.TouchEvent) => {
      if (draggingIndex !== -1) {
        e.preventDefault();
      }
    };
    
    if (draggingIndex !== -1) {
      // 전체 문서에 터치 이벤트 잠금
      document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
    }
    
    return () => {
      // 이벤트 제거
      document.removeEventListener('touchmove', handleTouchMoveGlobal);
    };
  }, [draggingIndex]);

  return (
    <div className="hidden md:block py-16 md:py-24">
      <SectionTitle title={title} description={subtitle} />

      {/* 갤러리 스크롤 컨테이너 - 모바일에서는 좌우 스크롤 금지 */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto hide-scrollbar flex gap-12 pl-4 pr-4 pb-4"
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          touchAction: 'pan-y' // 세로 스크롤만 허용, 가로 스크롤은 방지
        }}
      >
        {/* 이미지 목록 */}
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`gallery-image-container flex-shrink-0 cursor-pointer transition-all duration-300 ${activeIndex === index ? "scale-105" : "scale-100"}`}
            onClick={() => scrollToImage(index)}
            data-image-index={index}
            onTouchStart={(e) => image.hasPair && e.stopPropagation()} // 이미지가 슬라이더인 경우 이벤트 버블링 방지
          >
            <div className="flex overflow-hidden">
              <div style={{ height: `${responsiveHeight}px` }}>
                {/* After 이미지 (배경) */}
                <div className="w-full h-full">
                  <Image 
                    src={image.after.src}
                    alt={image.after.alt}
                    width={1000} 
                    height={responsiveHeight} 
                    className="object-cover"
                    style={{ 
                      height: `${responsiveHeight}px`,
                      width: "auto",
                      maxWidth: "none"
                    }}
                    priority={index < 3} // 처음 몇 개 이미지는 우선 로드
                  />
                </div>
                
                {/* Before 이미지 (오버레이) - 페어가 있는 경우만 */}
                {image.hasPair && image.before && (
                  <>
                    <div 
                      className="absolute top-0 left-0 h-full overflow-hidden"
                      style={{
                        width: `${sliderPositions[index]}%`,
                      }}
                    >
                      <Image 
                        src={image.before.src}
                        alt={image.before.alt}
                        width={1000} 
                        height={responsiveHeight} 
                        className="object-cover"
                        style={{ 
                          height: `${responsiveHeight}px`,
                          width: "auto",
                          maxWidth: "none",
                          position: 'absolute',
                          left: 0,
                          top: 0
                        }}
                      />
                    </div>
                    
                    {/* 슬라이더 핸들 (드래그 가능한 손잡이) - 별도 배치, 터치 영역 확장 */}
                    <div 
                      className="absolute top-0 bottom-0 cursor-ew-resize z-10"
                      style={{ 
                        left: `${sliderPositions[index]}%`,
                        height: '100%',
                        transform: 'translateX(-50%)',
                        width: '128px' /* 터치 히트 영역 확장 */
                      }}
                      onMouseDown={(e) => handleDragStart(index, e)}
                      onTouchStart={(e) => handleTouchStart(index, e)}
                      onTouchMove={(e) => {
                        if (draggingIndex === index) {
                          e.preventDefault();
                          e.stopPropagation();
                          handleTouchMove(e);
                        }
                      }}
                      onMouseUp={handleDragEnd}
                      onTouchEnd={handleDragEnd}
                    >
                      {/* 시각적 구분선 추가 */}
                      <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-background shadow-lg -z-0 h-full -translate-x-1/2"></div>
                      {/* 핸들 중앙 원형 버튼 - 시각적 표시는 그대로 유지 */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
                        <div className="flex space-x-0.5" aria-hidden="true">
                          <div className="w-0.5 h-2 bg-gray-400"></div>
                          <div className="w-0.5 h-2 bg-gray-400"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopProjectGallery;