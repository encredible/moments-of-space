"use client";
import Image from "next/image";
import servicesContent from "../../services/content.json" assert {type: 'json'};
export default function ServiceHighlights() {
  
  return (
    <section className="py-4 md:py-8 mx-auto">
      <div className="mb-4 md:mb-8">
        <h2 className="text-xl font-extrabold md:text-2xl text-neutral-900">
          {servicesContent.serviceHighlights.pointTitle}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 md:gap-6 pb-4 w-full">
        {servicesContent.services.map((service) => {
          return (
            <button
              key={service.title}
              className="w-full block transition-colors text-left focus:outline-none"
              tabIndex={0}
              type="button"
            >
              <div className="relative h-60 md:h-72 overflow-hidden mb-3">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-xl text-neutral-900 mb-1 md:mb-2">
                {service.title}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

