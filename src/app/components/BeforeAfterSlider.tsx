
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className = ''
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className={`relative w-full max-w-4xl mx-auto overflow-hidden rounded-sm shadow-lg ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full h-96 md:h-[500px] cursor-col-resize select-none"
        style={{ aspectRatio: '16/10' }}
      >
        {/* After Image (기본적으로 보이는 이미지) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
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
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
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
      </div>
    </div>
  );
}
