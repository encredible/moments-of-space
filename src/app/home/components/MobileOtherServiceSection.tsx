'use client';
import React from 'react';
import homeContent from '../../home/content.json';
import SectionTitle from '../../components/SectionTitle';
import Image from "next/image";

export default function MobileOtherServiceSection() {
  const {title, description, items} = homeContent.interiorIcons;
  
  return (
    <section className="py-12 md:py-16 lg:py-20 md:hidden">
      <SectionTitle
        title={title}
        description={description}
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={`icon-${index}`}
            className="flex flex-col items-center text-center p-1"
          >
            <div className="relative w-15 h-15 mb-4 flex items-center justify-center text-neutral-700">
              <Image src={item.imageSrc} alt={item.title} fill className="object-contain"/>
            </div>
            <h3 className="text-sm font-korean-button text-neutral-700">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
