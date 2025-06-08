import React from 'react';
import SixImageGridCardDisplay from './SixImageGridCardDisplay';
import ThreeImageGridCardDisplay from './ThreeImageGridCardDisplay';
import homeContent from "@/app/home/content.json";
import SectionTitle from "@/app/components/SectionTitle";

const LearnMoreSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <SectionTitle
        title={homeContent.commonText.serviceFeature.title}
        description={homeContent.commonText.serviceFeature.description}
      />
      <ThreeImageGridCardDisplay />
      <SixImageGridCardDisplay />
    </section>
  );
};

export default LearnMoreSection;
