'use client';
import Image from 'next/image';
import Link from 'next/link';
import designersContent from '../designers/content.json' assert { type: 'json' };
import homeContent from './content.json' assert { type: 'json' };

export default function DesignerHighlights() {
  // 최대 3명의 디자이너만 표시
  const designers = designersContent.designers.slice(0, 3);

  return (
    <section className="w-full py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {designers.map((designer, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-3 md:mb-4 shadow-md">
                <Image
                  src={designer.image}
                  alt={designer.name}
                  fill
                  sizes="(min-width: 768px) 160px, 144px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="eager"
                />
              </div>
              <h3 className="text-lg md:text-xl mb-1">{designer.name}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-2">{designer.role}</p>
              <p className="text-gray-500 text-xs md:text-sm line-clamp-2 md:line-clamp-3 mb-3 md:mb-4 max-w-xs">{designer.bio}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 md:mt-8">
          <Link 
            href="/designers" 
            className="inline-block py-2 px-5 font-korean-button text-custom-bg bg-black hover:bg-gray-800 transition-colors h-10 md:h-12 w-full sm:w-auto max-w-xs"
          >
            {homeContent.designerHighlights.viewAllButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
