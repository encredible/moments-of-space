'use client';
import Button from '../components/Button';
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
            <Button key={btn.text + idx} href={btn.href}>{btn.text}</Button>
          );
        })}
      </div>
    </section>
  );
}
