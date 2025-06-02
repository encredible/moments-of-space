
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

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

export default function BeforeAfterSlider({
  imagePairs,
  className = ''
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Navigation swipe handling for mobile
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const handleNavigationTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleNavigationTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleNavigationTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentImageIndex < imagePairs.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const changeImage = (index: number) => {
    if (index !== currentImageIndex && !isNavigating) {
      setIsNavigating(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsNavigating(false), 300);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateSliderPosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      updateSliderPosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  if (!imagePairs || imagePairs.length === 0) return null;

  const currentPair = imagePairs[currentImageIndex];

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      {/* Image Comparison Container */}
      <div className="relative overflow-hidden rounded-sm shadow-lg">
        <div
          ref={containerRef}
          className="relative w-full h-96 md:h-[500px] cursor-col-resize select-none"
          style={{ aspectRatio: '16/10' }}
        >
          {/* After Image (기본적으로 보이는 이미지) */}
          <div className="absolute inset-0">
            <Image
              src={currentPair.afterImage}
              alt={currentPair.afterAlt}
              fill
              className={`object-cover transition-opacity duration-300 ${isNavigating ? 'opacity-50' : 'opacity-100'}`}
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          {/* Before Image (슬라이더로 가려지는 이미지) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={currentPair.beforeImage}
              alt={currentPair.beforeAlt}
              fill
              className={`object-cover transition-opacity duration-300 ${isNavigating ? 'opacity-50' : 'opacity-100'}`}
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          {/* 슬라이더 핸들 */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* 핸들 원형 버튼 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
              <div className="flex space-x-1">
                <div className="w-0.5 h-4 bg-gray-400"></div>
                <div className="w-0.5 h-4 bg-gray-400"></div>
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

      {/* Navigation */}
      {imagePairs.length > 1 && (
        <div className="mt-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-4">
            {imagePairs.map((pair, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-300 ${
                  index === currentImageIndex ? 'ring-2 ring-black' : 'hover:opacity-80'
                }`}
                onClick={() => changeImage(index)}
              >
                <Image
                  src={pair.afterImage}
                  alt={pair.afterAlt}
                  width={120}
                  height={80}
                  className="object-cover rounded-sm"
                  sizes="120px"
                />
                {index !== currentImageIndex && (
                  <div className="absolute inset-0 bg-black/20 rounded-sm"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div 
            ref={navigationRef}
            className="md:hidden flex overflow-x-auto space-x-3 px-4 py-2 scrollbar-hide"
            onTouchStart={handleNavigationTouchStart}
            onTouchMove={handleNavigationTouchMove}
            onTouchEnd={handleNavigationTouchEnd}
          >
            {imagePairs.map((pair, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 ${
                  index === currentImageIndex ? 'ring-2 ring-black' : 'opacity-70'
                }`}
                onClick={() => changeImage(index)}
              >
                <Image
                  src={pair.afterImage}
                  alt={pair.afterAlt}
                  width={100}
                  height={70}
                  className="object-cover rounded-sm"
                  sizes="100px"
                />
                {index !== currentImageIndex && (
                  <div className="absolute inset-0 bg-black/20 rounded-sm"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile swipe indicator */}
          <div className="md:hidden text-center mt-2">
            <p className="text-xs text-gray-500 font-korean">
              좌우로 스와이프하여 다른 이미지를 확인하세요
            </p>
          </div>

          {/* Image counter */}
          <div className="text-center mt-3">
            <span className="text-sm text-gray-600 font-korean">
              {currentImageIndex + 1} / {imagePairs.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
