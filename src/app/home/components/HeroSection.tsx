'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// 히어로 섹션에 표시할 이미지 파일 목록
const heroImages = [
  'ENFJ-1.png', 'ENFJ-2.png', 'ENFJ-3.png',
  'ENTJ-1.png', 'ENTJ-2.png', 'ENTJ-3.png', 'ENTJ-4.png', 'ENTJ-5.png',
  'ENTP-1.png', 'ENTP-2.png', 'ENTP-3.png', 'ENTP-4.png', 'ENTP-5.png',
  'ESFJ-1.png', 'ESFJ-2.png', 'ESFJ-3.png', 'ESFJ-4.png',
];

// 랜덤한 이미지 위치와 정보를 생성하는 인터페이스
interface RandomImageProps {
  src: string;
  top: number;
  left: number;
  size: number;
  rotate: number;
  zIndex: number;
}

interface HeroSectionProps {
  isMobile: boolean;
}

export default function HeroSection({isMobile}: HeroSectionProps) {
  // 랜덤 이미지 배열 상태
  const [randomImages, setRandomImages] = useState<RandomImageProps[]>([]);
  
  // 드래그 관련 상태
  const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 두 이미지 영역이 겹치는지 확인하는 함수
  const imagesOverlap = (img1: RandomImageProps, img2: RandomImageProps) => {
    // 이미지 간 최소 여백 (퍼센트)
    const margin = 10; 
    
    // 이미지 사각형 영역 계산
    // 크기는 퍼센트로 그대로 사용
    const rect1 = {
      left: img1.left - margin,
      right: img1.left + (img1.size / 2) + margin, // 크기에 따른 너비 계산
      top: img1.top - margin,
      bottom: img1.top + (img1.size / 2) + margin, // 크기에 따른 높이 계산
      width: (img1.size / 2) + margin * 2,
      height: (img1.size / 2) + margin * 2
    };
    
    const rect2 = {
      left: img2.left - margin,
      right: img2.left + (img2.size / 2) + margin,
      top: img2.top - margin,
      bottom: img2.top + (img2.size / 2) + margin,
      width: (img2.size / 2) + margin * 2,
      height: (img2.size / 2) + margin * 2
    };
    
    // 두 사각형이 겹치는지 확인
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  };
  
  // 충돌한 이미지 반환 (먼저 주어진 이미지들을 확인하면서 충돌하는 첫 이미지 반환)
  const findFirstCollision = (newImg: RandomImageProps, existingImages: RandomImageProps[]) => {
    for (const img of existingImages) {
      if (imagesOverlap(newImg, img)) {
        return img;
      }
    }
    return null;
  };
  
  // 충돌 후 이상적인 위치를 계산
  const calculateNonOverlappingPosition = (newImg: RandomImageProps, collidingImg: RandomImageProps) => {
    // 두 이미지 중앙 사이의 방향 계산
    const dx = newImg.left - collidingImg.left;
    const dy = newImg.top - collidingImg.top;
    
    // 이미지 반경 + 여백 (+ 더 크게 여백 확보)
    const imgRadius1 = (newImg.size / 2) + 15; // 여백 증가
    const imgRadius2 = (collidingImg.size / 2) + 15; // 여백 증가
    const totalRadius = imgRadius1 + imgRadius2;
    
    // 거리 계산
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // 같거나 아주 비슷한 위치에 있는 경우 임의 방향으로 이동
    if (distance < 10) { 
      // 임의의 각도에 무작위성 추가 + 거리 증가
      const angle = Math.random() * Math.PI * 2;
      const randomDistance = totalRadius * (1.2 + Math.random() * 0.5); // 1.2~1.7배 범위로 무작위 거리 설정
      
      return {
        left: collidingImg.left + Math.cos(angle) * randomDistance,
        top: collidingImg.top + Math.sin(angle) * randomDistance
      };
    }
    
    // 충돌이 없는 위치로 이동 + 약간의 무작위성 추가
    const ratio = (totalRadius / distance) * (1 + Math.random() * 0.3); // 추가 거리 0~30% 증가
    
    // 기본 위치에 약간의 무작위성 추가
    const jitter = 5; // 최대 5% 정도의 반경 내에서 임의 위치 조정
    const randomOffsetX = (Math.random() * 2 - 1) * jitter;
    const randomOffsetY = (Math.random() * 2 - 1) * jitter;
    
    return {
      left: collidingImg.left + dx * ratio + randomOffsetX,
      top: collidingImg.top + dy * ratio + randomOffsetY
    };
  };
  
  // 새 이미지 위치가 기존 이미지와 겹치지 않도록 조정
  const adjustPositionIfNeeded = (newImg: RandomImageProps, existingImages: RandomImageProps[]): RandomImageProps => {
    const collidingImg = findFirstCollision(newImg, existingImages);
    
    if (!collidingImg) {
      return newImg; // 충돌 없음
    }
    
    // 새 위치 계산
    const newPosition = calculateNonOverlappingPosition(newImg, collidingImg);
    
    // 조정된 이미지 객체 생성
    const adjustedImg = {
      ...newImg,
      left: newPosition.left,
      top: newPosition.top
    };
    
    // 조정 후 다른 이미지와 다시 충돌 체크
    return adjustPositionIfNeeded(adjustedImg, existingImages);
  };
  
  // 새 이미지 위치가 유효한지 확인
  const isValidPosition = (newImg: RandomImageProps, existingImages: RandomImageProps[]) => {
    for (const img of existingImages) {
      if (imagesOverlap(newImg, img)) {
        return false; // 겹치면 유효하지 않음
      }
    }
    return true; // 모든 이미지와 겹치지 않으면 유효함
  };
  
  // 화면을 그리드로 나누어 고르게 분포하는 함수
  const createGridDistribution = () => {
    // 화면을 5x4 그리드로 분할
    const gridRows = 4;
    const gridCols = 5;
    
    // 각 셀의 크기
    const cellWidth = 100 / gridCols;
    const cellHeight = 80 / gridRows;
    
    // 전체 그리드 셀 생성
    const cells: {row: number, col: number}[] = [];
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        cells.push({row, col});
      }
    }
    
    // 셀 랜덤 섞기
    return cells.sort(() => Math.random() - 0.5);
  };
  
  // 컴포넌트가 마운트될 때 랜덤한 이미지 배열 생성
  useEffect(() => {
    // 브라우저 환경에서만 실행
    if (typeof window === 'undefined') return;
    
    // 화면을 그리드로 나누어 분할
    const gridCells = createGridDistribution();
    const selectedImages: RandomImageProps[] = [];
    
    // 이미지 수에 따라 적절하게 조정
    const imagesToPlace = Math.min(heroImages.length, gridCells.length);
    
    // 런덤화된 이미지 배열 생성
    const shuffledImages = [...heroImages]
      .sort(() => Math.random() - 0.5)
      .slice(0, imagesToPlace);
    
    // 그리드 기반 배치 시도
    for (let i = 0; i < imagesToPlace; i++) {
      const imageSrc = shuffledImages[i];
      const cell = gridCells[i];
      
      // 셀 내에서 약간의 랜덤한 위치 생성 (가운데에서 약간 조정)
      const cellWidth = 100 / 5;
      const cellHeight = 80 / 4;
      
      // 셀 내에서 중앙에서 40% 내외로 랜덤 위치 선택
      const offsetX = (Math.random() * 0.8 - 0.4) * cellWidth * 0.8;
      const offsetY = (Math.random() * 0.8 - 0.4) * cellHeight * 0.8;
      
      const left = (cell.col * cellWidth) + (cellWidth / 2) + offsetX;
      const top = (cell.row * cellHeight) + (cellHeight / 2) + offsetY;
      
      // 회전과 크기에 무작위성 추가
      var size = Math.random() * 40 + 60; // 60-100px 크기
      if (isMobile) {
        size *= 0.7
      }
      const rotate = Math.random() * 40 - 20; // -20° ~ +20° 회전
      const zIndex = Math.floor(Math.random() * 10) + 1;
      
      // 새 이미지 객체 생성
      const newImage: RandomImageProps = {
        src: imageSrc,
        top: Math.max(5, Math.min(top, 75)), // 화면 밖으로 나가지 않도록 제한
        left: Math.max(5, Math.min(left, 90)),
        size,
        rotate,
        zIndex
      };
      
      selectedImages.push(newImage);
    }
    
    setRandomImages(selectedImages);
  }, []); // 컴포넌트 마운트 시 한 번만 실행
  
  // 드래그 시작 핸들러
  const handleDragStart = (index: number, e: React.PointerEvent) => {
    // 모바일 환경에서는 드래그 기능 비활성화
    if (isMobile) return;
    
    // 현재 드래그 중인 이미지 인덱스 설정
    setDraggedImageIndex(index);
    
    // 드래그 시작 위치와 이미지 위치 간의 오프셋 계산
    const container = containerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      // 현재 이미지 요소의 위치 (퍼센트→픽셀)
      const imgTop = (randomImages[index].top / 100) * containerHeight;
      const imgLeft = (randomImages[index].left / 100) * containerWidth;
      
      // 포인터 위치와 이미지 위치 간의 오프셋 계산
      const offsetX = e.clientX - containerRect.left - imgLeft;
      const offsetY = e.clientY - containerRect.top - imgTop;
      
      setDragOffset({ x: offsetX, y: offsetY });
    }
    
    // 드래그 중인 이미지의 zIndex를 높이고 rotate를 0으로 설정
    const updatedImages = [...randomImages];
    updatedImages[index].zIndex = 100; // 다른 이미지보다 높은 zIndex
    updatedImages[index].rotate = 0;  // 로테이션 0으로 설정
    setRandomImages(updatedImages);
  };
  
  // 드래그 중 핸들러
  const handleDrag = (e: React.PointerEvent) => {
    if (draggedImageIndex === null) return;
    
    const container = containerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      // 포인터 위치를 이미지의 새 위치로 변환 (오프셋 고려)
      const newLeft = ((e.clientX - containerRect.left - dragOffset.x) / containerWidth) * 100;
      const newTop = ((e.clientY - containerRect.top - dragOffset.y) / containerHeight) * 100;
      
      // 경계 내부로 제한 (현재 이미지의 크기 고려)
      const currentImage = randomImages[draggedImageIndex];
      
      // 이미지 크기를 퍼센트로 변환 (가로 및 세로 각각 계산)
      const imageSizeWidthPercent = (currentImage.size / containerWidth) * 100;
      const imageSizeHeightPercent = (currentImage.size / containerHeight) * 100;
      
      // 크기를 고려하여 경계 제한
      const boundedLeft = Math.max(0, Math.min(newLeft, 100 - imageSizeWidthPercent));
      const boundedTop = Math.max(0, Math.min(newTop, 100 - imageSizeHeightPercent));
      
      // 이미지 위치 업데이트
      const updatedImages = [...randomImages];
      updatedImages[draggedImageIndex].left = boundedLeft;
      updatedImages[draggedImageIndex].top = boundedTop;
      setRandomImages(updatedImages);
    }
  };
  
  // 드래그 종료 핸들러
  const handleDragEnd = () => {
    if (draggedImageIndex === null) return;
    
    // 드래그 중인 이미지의 zIndex 원상복구 (다른 이미지보다는 높게 유지)
    const updatedImages = [...randomImages];
    updatedImages[draggedImageIndex].zIndex = 10 + draggedImageIndex; 
    setRandomImages(updatedImages);
    
    // 드래그 상태 초기화
    setDraggedImageIndex(null);
  };
  
  // 이벤트 등록/해제
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (draggedImageIndex !== null) {
        e.preventDefault(); // 브라우저 기본 동작 방지
        handleDrag(e as unknown as React.PointerEvent);
      }
    };
    
    const handlePointerUp = () => {
      if (draggedImageIndex !== null) {
        handleDragEnd();
      }
    };
    
    // 전역 이벤트 리스너 등록
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    
    return () => {
      // 정리 함수
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [draggedImageIndex]);
  
  return (
    <section ref={containerRef} className="h-[70vh] overflow-hidden mb-8 z-0 relative">
      {/* 랜덤 이미지들 렌더링 */}
      {randomImages.map((img, index) => (
        <div 
          key={`hero-img-${index}`}
          className="absolute"
          style={{
            top: `${img.top}%`,
            left: `${img.left}%`,
            transform: `rotate(${img.rotate}deg)`,
            zIndex: img.zIndex,
            cursor: isMobile ? 'default' : 'grab',
            userSelect: 'none',
          }}
          onPointerDown={(e) => handleDragStart(index, e)}
        >
          <Image 
            src={`/images/hero/${img.src}`}
            alt={`Interior design element ${index + 1}`}
            width={img.size}
            height={img.size}
            style={{ 
              objectFit: 'contain',
              pointerEvents: 'none' // 이미지 자체에는 포인터 이벤트 전달하지 않음
            }}
            draggable={false}
          />
        </div>
      ))}
    </section>
  );
}
