'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/app/components/SectionTitle';

// 픽토그램 서비스 데이터 정의
interface PictogramService {
  id: string;
  name: string;
  imagePath: string;
  x: number; // x 좌표(%) - 컨테이너 너비 기준
  y: number; // y 좌표(%) - 컨테이너 높이 기준
  size?: number; // 상대적 크기(기본값 1)
  highlight?: boolean; // 강조 표시 여부
  zIndex?: number; // z-index 값
}

const services: PictogramService[] = [
  {
    id: 'furniture-assembly',
    name: '가구조립',
    imagePath: '/images/pictogram/픽토그램_가구조립.svg',
    x: 42, // 중앙
    y: 75,
    size: 2,
  },
  {
    id: 'closet',
    name: '정리',
    imagePath: '/images/pictogram/픽토그램_정리.svg',
    x: 18.5,
    y: 45,
    size: 0.85,
    zIndex: 20, // 높은 z-index
  },
  {
    id: 'painting',
    name: '도장',
    imagePath: '/images/pictogram/픽토그램_도장.svg',
    x: 78,
    y: 30,
    size: 0.9,
  },
  {
    id: 'custom-furniture',
    name: '제작가구',
    imagePath: '/images/pictogram/픽토그램_제작가구.svg',
    x: 24.5,
    y: 50,
    size: 3,
    zIndex: 10, // 더 낮은 z-index
  },
  {
    id: 'lighting-install',
    name: '조명설치',
    imagePath: '/images/pictogram/픽토그램_조명설치.svg',
    x: 50,
    y: 25,
    size: 0.9,
  },
  {
    id: 'cleaning',
    name: '청소',
    imagePath: '/images/pictogram/픽토그램_청소.svg',
    x: 85,
    y: 55,
    size: 1.5,
  },
  {
    id: 'curtain-install',
    name: '커튼설치',
    imagePath: '/images/pictogram/픽토그램_커튼설치.svg',
    x: 65,
    y: 55,
    size: 1,
  },
];

const DesktopOtherServiceSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="hidden py-16 md:block">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="OTHER SERVICES"
          description="홈스타일링에 필요한 시공·설치 서비스를 원스톱으로 신청 가능합니다."
        />

        <div className="relative w-full h-[300px] md:h-[400px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${service.x}%`,
                top: `${service.y}%`,
                zIndex: service.zIndex || (service.highlight ? 10 : 1),
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div 
                className="relative flex flex-col items-center"
              >
                <div className="relative flex items-center justify-center">
                  <Image
                    src={service.imagePath}
                    alt={service.name}
                    width={service.size ? 70 * service.size : 70}
                    height={service.size ? 70 * service.size : 70}
                    className={`transition-all duration-300 ${service.highlight || hoveredService === service.id ? 'filter-none' : 'filter grayscale opacity-10'}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 섹션 하단 중앙에 선택된 서비스 이름 표시 */}
        <div className="h-20 flex justify-center items-center">
          {hoveredService && (
            <p className="text-center text-4xl font-extrabold text-neutral-900 transition-opacity duration-300 animate-fade-in">
              {services.find(service => service.id === hoveredService)?.name || ''}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesktopOtherServiceSection;
