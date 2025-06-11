'use client';
// import ServiceHighlights from './components/ServiceHighlights'; // LearnMoreSection으로 이동
import ServiceListSplitSection from './components/ServiceListSplitSection';
import PageLayout from '../components/PageLayout';
import HeroSection from './components/HeroSection';
import CtaSection from './components/CtaSection';
import InteriorServiceIconsSection from './components/InteriorServiceIconsSection';
import React from "react";
import ProcessSection from "./components/ProcessSection"; // 새로 추가
import MobileProjectGallery from "./components/MobileProjectGallery";
import content from "./content.json";
import DesktopProjectGallery from "@/app/home/components/DesktopProjectGallery";
import ClockSection from "./components/ClockSection"; // 새로 추가

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection/>
      
      <PageLayout>
        {/* Homs styling service list Section with Images */}
        <ServiceListSplitSection/>
        
        {/* Process Section */}
        <ProcessSection/>
        
        {/* Clock Section */}
        <ClockSection
          title={content.clockSection.title}
          description={content.clockSection.description}
          items={content.clockSection.items}
        />
        
        {/* Interior Icons Section */}
        <InteriorServiceIconsSection/>
      
      </PageLayout>
      
      {/* Call to Action Section */}
      <CtaSection/>
      
      {/* 수평 스크롤 이미지 갤러리 */}
      <MobileProjectGallery
        title={content.projectGallery.title}
        subtitle={content.projectGallery.mobileDescription}
        images={content.projectGallery.images}
        height={320}
      />
      
      <DesktopProjectGallery
        title={content.projectGallery.title}
        subtitle={content.projectGallery.description}
        images={content.projectGallery.images}
        height={320}
      />
    </div>
  );
}