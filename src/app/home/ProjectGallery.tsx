'use client';
import BeforeAfterSlider from './BeforeAfterSlider';
import homeContent from './content.json';
import Button from '../components/Button';

export default function ProjectGallery() {
  const { title, description, imagePairs } = homeContent.commonText.projectGallery;

  return (
    <section id="projects-section" className="py-12 md:py-20 bg-neutral-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <BeforeAfterSlider imagePairs={imagePairs} />
        <div className="mt-12 text-center">
          <Button href="/project">모든 프로젝트 보기</Button>
        </div>
      </div>
    </section>
  );
}
