'use client';
import Link from 'next/link';
import homeContent from './homeContent.json';
import ServiceHighlights from './ServiceHighlights';
import ProjectHighlights from './ProjectHighlights';
import HomeIntroSections from './HomeIntroSections';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
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

        {/* Home Styling Introduction Sections with Images */}
        <HomeIntroSections />

        {/* Services Highlights Section */}
        <section className="pt-5 px-4 pb-3">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            Our Services
          </h2>
        </section>
        <ServiceHighlights />

        {/* Project Highlights Section */}
        <ProjectHighlights />

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
          <h2 className="font-plus-jakarta-sans font-bold text-2xl mb-2 text-neutral-900">
            {homeContent.cta.title}
          </h2>
          <button
              onClick={() => router.push('/contact')}
              className="font-plus-jakarta-sans font-bold text-base text-white bg-black px-5 h-12 hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </button>
        </section>
      </div>
    </main>
  );
}