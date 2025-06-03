'use client';
import Button from '../../components/Button';
import homeContent from '../../home/content.json';
import Image from 'next/image';

export default function HeroSection() {
  const { backgroundImage, title, ctaButtons } = homeContent.hero;
  
  return (
    <section className="h-[80vh] relative overflow-hidden mb-8">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 w-full h-full">
        {/* 이미지 컨테이너 */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={backgroundImage}
            alt="배경 이미지"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[1]"
          />
        </div>
        
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-custom-bg/70" />
      </div>
      
      {/* 컨텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-neutral-500 px-4">
        <h1 className="text-3xl md:text-7xl tracking-tighter whitespace-pre-line leading-loose max-w-5xl">
          {title}
        </h1>
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
          {ctaButtons.map((btn, idx) => (
            <Button key={btn.text + idx} href={btn.href}>{btn.text}</Button>
          ))}
        </div>
      </div>
    </section>
  );
}
