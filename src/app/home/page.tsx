'use client';
import ServiceHighlights from './ServiceHighlights';
import ServiceListSplitSection from './ServiceListSplitSection';
import PageLayout from '../components/PageLayout';
import BeforeAfterSlider from './BeforeAfterSlider';
import HeroSection from './HeroSection';
import CtaSection from './CtaSection';
import InteriorIconsSection from './InteriorIconsSection';
import TextSection from '../components/TextSection';

export default function HomePage() {
  return (
    <div className="w-full">
        {/* Hero Section */}
        <HeroSection />

        <PageLayout>
            {/* Homs styling service list Section with Images */}
            <ServiceListSplitSection />

            {/* Services Highlights Section */}
            <ServiceHighlights />

        </PageLayout>
        
        {/* Interior Icons Section */}
        <InteriorIconsSection />
        
        {/* Before/After Comparison Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <TextSection 
              title="프로젝트 구경하기"
              description="전문 디자이너의 손길로 완전히 새로워진 공간을 직접 비교해보세요. 슬라이더를 드래그하여 놀라운 변화를 확인할 수 있습니다."
            />
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
        <CtaSection />
    </div>
  );
}