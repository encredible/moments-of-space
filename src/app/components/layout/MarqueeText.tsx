'use client'
import React, {useState, useEffect} from 'react';
import {useMediaQuery} from "react-responsive";

interface MarqueeTextProps {
  className?: string;
  texts?: string[];
}

const MarqueeText: React.FC<MarqueeTextProps> = ({className}) => {
  const isMobile = useMediaQuery({maxWidth: 767}); // md 미만이면 모바일
  
  const texts = [
    "집꾸미기 어디서부터 시작해야 할지 막막하신가요?",
    "어떤 스타일로 공간을 채워야 할지, 어떤 가구를 어디서 사야 할지, 내가 고른 가구들이 다함께 어울릴지 수많은 선택과 결정들에 지치시지 않았나요?",
    "인테리어 공사 없이도 가구와 소품의 섬세한 선택과 배치만으로 공간의 분위기는 충분히 바뀔 수 있습니다."
  ]
  // 현재 보여줄 문장 인덱스를 상태로 관리
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  
  // 문장이 변경되는 간격 (애니메이션 시간과 일치하도록 설정)
  const animationDuration = 6000; // 6초 (CSS에서 설정한 시간과 동일)
  
  // 문장을 일정 시간마다 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, animationDuration);
    
    return () => clearInterval(interval);
  }, [texts.length]);
  
  // Marquee 텍스트를 위한 반복 텍스트 생성
  const marqueeContent = texts.join(' ');
  return (
    // 외부 컨테이너: 스타일링과 오버플로우 처리
    <div className={`text-black border-b-2 py-2 font-korean bg-[var(--background)] ${className || ''}`}>
      {isMobile ?
        <div className="mobile-animation">
          <div className="marquee-container">
            <div className="animate-marquee-custom marquee-content">
              {/* 마퀴 텍스트 2번 반복 (연속적으로 흐르는 효과를 위해) */}
              {marqueeContent} • {marqueeContent}
            </div>
          </div>
        </div>
        :
        <div className="desktop-animation">
          <div className="sentence-container">
            <div key={`desktop-${currentSentenceIndex}`} className="sentence-slide px-4">
              {texts[currentSentenceIndex]}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MarqueeText;
