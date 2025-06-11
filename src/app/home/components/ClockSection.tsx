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
    <section className="py-16 md:py-24">
      <SectionTitle 
        title={title} 
        description={description} 
      />
      
      <div className="flex justify-center mt-16">
        {/* 모바일: 390px, 데스크탑: 585px (1.5배) */}
        <div className="relative w-[390px] h-[390px] md:w-[585px] md:h-[585px]">
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
            
            // 모바일과 데스크탑의 서로 다른 반지름 및 중심점 고려
            const mobileLeft = 195 + 150 * Math.cos(radian);
            const mobileTop = 195 + 150 * Math.sin(radian);
            const desktopLeft = 292.5 + 225 * Math.cos(radian);
            const desktopTop = 292.5 + 225 * Math.sin(radian);
            
            return (
              <div
                key={index}
                className={`absolute hidden md:block text-center w-full text-xl md:text-2xl font-extrabold transition-all duration-500 ${
                  activeIndex === index ? 'text-orange-400' : 'text-neutral-700'
                }`}
                style={{
                  left: `${desktopLeft}px`,
                  top: `${desktopTop}px`,
                  transform: `translate(-50%, -50%) rotate(${textRotation}deg) scale(${activeIndex === index ? 1.1 : 1})`,
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
            
            const mobileLeft = 195 + 150 * Math.cos(radian);
            const mobileTop = 195 + 150 * Math.sin(radian);
            
            return (
              <div
                key={`mobile-${index}`}
                className={`absolute md:hidden text-center w-full text-xl font-extrabold transition-all duration-500 ${
                  activeIndex === index ? 'text-orange-400' : 'text-neutral-700'
                }`}
                style={{
                  left: `${mobileLeft}px`,
                  top: `${mobileTop}px`,
                  transform: `translate(-50%, -50%) rotate(${textRotation}deg) scale(${activeIndex === index ? 1.1 : 1})`,
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
              height: '96px', // 모바일용 바늘
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
