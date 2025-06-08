'use client';
import Image from 'next/image';
import homeContent from '../content.json';

// 이미지 항목 컴포넌트
interface FurnitureItemProps {
  src: string;
  alt: string;
}

function FurnitureItem({ src, alt }: FurnitureItemProps) {
  return (
    <div className="relative mb-2 h-40 md:h-48 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

interface FurnitureGalleryProps {
  className?: string;
}

export default function FurnitureGallery({ className = '' }: FurnitureGalleryProps) {
  const { title, items } = homeContent.furnitureGallery;
  
  return (
    <div className={`mt-16 md:mt-24 ${className}`}>
      <div className="mb-4 md:mb-8">
        <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900">
          {title}
        </h2>
      </div>
      
      {/* 가구 이미지 갤러리 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
        {items.map((item, index) => (
          <div key={`furniture-${index}`}>
            <FurnitureItem
              src={item.src}
              alt={item.alt}
            />
            <div className="text-center">{item.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
