'use client';
import Link from 'next/link';
import homeContent from './content.json';
import ServiceHighlights from './ServiceHighlights';
import ProjectHighlights from './ProjectHighlights';
import DesignerHighlights from './DesignerHighlights';
import HomeIntroSections from './HomeIntroSections';
import { useRouter } from 'next/navigation';
import PageLayout from '../components/PageLayout';

export default function HomePage() {
  const router = useRouter();
  return (
    <PageLayout>
      <div className="flex flex-col flex-grow w-full">
        {/* Hero Section */}
        <section
          className="h-128 bg-cover bg-center flex flex-col items-center justify-center text-center text-custom-bg mb-8"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('${homeContent.hero.backgroundImage}')` }}
        >
          <h1 className="font-korean text-4xl md:text-5xl leading-tight tracking-tighter">
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
                      ? 'inline-block bg-neutral-900 text-custom-bg px-8 py-3 text-lg font-medium hover:bg-neutral-700 transition-colors'
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
        <ServiceHighlights />

        {/* Project Highlights Section */}
        <ProjectHighlights />

        {/* Designer Highlights Section */}
        <DesignerHighlights />

        {/* Call to Action Section */}
        <section className="pt-5 px-4 pb-3 text-center">
          <h2 className="font-korean text-2xl mb-7 text-neutral-900">
            {homeContent.cta.title}
          </h2>
          <button
              onClick={() => router.push('/contact')}
              className="font-korean text-base text-custom-bg bg-black px-5 h-12 hover:bg-gray-800 transition-colors"
          >
            {homeContent.cta.button}
          </button>
        </section>
      </div>
    </PageLayout>
  );
}