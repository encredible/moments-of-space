'use client';
import BeforeAfterSlider from './BeforeAfterSlider';
import homeContent from '../content.json';
import SectionTitle from "@/app/components/SectionTitle";

export default function ProjectGallery() {
  const { title, description, imagePairs } = homeContent.commonText.projectGallery;

  return (
    <section id="projects-section" className="py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <SectionTitle title={title} description={description} />
        <BeforeAfterSlider imagePairs={imagePairs} />
      </div>
    </section>
  );
}
