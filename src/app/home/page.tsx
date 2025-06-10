'use client';
// import ServiceHighlights from './components/ServiceHighlights'; // LearnMoreSection으로 이동
import ServiceListSplitSection from './components/ServiceListSplitSection';
import PageLayout from '../components/PageLayout';
import HeroSection from './components/HeroSection';
import ProjectGallery from './components/ProjectGallery';
import CtaSection from './components/CtaSection';
import InteriorServiceIconsSection from './components/InteriorServiceIconsSection';
import React from "react";
// import FurnitureGallery from "./components/FurnitureGallery"; // LearnMoreSection으로 이동
import LearnMoreSection from "./components/LearnMoreSection"; // 새로 추가
import HorizontalGallery from "./components/HorizontalGallery";
import content from "./content.json";

export default function HomePage() {
  return (
    <div className="w-full">
        {/* Hero Section */}
        <HeroSection />

        <PageLayout>
            {/* Homs styling service list Section with Images */}
            <ServiceListSplitSection />

            {/* Learn More Section (includes ServiceHighlights and FurnitureGallery) */}
            <LearnMoreSection />
          
            {/* Interior Icons Section */}
            <InteriorServiceIconsSection />
          
        </PageLayout>

        {/* Project Gallery Section */}
        <ProjectGallery />

        {/* Call to Action Section */}
        <CtaSection />
        
        {/* 수평 스크롤 이미지 갤러리 */}
        <HorizontalGallery 
          title={content.projectGallery.title}
          subtitle={content.projectGallery.subtitle}
          images={content.projectGallery.images}
          height={320}
        />
    </div>
  );
}