'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-900/60 to-primary-900/40 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        />
        {/* 임시 배경색 (이미지가 없을 때) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* 메인 헤드라인 */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            공간에 생명을
            <br />
            <span className="text-accent-400">불어넣는 디자이너</span>
          </h1>

          {/* 서브타이틀 */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            주거부터 상업공간까지, 당신만의 특별한 공간을 만들어드립니다
          </p>

          {/* 특징 키워드 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['기능과 미학의 조화', '맞춤형 디자인', '전문적인 시공관리'].map((keyword, index) => (
              <span 
                key={keyword}
                className={`px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium transition-all duration-500 delay-${index * 100}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="group inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              서비스 알아보기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/projects"
              className="group inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
            >
              <Play className="mr-2 h-5 w-5" />
              포트폴리오 보기
            </Link>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* 장식적 요소들 */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-accent-400/30 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent-400 rounded-full animate-ping hidden lg:block" />
    </section>
  );
};

export default Hero; 