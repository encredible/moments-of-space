import React from 'react';
import ThreeImageGridCardDisplay from './ThreeImageGridCardDisplay';
import homeContent from "@/app/home/content.json";
import SectionTitle from "@/app/components/SectionTitle";

const ProcessSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <SectionTitle
        title={homeContent.process.title}
        description={homeContent.process.description}
      />
      <ThreeImageGridCardDisplay />
    </section>
  );
};

export default ProcessSection;
