'use client';
import Link from 'next/link';
import homeContent from '../home/content.json';

export default function HeroSection() {
  const { backgroundImage, title, ctaButtons } = homeContent.hero;
  
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-custom-bg mb-8"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('${backgroundImage}')` }}
    >
      <h1 className="text-3xl md:text-7xl tracking-tighter whitespace-pre-line leading-loose">
        {title}
      </h1>
      <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
        {ctaButtons.map((btn, idx) => {
          return (
            <Link
              key={btn.text + idx}
              href={btn.href}
              className="inline-block bg-neutral-900 text-custom-bg px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-korean-button hover:bg-neutral-700 transition-colors"
            >
              {btn.text}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
