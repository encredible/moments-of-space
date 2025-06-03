'use client';
import Link from 'next/link';
import homeContent from './content.json';
import ServiceHighlights from './ServiceHighlights';
import ProjectHighlights from './ProjectHighlights';
import DesignerHighlights from './DesignerHighlights';
import ServiceListSplitSection from './ServiceListSplitSection';
import { useRouter } from 'next/navigation';
import PageLayout from '../components/PageLayout';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="w-full">
        {/* Hero Section */}
        <section
          className="h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-custom-bg mb-8"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('${homeContent.hero.backgroundImage}')` }}
        >
          <h1 className="text-3xl md:text-5xl leading-tight tracking-tighter">
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

        <PageLayout>
            {/* Homs styling service list Section with Images */}
            <ServiceListSplitSection />

            {/* Services Highlights Section */}
            <ServiceHighlights />

            {/* Project Highlights Section */}
            <ProjectHighlights />

            {/* Designer Highlights Section */}
            <DesignerHighlights />
        </PageLayout>
        {/* Before/After Comparison Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-center text-neutral-900 mb-8 md:mb-12">
              변화의 순간을 확인해보세요
            </h2>
            <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
              전문 디자이너의 손길로 완전히 새로워진 공간을 직접 비교해보세요. 슬라이더를 드래그하여 놀라운 변화를 확인할 수 있습니다.
            </p>
            <BeforeAfterSlider
              imagePairs={[
                {
                  beforeImage: "/images/project/project-cozy-living-room-detail1.jpg",
                  afterImage: "/images/project/project-cozy-living-room-detail2.jpg",
                  beforeAlt: "인테리어 디자인 전 거실 모습",
                  afterAlt: "인테리어 디자인 후 거실 모습",
                  title: "아늑한 거실 공간"
                },
                {
                  beforeImage: "/images/project/project-modern-apartment-detail1.jpg",
                  afterImage: "/images/project/project-modern-apartment-detail3.jpg",
                  beforeAlt: "인테리어 디자인 전 모던 아파트",
                  afterAlt: "인테리어 디자인 후 모던 아파트",
                  title: "모던 아파트 리노베이션"
                },
                {
                  beforeImage: "/images/project/project-luxury-villa-detail1.jpg",
                  afterImage: "/images/project/project-luxury-villa-detail2.jpg",
                  beforeAlt: "인테리어 디자인 전 럭셔리 빌라",
                  afterAlt: "인테리어 디자인 후 럭셔리 빌라",
                  title: "럭셔리 빌라 인테리어"
                }
              ]}
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="pt-8 px-4 pb-10 text-center my-4">
          <h2 className="text-xl md:text-2xl mb-5 md:mb-7 text-neutral-900">
            {homeContent.cta.title}
          </h2>
          <button
              onClick={() => router.push('/contact')}
              className="font-korean-button text-base text-custom-bg bg-black px-5 h-12 hover:bg-gray-800 transition-colors w-full sm:w-auto max-w-xs"
          >
            {homeContent.cta.button}
          </button>
        </section>
    </div>
  );
}