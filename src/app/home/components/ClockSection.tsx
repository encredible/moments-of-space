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
  const rotationRef = useRef(initialRotation); // 시계 바늘의 현재 각도 (useRef로 변경)
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
  }, [items.length]); // activeIndex 의존성 제거
  
  return (
    <section className="py-16 md:py-24">
      <SectionTitle 
        title={title} 
        description={description} 
      />
      
      <div className="flex justify-center mt-16">
        <div className="relative w-[390px] h-[390px]">
          {/* 텍스트 아이템들 */}
          {items.map((item, index) => {
            // 시계 방향으로 배치 (6시 방향에서 시작 - 180도)
            const angle = (360 / items.length) * index;
            const radian = ((angle - 180) * Math.PI) / 180;
            const radius = 150; // 중심에서 텍스트까지의 거리 (px)
            
            // 텍스트 회전 방향 조정 (항상 올바르게 보이도록)
            let textRotation = angle;
            if (textRotation > 90 && textRotation <= 270) {
              textRotation -= 180;
            }
            
            return (
              <div
                key={index}
                className={`absolute text-center w-full text-xl font-extrabold transition-all duration-500 ${
                  activeIndex === index ? 'text-orange-400' : 'text-neutral-700'
                }`}
                style={{
                  left: `${195 + radius * Math.cos(radian)}px`,
                  top: `${195 + radius * Math.sin(radian)}px`,
                  transform: `translate(-50%, -50%) rotate(${textRotation}deg) scale(${activeIndex === index ? 1.1 : 1})`,
                }}
              >
                {item}
              </div>
            );
          })}
          
          {/* 시계 바늘 */}
          <div 
            className="absolute"
            style={{ 
              top: '50%',
              left: '50%',
              width: '3px',
              height: '96px',
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
