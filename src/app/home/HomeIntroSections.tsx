import SplitSection from '../components/SplitSection';

// 인트로 섹션 인터페이스 정의
interface IntroSection {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  imageOnLeft: boolean;
}

// Load the home content data from content.json
import homeContent from './content.json' assert { type: 'json' };

export default function HomeIntroSections() {
  const introSections = homeContent.introSections || [];

  return (
    <>
      {introSections.map((section: IntroSection, index: number) => (
        <SplitSection
          key={`intro-section-${index}`}
          imageUrl={section.imageUrl}
          imageAlt={section.imageAlt}
          title={section.title}
          description={section.description}
          imageOnLeft={section.imageOnLeft}
          priority={true}
        />
      ))}
    </>
  );
}
