'use client';

import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '@/app/components/SectionTitle';

interface ClockSectionProps {
  title: string;
  description: string;
  items: string[];
}

export default function ClockSection({ title, description, items }: ClockSectionProps) {
  // 초기 각도: 12시 방향에서 시작 (-90도)
  const initialRotation = -90; // 12시 방향

  const [activeIndex, setActiveIndex] = useState(0);
  const rotationRef = useRef(initialRotation); // 시계 바늘의 현재 각도
  const [displayRotation, setDisplayRotation] = useState(initialRotation); // 화면에 표시될 회전 각도
  
  // 바늘이 천천히 회전하도록 설정
  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 인덱스 계산
      setActiveIndex(prev => (prev + 1) % items.length);
      
      // 다음 회전 각도 계산 (매번 정해진 각도씩 증가)
      rotationRef.current += 360 / items.length;
      setDisplayRotation(rotationRef.current);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [items.length]);
  
  return (
    <section className="py-16 px-2 md:py-24 w-full">
      <SectionTitle 
        title={title} 
        description={description} 
      />
      
      <div className="flex justify-center mt-16 w-full">
        {/* 모바일: 레이아웃 최대 너비에 맞춤, 데스크탑: 585px 고정 */}
        <div className="relative w-full max-w-[300px] h-[300px] md:w-[585px] md:h-[585px]">
          {/* 텍스트 아이템들 */}
          {items.map((item, index) => {
            // 시계 방향으로 배치 (6시 방향에서 시작 - 180도)
            const angle = (360 / items.length) * index;
            const radian = ((angle - 180) * Math.PI) / 180;
            
            // 텍스트 회전 방향 조정 (항상 올바르게 보이도록)
            let textRotation = angle;
            if (textRotation > 90 && textRotation <= 270) {
              textRotation -= 180;
            }
            
            const desktopLeft = 292.5 + 225 * Math.cos(radian);
            const desktopTop = 292.5 + 225 * Math.sin(radian);
            
            return (
              <div
                key={index}
                className={`absolute hidden md:block text-center w-full text-xl md:text-4xl font-extrabold transition-all duration-500 ${
                  activeIndex === index ? 'text-orange-400' : 'text-neutral-700'
                }`}
                style={{
                  left: `${desktopLeft}px`,
                  top: `${desktopTop}px`,
                  transform: `translate(-100%, -50%) rotate(${textRotation}deg) scale(${activeIndex === index ? 1.1 : 1})`,
                }}
              >
                {item}
              </div>
            );
          })}
          
          {/* 모바일용 텍스트 (별도로 렌더링) */}
          {items.map((item, index) => {
            const angle = (360 / items.length) * index;
            const radian = ((angle - 180) * Math.PI) / 180;
            
            let textRotation = angle;
            if (textRotation > 90 && textRotation <= 270) {
              textRotation -= 180;
            }
            
            const mobileLeft = 150 + 150 * Math.cos(radian);
            const mobileTop = 150 + 150 * Math.sin(radian);
            
            return (
              <div
                key={`mobile-${index}`}
                className={`absolute md:hidden text-lg whitespace-nowrap font-extrabold transition-all duration-500 ${
                  activeIndex === index ? 'text-orange-400' : 'text-neutral-700'
                }`}
                style={{
                  left: `${mobileLeft}px`,
                  top: `${mobileTop}px`,
                  transform: `translate(-50%, -50%) rotate(${textRotation}deg) scale(${activeIndex === index ? 1.15 : 1})`,
                }}
              >
                {item}
              </div>
            );
          })}
          
          {/* 데스크탑용 시계 바늘 */}
          <div 
            className="absolute hidden md:block"
            style={{ 
              top: '50%',
              left: '50%',
              width: '3px',
              height: '144px', // 데스크탑용 바늘 (1.5배)
              backgroundColor: 'black',
              transformOrigin: 'center bottom',
              transform: `translate(-50%, -100%) rotate(${displayRotation}deg)`,
              transition: 'transform 400ms ease-in-out',
              zIndex: 10
            }}
          />
          
          {/* 모바일용 시계 바늘 */}
          <div 
            className="absolute md:hidden"
            style={{ 
              top: '50%',
              left: '50%',
              width: '3px',
              height: '88px', // 모바일용 바늘 조정
              backgroundColor: 'black',
              transformOrigin: 'center bottom',
              transform: `translate(-50%, -100%) rotate(${displayRotation}deg)`,
              transition: 'transform 400ms ease-in-out',
              zIndex: 10
            }}
          />
        </div>
      </div>
    </section>
  );
}
