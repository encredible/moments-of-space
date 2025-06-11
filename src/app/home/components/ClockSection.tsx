'use client';

import React, { useEffect, useState } from 'react';
import SectionTitle from '@/app/components/SectionTitle';

interface ClockSectionProps {
  title: string;
  description: string;
  items: string[];
}

export default function ClockSection({ title, description, items }: ClockSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // 바늘이 천천히 회전하도록 설정
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000); // 1초마다 다음 항목으로 이동
    
    return () => clearInterval(interval);
  }, [items.length]);
  
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
            const angle = (360 / items.length) * index;
            const radian = ((angle - 180) * Math.PI) / 180; // -90도는 12시 방향에서 시작
            const radius = 150; // 중심에서 텍스트까지의 거리 (px)
            
            // 텍스트 회전 방향 조정 (항상 올바르게 보이도록)
            let textRotation = angle;
            if (textRotation > 90 && textRotation <= 270) {
              textRotation -= 180;
            }
            
            return (
              <div
                key={index}
                className={`absolute text-center w-full text-xl font-extrabold transition-all duration-300 ${
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
              height: '112px',
              backgroundColor: 'black',
              transformOrigin: 'center bottom',
              transform: `translate(-50%, -100%) rotate(${(360 / items.length) * activeIndex - 90}deg)`,
              transition: 'transform 1000ms ease-in-out',
              zIndex: 10
            }}
          />
          
        </div>
      </div>
    </section>
  );
}
