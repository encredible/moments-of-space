'use client';
import Image from 'next/image';
import Link from 'next/link';
import homeContent from './homeContent.json';

type PortfolioItem = {
  image: string;
  alt: string;
  title: string;
  desc: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

type CtaButton = {
  href: string;
  text: string;
  variant: 'primary' | 'secondary';
};

type Hero = {
  backgroundImage: string;
  title: string;
  ctaButtons: CtaButton[];
};

type PortfolioHighlights = {
  title: string;
  items: PortfolioItem[];
};

type Testimonials = {
  title: string;
  items: Testimonial[];
};

type Cta = {
  title: string;
  button: string;
};

type HomeContent = {
  hero: Hero;
  portfolioHighlights: PortfolioHighlights;
  testimonials: Testimonials;
  cta: Cta;
};

export default function HomePage() {
  return (
    <main className="max-w-screen-xl mx-auto py-5 w-full">
      <div className="flex flex-col flex-grow w-full">
        {/* Hero Section */}
        <section
          className="h-128 bg-cover bg-center flex flex-col items-center justify-center text-center text-white mb-8"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('${homeContent.hero.backgroundImage}')` }}
        >
          <h1 className="font-plus-jakarta-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-tighter">
            {homeContent.hero.title}
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {homeContent.hero.ctaButtons.map((btn, idx) => {
              const variant = btn.variant === 'primary' ? 'primary' : 'secondary';
              return (
                <Link
                  key={btn.text + idx}
                  href={btn.href}
                  className={
                    variant === 'primary'
                      ? 'inline-block bg-neutral-900 text-white px-8 py-3 text-lg font-medium hover:bg-neutral-700 transition-colors'
                      : 'inline-block bg-white text-neutral-900 px-8 py-3 text-lg font-medium border border-neutral-300 hover:bg-neutral-100 transition-colors'
                  }
                >
                  {btn.text}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Portfolio Highlights Section */}
        <section className="pt-5 px-4 pb-3">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            {homeContent.portfolioHighlights.title}
          </h2>
        </section>
        <section className="flex flex-col gap-5 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {homeContent.portfolioHighlights.items.slice(0, 3).map((item: PortfolioItem, idx: number) => (
              <article className="flex-1 flex flex-col gap-3" key={item.title + idx}>
                <Image src={item.image} alt={item.alt} width={400} height={169} className="object-cover w-full h-44" />
                <h3 className="font-plus-jakarta-sans font-medium text-base text-neutral-900">{item.title}</h3>
                <p className="font-plus-jakarta-sans text-sm text-gray-500">{item.desc}</p>
              </article>
            ))}
          </div>
          {/* Portfolio Item 4 */}
          {homeContent.portfolioHighlights.items[3] && (
            <article className="flex flex-col gap-3 mt-5">
              <Image src={homeContent.portfolioHighlights.items[3].image} alt={homeContent.portfolioHighlights.items[3].alt} width={1232} height={170} className="object-cover w-full h-44" />
              <h3 className="font-plus-jakarta-sans font-medium text-base text-neutral-900">{homeContent.portfolioHighlights.items[3].title}</h3>
              <p className="font-plus-jakarta-sans text-sm text-gray-500">{homeContent.portfolioHighlights.items[3].desc}</p>
            </article>
          )}
        </section>

        {/* Testimonials Section */}
        <section className="pt-5 px-4 pb-3">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            {homeContent.testimonials.title}
          </h2>
        </section>
        <section className="flex flex-col gap-4 p-4">
          {homeContent.testimonials.items.map((item: Testimonial, idx: number) => (
            <article className="p-4 border border-gray-200" key={item.author + idx}>
              <p className="font-plus-jakarta-sans text-base text-neutral-900">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-3 font-plus-jakarta-sans text-sm text-gray-500">- {item.author}</footer>
            </article>
          ))}
        </section>

        {/* Call to Action Section */}
        <section className="pt-5 px-4 pb-3 text-center">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            {homeContent.cta.title}
          </h2>
          <button className="mt-3 bg-black px-5 h-12 flex justify-center items-center font-plus-jakarta-sans font-bold text-base text-white hover:bg-gray-800 mx-auto">
            {homeContent.cta.button}
          </button>
        </section>
      </div>
    </main>
  );
}