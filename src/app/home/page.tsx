'use client';
import ServiceHighlights from './components/ServiceHighlights';
import ServiceListSplitSection from './components/ServiceListSplitSection';
import PageLayout from '../components/PageLayout';
import HeroSection from './components/HeroSection';
import ProjectGallery from './components/ProjectGallery';
import CtaSection from './components/CtaSection';
import InteriorIconsSection from './components/InteriorIconsSection';
import React from "react";
import FurnitureGallery from "./components/FurnitureGallery";

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
          
            {/* 가구 이미지 갤러리 섹션 */}
            <FurnitureGallery />
            
            {/* Interior Icons Section */}
            <InteriorIconsSection />
          
        </PageLayout>

        {/* Project Gallery Section */}
        <ProjectGallery />

        {/* Call to Action Section */}
        <CtaSection />
    </div>
  );
}