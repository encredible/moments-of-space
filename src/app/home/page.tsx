'use client';
import ServiceHighlights from './ServiceHighlights';
import ServiceListSplitSection from './ServiceListSplitSection';
import PageLayout from '../components/PageLayout';
import HeroSection from './HeroSection';
import ProjectGallery from './ProjectGallery';
import CtaSection from './CtaSection';
import InteriorIconsSection from './InteriorIconsSection';
import SectionTitle from '../components/SectionTitle';
import homeContent from './content.json';
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

        {/* Project Gallery Section */}
        <ProjectGallery />

        {/* Call to Action Section */}
        <CtaSection />
    </div>
  );
}