'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  // 나중에 상세 페이지 내용 추가 시 필드 확장
}

const projectItems: ProjectItem[] = [
  {
    id: "modern-apartment-makeover",
    title: "Modern Apartment Makeover",
    imageUrl: "/images/project/project-modern-apartment-detail1.jpg",
    category: "Residential",
  },
  {
    id: "cozy-living-room-refresh",
    title: "Cozy Living Room Refresh",
    imageUrl: "/images/project/project-cozy-living-detail2.jpg",
    category: "Residential",
  },
  {
    id: "luxury-villa-design",
    title: "Luxury Villa Design",
    imageUrl: "/images/project/project-luxury-villa-detail1.jpg",
    category: "Residential",
  },
  {
    id: "minimalist-office-space",
    title: "Minimalist Office Space",
    imageUrl: "/images/project/project-modern-apartment-detail3.jpg",
    category: "Commercial",
  },
  {
    id: "bohemian-bedroom-retreat",
    title: "Bohemian Bedroom Retreat",
    imageUrl: "/images/project/project-boho-bedroom.jpg",
    category: "Residential",
  },
  {
    id: "sleek-kitchen-remodel",
    title: "Sleek Kitchen Remodel",
    imageUrl: "/images/project/project-sleek-kitchen.jpg",
    category: "Residential",
  },
];

const ProjectPage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="pt-5 pb-8">
        <h2 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl text-neutral-900 text-center mb-6">
          Our Projects
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the spaces we've transformed. Each project reflects our commitment to creating environments that are both beautiful and functional, tailored to our clients' unique visions.
        </p>
      </div>

      {/* 프로젝트 카드 그리드 - Masonry 효과를 위해 단순 CSS로 시도 */}
      {/* 실제 Masonry 레이아웃은 클라이언트 사이드 JS 또는 전용 라이브러리가 필요할 수 있습니다. */}
      {/* 여기서는 반응형 그리드를 사용하고, 아이템 높이를 다르게 하여 유사한 느낌을 줍니다. */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {projectItems.map((item, index) => (
          <Link key={item.id} href={`/project/${item.id}`} className="block group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 break-inside-avoid">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={500} // 예시 크기, 실제 이미지 비율에 맞게 조정
              height={index % 2 === 0 ? 700 : 500} // 높이를 다르게 하여 masonry 느낌 연출
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <h3 className="font-plus-jakarta-sans font-semibold text-xl text-white mb-1">
                {item.title}
              </h3>
              <p className="font-plus-jakarta-sans text-sm text-gray-200">{item.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage; 