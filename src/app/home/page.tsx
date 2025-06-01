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
        {/* Hero Section */}
        <section
          className="h-[50vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-custom-bg mb-8"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('${homeContent.hero.backgroundImage}')` }}
        >
          <h1 className="font-korean text-3xl md:text-5xl leading-tight tracking-tighter">
            {homeContent.hero.title}
          </h1>
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
            {homeContent.hero.ctaButtons.map((btn, idx) => {
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

        {/* Home Styling Introduction Sections with Images */}
        <HomeIntroSections />

        {/* Services Highlights Section */}
        <ServiceHighlights />

        {/* Project Highlights Section */}
        <ProjectHighlights />

        {/* Designer Highlights Section */}
        <DesignerHighlights />

        {/* Call to Action Section */}
        <section className="pt-8 px-4 pb-10 text-center my-4">
          <h2 className="font-korean text-xl md:text-2xl mb-5 md:mb-7 text-neutral-900">
            {homeContent.cta.title}
          </h2>
          <button
              onClick={() => router.push('/contact')}
              className="font-korean-button text-base text-custom-bg bg-black px-5 h-12 hover:bg-gray-800 transition-colors w-full sm:w-auto max-w-xs"
          >
            {homeContent.cta.button}
          </button>
        </section>
    </PageLayout>
  );
}