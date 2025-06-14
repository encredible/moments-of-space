'use client';
import ServiceListSplitSection from './components/ServiceListSplitSection';
import PageLayout from '../components/PageLayout';
import HeroSection from './components/HeroSection';
import MobileOtherServiceSection from './components/MobileOtherServiceSection';
import React from "react";
import ProcessSection from "./components/ProcessSection"; // 새로 추가
import MobileProjectGallery from "./components/MobileProjectGallery";
import content from "./content.json";
import DesktopProjectGallery from "@/app/home/components/DesktopProjectGallery";
import ClockSection from "./components/ClockSection"; // 새로 추가
import DesktopOtherServiceSection from "./components/DesktopOtherServiceSection";
import {useMediaQuery} from "react-responsive"; // 픽토그램 서비스 섹션 추가

export default function HomePage() {
  const isMobile = useMediaQuery({maxWidth: 767}); // md 미만이면 모바일
  
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
        
        
        {isMobile ? <MobileOtherServiceSection/> : <DesktopOtherServiceSection/>}
      
      </PageLayout>
      
      {/* 수평 스크롤 이미지 갤러리 */}
      {
        isMobile ?
          <MobileProjectGallery
            title={content.projectGallery.title}
            subtitle={content.projectGallery.mobileDescription}
            images={content.projectGallery.images}
            height={320}
          />
          : <DesktopProjectGallery
            title={content.projectGallery.title}
            subtitle={content.projectGallery.description}
            images={content.projectGallery.images}
            height={480}
          />
      }
    </div>
  );
}