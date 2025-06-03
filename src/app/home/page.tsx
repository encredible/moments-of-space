'use client';
import ServiceHighlights from './ServiceHighlights';
import ServiceListSplitSection from './ServiceListSplitSection';
import PageLayout from '../components/PageLayout';
import BeforeAfterSlider from './BeforeAfterSlider';
import HeroSection from './HeroSection';
import CtaSection from './CtaSection';
import InteriorIconsSection from './InteriorIconsSection';
import TextSection from '../components/TextSection';
import homeContent from './content.json';
import Button from "@/app/components/Button";
import React from "react";

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
        <section id="projects-section" className="py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <TextSection
              title={homeContent.commonText.projectGallery.title}
              description={homeContent.commonText.projectGallery.description}
            />
            <BeforeAfterSlider
              imagePairs={homeContent.commonText.projectGallery.imagePairs}
            />
            <section className="pt-8 px-4 pb-10 text-center my-4">
              <Button href="/project">모든 프로젝트 보기</Button>
            </section>
          </div>
        </section>

        {/* Call to Action Section */}
        <CtaSection />
    </div>
  );
}