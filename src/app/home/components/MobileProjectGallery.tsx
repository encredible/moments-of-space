"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/app/components/SectionTitle";
import PageLayout from "@/app/components/PageLayout";

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
  title: string;
  subtitle: string;
  images: GalleryImage[];
  height?: number; // 갤러리 이미지 높이 (픽셀 단위)
}

const MobileProjectGallery = ({
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
  // 우선 로드할 이미지 인덱스 상태
  const [priorityIndices, setPriorityIndices] = useState<number[]>([0, 1, 2, 3, 4]);

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
      
      // 포커스된 이미지 다음 3개 이미지에 priority 부여
      updatePriorityImages(index);
    }
  };
  
  // 포커스된 이미지 다음 3개 이미지에 priority 부여하는 함수
  const updatePriorityImages = (focusedIndex: number) => {
    const nextPriorityIndices: number[] = [];
    
    // 선택된 이미지 포함
    nextPriorityIndices.push(focusedIndex);
    
    // 다음 3개 이미지 추가
    for (let i = 1; i <= 5; i++) {
      const nextIndex = focusedIndex + i;
      if (nextIndex < images.length) {
        nextPriorityIndices.push(nextIndex);
      }
    }
    
    setPriorityIndices(nextPriorityIndices);
  };
  
  // 초기 마운트 시 첫 이미지와 다음 3개 이미지에 priority 부여
  useEffect(() => {
    updatePriorityImages(0);
  }, []);
  
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
    <section id="project-gallery" className="md:hidden w-full py-16">
      <PageLayout>
        <SectionTitle title={title} description={subtitle} />
      </PageLayout>

      {/* 갤러리 스크롤 컨테이너 */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto hide-scrollbar flex gap-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* 이미지 목록 */}
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`gallery-image-container flex-shrink-0 cursor-pointer transition-all duration-300 ${activeIndex === index ? "scale-105" : "scale-100"}`}
            onClick={() => scrollToImage(index)}
            onDoubleClick={() => handleDoubleClick(index)}
          >
            <div className="flex overflow-hidden">
              <div style={{ height: `${height}px` }}>
                {/* After 이미지 (배경) */}
                <div className="w-full h-full">
                  <Image 
                    src={image.after.src}
                    alt={image.after.alt}
                    width={600} 
                    height={height} 
                    className="object-cover"
                    style={{ 
                      height: `${height}px`,
                      width: "auto",
                      maxWidth: "none"
                    }}
                    sizes="(max-width: 768px) 90vw, 45vw"
                    quality={80}
                    priority={priorityIndices.includes(index)}
                  />
                </div>
                
                {/* Befrore | After 라벨 */}
                {(image.hasPair) && (
                  <div className="absolute top-3 left-3 text-neutral-100 px-2 py-1 text-xs font-medium z-10">
                    Before | After
                  </div>
                )}
                
                {/* Before 이미지 (오버레이) - 페어가 있는 경우만 */}
                {image.hasPair && image.before && (
                  <div 
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-800 ease-in-out ${showBeforeStates[index] ? "opacity-100" : "opacity-0"}`}
                    style={fadeStates[index] ? { transitionDuration: "800ms" } : {}}
                  >
                    <Image 
                      src={image.before.src}
                      alt={image.before.alt}
                      width={600} 
                      height={height} 
                      className="object-cover"
                      style={{ 
                        height: `${height}px`,
                        width: "auto",
                        maxWidth: "none"
                      }}
                      sizes="(max-width: 768px) 90vw, 45vw"
                      quality={80}
                      loading="eager"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileProjectGallery;