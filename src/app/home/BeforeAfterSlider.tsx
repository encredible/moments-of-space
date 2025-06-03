"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// 타입 정의
interface ImagePair {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title?: string;
}

interface BeforeAfterSliderProps {
  imagePairs: ImagePair[];
  className?: string;
}

type SlidingDirection = 'prev' | 'next' | null;

// 서브 컴포넌트: 미리보기 이미지
function PreviewImage({ 
  image, 
  direction, 
  onClick 
}: { 
  image: ImagePair; 
  direction: 'left' | 'right'; 
  onClick: () => void 
}) {
  // Tailwind는 기본적인 그라디언트만 제공하므로 이 경우 인라인 스타일을 유지합니다
  const gradientStyle = {
    background: direction === 'left'
      ? "linear-gradient(to right, rgba(244, 243, 239, 1), rgba(244, 243, 239, 0.5))"
      : "linear-gradient(to left, rgba(244, 243, 239, 1), rgba(244, 243, 239, 0.5))"
  };
  
  return (
    <div
      className={`hidden md:block absolute ${direction === 'left' ? '-left-48 md:-left-56 lg:-left-76' : '-right-48 md:-right-56 lg:-right-76'} z-20 cursor-pointer transition-all duration-300 hover:scale-105`}
      onClick={onClick}
      aria-label={`${direction === 'left' ? '이전' : '다음'} 이미지 보기`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="relative w-40 md:w-48 lg:w-120 h-[50vh] overflow-hidden">
        <Image
          src={image.afterImage}
          alt={image.afterAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={gradientStyle}></div>
      </div>
    </div>
  );
}

// 메인 컴포넌트
export default function BeforeAfterSlider({
  imagePairs,
  className = "",
}: BeforeAfterSliderProps) {
  // 상태 관리
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [slidingDirection, setSlidingDirection] = useState<SlidingDirection>(null);
  
  // 참조
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  
  // 유효성 검사
  if (!imagePairs || imagePairs.length === 0) return null;
  
  // 현재/이전/다음 이미지 쌍 가져오기 (순환형 처리)
  // 현재 인덱스가 범위를 벗어나지 않도록 보장
  const safeCurrentIndex = Math.max(0, Math.min(currentImageIndex, imagePairs.length - 1));
  const currentPair = imagePairs[safeCurrentIndex];
  // 순환형 처리: 첫 번째 이미지일 때 마지막 이미지 표시
  const prevImage = safeCurrentIndex > 0 ? imagePairs[safeCurrentIndex - 1] : imagePairs[imagePairs.length - 1];
  // 순환형 처리: 마지막 이미지일 때 첫 번째 이미지 표시
  const nextImage = safeCurrentIndex < imagePairs.length - 1 ? imagePairs[safeCurrentIndex + 1] : imagePairs[0];
  
  // 이미지 변경 함수 - 순환형 인덱스 처리 추가
  const changeImage = (index: number) => {
    if (index === currentImageIndex || isNavigating) return;
    
    // 순환형 인덱스 처리: 배열 범위를 벗어나면 적절히 조정
    let safeIndex = index;
    if (index < 0) {
      safeIndex = imagePairs.length - 1;
    } else if (index >= imagePairs.length) {
      safeIndex = 0;
    }
    
    const direction: SlidingDirection = safeIndex > currentImageIndex ? 'next' : 
                                      (safeIndex < currentImageIndex ? 'prev' : null);
    setSlidingDirection(direction);
    setIsNavigating(true);
    setCurrentImageIndex(safeIndex);
    
    setTimeout(() => {
      setIsNavigating(false);
      setSlidingDirection(null);
    }, 300);
  };
  
  // 슬라이더 위치 업데이트 함수
  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };
  
  // 이벤트 핸들러
  const handleSliderInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };
  
  const handleMainTouchStart = (e: React.TouchEvent) => {
    if (isDragging) return;
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleMainTouchMove = (e: React.TouchEvent) => {
    if (isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleMainTouchEnd = () => {
    if (isDragging || !touchStart || !touchEnd) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance && currentImageIndex < imagePairs.length - 1) {
      changeImage(currentImageIndex + 1); // 왼쪽 스와이프 -> 다음 이미지
    } else if (distance < -minSwipeDistance && currentImageIndex > 0) {
      changeImage(currentImageIndex - 1); // 오른쪽 스와이프 -> 이전 이미지
    }
    
    // 터치 상태 초기화
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // 키보드 네비게이션 이벤트 핸들러
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
      changeImage(currentImageIndex - 1);
    } else if (e.key === 'ArrowRight' && currentImageIndex < imagePairs.length - 1) {
      changeImage(currentImageIndex + 1);
    }
  };
  
  // 마우스 및 터치 이벤트 등록/해제
  useEffect(() => {
    if (!isDragging) return;
    
    const handleGlobalMouseMove = (e: MouseEvent) => updateSliderPosition(e.clientX);
    const handleGlobalTouchMove = (e: TouchEvent) => updateSliderPosition(e.touches[0].clientX);
    const handleInteractionEnd = () => setIsDragging(false);
    
    // 이벤트 리스너 추가
    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleInteractionEnd);
    document.addEventListener("touchmove", handleGlobalTouchMove);
    document.addEventListener("touchend", handleInteractionEnd);
    
    // 클린업 함수
    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleInteractionEnd);
      document.removeEventListener("touchmove", handleGlobalTouchMove);
      document.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging]);
  
  // 트랜지션 클래스 계산
  const getTransitionClass = () => {
    if (!isNavigating) return "opacity-100";
    return "opacity-50";
  };
  
  // 렌더링
  return (
    <div 
      className={`relative w-full ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="이미지 비교 슬라이더"
    >
      <div
        ref={mainContainerRef}
        className="relative flex items-center justify-center w-full max-w-none px-0"
        onTouchStart={handleMainTouchStart}
        onTouchMove={handleMainTouchMove}
        onTouchEnd={handleMainTouchEnd}
      >
        {/* 이전 이미지 미리보기 */}
        {prevImage && (
          <PreviewImage 
            image={prevImage} 
            direction="left" 
            onClick={() => changeImage(currentImageIndex - 1)} 
          />
        )}

        {/* 메인 슬라이더 컨테이너 */}
        <div 
          className="relative overflow-hidden shadow-lg w-full max-w-3xl mx-auto"
          aria-live="polite"
        >
          <div
            ref={containerRef}
            className="relative h-[50vh] cursor-col-resize select-none"
          >
            {/* After 이미지 (기본적으로 보이는 이미지) */}
            <div className="absolute inset-0">
              <Image
                src={currentPair.afterImage}
                alt={currentPair.afterAlt}
                fill
                className={`object-cover transition-opacity duration-300 ${getTransitionClass()}`}
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </div>

            {/* Before 이미지 (슬라이더로 가려지는 이미지) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={currentPair.beforeImage}
                alt={currentPair.beforeAlt}
                fill
                className={`object-cover transition-opacity duration-300 ${getTransitionClass()}`}
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </div>

            {/* 슬라이더 핸들 */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-col-resize z-10 -translate-x-1/2"
              style={{
                left: `${sliderPosition}%`
              }}
              onMouseDown={handleSliderInteractionStart}
              onTouchStart={handleSliderInteractionStart}
              role="slider"
              aria-label="슬라이더 조절"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={sliderPosition}
              tabIndex={0}
            >
              {/* 핸들 원형 버튼 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
                <div className="flex space-x-0.5" aria-hidden="true">
                  <div className="w-0.5 h-2 bg-gray-400"></div>
                  <div className="w-0.5 h-2 bg-gray-400"></div>
                </div>
              </div>
            </div>

            {/* Before/After 라벨 */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-korean">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-korean">
              After
            </div>

            {/* 현재 이미지 제목 */}
            {currentPair.title && (
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-korean">
                {currentPair.title}
              </div>
            )}
          </div>
        </div>

        {/* 다음 이미지 미리보기 */}
        {nextImage && (
          <PreviewImage 
            image={nextImage} 
            direction="right" 
            onClick={() => changeImage(currentImageIndex + 1)} 
          />
        )}
      </div>
      
      {/* 이미지 인덱스 표시 (접근성 목적) */}
      <div className="sr-only">
        이미지 {currentImageIndex + 1} / {imagePairs.length}
      </div>
    </div>
  );
}
