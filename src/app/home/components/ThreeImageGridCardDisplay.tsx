"use client";
import Image from "next/image";
import homeContent from "../content.json" assert {type: 'json'};

export default function ThreeImageGridCardDisplay() {
  const {title, items} = homeContent.learnMoreSection.merits;
  
  return (
    <div className="mt-16 md:mt-24">
      <h2 className="mb-4 md:mb-8 text-xl md:text-2xl font-extrabold text-neutral-900">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 md:gap-6 pb-4">
        {items.map((item) => (
          <div key={item.title}>
            <div className="relative h-60 md:h-72 overflow-hidden mb-3">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center text-xl text-neutral-900">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

