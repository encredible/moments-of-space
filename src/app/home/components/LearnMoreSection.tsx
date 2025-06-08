import React from 'react';
import FurnitureGallery from './FurnitureGallery';
import ServiceHighlights from './ServiceHighlights';
import homeContent from "@/app/home/content.json";
import SectionTitle from "@/app/components/SectionTitle";

const LearnMoreSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <SectionTitle
        title={homeContent.commonText.serviceFeature.title}
        description={homeContent.commonText.serviceFeature.description}
      />
      <ServiceHighlights />
      <FurnitureGallery />
    </section>
  );
};

export default LearnMoreSection;
