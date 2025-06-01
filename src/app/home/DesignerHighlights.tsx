'use client';
import Image from 'next/image';
import Link from 'next/link';
import designersContent from '../designers/content.json' assert { type: 'json' };

export default function DesignerHighlights() {
  // 최대 3명의 디자이너만 표시
  const designers = designersContent.designers.slice(0, 3);

  return (
    <section className="w-full py-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {designers.map((designer, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
              <Image
                src={designer.image}
                alt={designer.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-plus-jakarta-sans font-semibold text-xl mb-1">{designer.name}</h3>
            <p className="text-gray-600 mb-3">{designer.role}</p>
            <p className="text-gray-500 text-sm line-clamp-3 mb-4">{designer.bio}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link 
          href="/designers" 
          className="inline-block py-2 px-4 border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition-colors"
        >
          모든 디자이너 보기
        </Link>
      </div>
    </section>
  );
}
