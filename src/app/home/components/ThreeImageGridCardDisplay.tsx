"use client";
import Image from "next/image";
import homeContent from "../content.json" assert {type: 'json'};

export default function ThreeImageGridCardDisplay() {
  const { title, items } = homeContent.learnMoreSection.merits;
  
  return (
    <div className="py-4 md:py-8 mx-auto">
      <h2 className="mb-4 md:mb-8 text-xl font-extrabold md:text-2xl text-neutral-900">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 md:gap-6 pb-4 w-full">
        {items.map((item) => {
          return (
            <div
              key={item.title}
              className="w-full block transition-colors text-left"
            >
              <div className="relative h-60 md:h-72 overflow-hidden mb-3">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-xl text-neutral-900 mb-1 md:mb-2">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

