import SplitSection from '../components/SplitSection';

// 인트로 섹션 인터페이스 정의
interface IntroSection {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  imageOnLeft: boolean;
}

interface HomeContent {
  introSections: IntroSection[];
  [key: string]: any;
}

// Load the home content data from content.json
const homeContent: HomeContent = require('./content.json');

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
