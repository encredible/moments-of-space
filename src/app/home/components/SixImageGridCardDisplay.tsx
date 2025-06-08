'use client';
import Image from 'next/image';
import homeContent from '../content.json';

interface SixImageGridCardDisplayProps {
  className?: string;
}

export default function SixImageGridCardDisplay({ className = '' }: SixImageGridCardDisplayProps) {
  const { title, items } = homeContent.learnMoreSection.rooms;
  
  return (
    <div className={`mt-16 md:mt-24 ${className}`}>
      <div className="mb-4 md:mb-8">
        <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
        {items.map((item, index) => (
          <div key={`furniture-${index}`}>
            <div className="relative mb-2 h-40 md:h-48 overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
