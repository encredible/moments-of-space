"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

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

  // Swipe handling for mobile
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const handleMainTouchStart = (e: React.TouchEvent) => {
    if (isDragging) return; // 슬라이더 드래그 중이면 스와이프 무시
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleMainTouchMove = (e: React.TouchEvent) => {
    if (isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleMainTouchEnd = () => {
    if (isDragging || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentImageIndex < imagePairs.length - 1) {
      changeImage(currentImageIndex + 1);
    }
    if (isRightSwipe && currentImageIndex > 0) {
      changeImage(currentImageIndex - 1);
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
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  if (!imagePairs || imagePairs.length === 0) return null;

  const currentPair = imagePairs[currentImageIndex];
  const prevImage =
    currentImageIndex > 0 ? imagePairs[currentImageIndex - 1] : null;
  const nextImage =
    currentImageIndex < imagePairs.length - 1
      ? imagePairs[currentImageIndex + 1]
      : null;

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      <div
        ref={mainContainerRef}
        className="relative flex items-center justify-center"
        onTouchStart={handleMainTouchStart}
        onTouchMove={handleMainTouchMove}
        onTouchEnd={handleMainTouchEnd}
      >
        {/* Left Preview */}
        {prevImage && (
          <div
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => changeImage(currentImageIndex - 1)}
            style={{ left: "-40px" }}
          >
            <div className="relative w-48 h-84 overflow-hidden shadow-lg">
              <Image
                src={prevImage.afterImage}
                alt={prevImage.afterAlt}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(244, 243, 239, 0.95), rgba(244, 243, 239, 0.5))",
                }}
              ></div>
            </div>
          </div>
        )}

        {/* Main Slider Container */}
        <div className="relative overflow-hidden shadow-lg w-full max-w-lg">
          <div
            ref={containerRef}
            className="relative w-full h-84 cursor-col-resize select-none"
          >
            {/* After Image (기본적으로 보이는 이미지) */}
            <div className="absolute inset-0">
              <Image
                src={currentPair.afterImage}
                alt={currentPair.afterAlt}
                fill
                className={`object-cover transition-opacity duration-300 ${isNavigating ? "opacity-50" : "opacity-100"}`}
                sizes="(max-width: 768px) 100vw, 384px"
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
                className={`object-cover transition-opacity duration-300 ${isNavigating ? "opacity-50" : "opacity-100"}`}
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </div>

            {/* 슬라이더 핸들 */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
              style={{
                left: `${sliderPosition}%`,
                transform: "translateX(-50%)",
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* 핸들 원형 버튼 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
                <div className="flex space-x-0.5">
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

        {/* Right Preview */}
        {nextImage && (
          <div
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => changeImage(currentImageIndex + 1)}
            style={{ right: "-40px" }}
            >
            <div className="relative w-48 h-84 overflow-hidden shadow-lg">
              <Image
                src={nextImage.afterImage}
                alt={nextImage.afterAlt}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to left, rgba(244, 243, 239, 0.95), rgba(244, 243, 239, 0.5))",
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
