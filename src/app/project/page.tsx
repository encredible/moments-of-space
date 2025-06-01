'use client';
import Image from 'next/image';
import Link from 'next/link';


// Interface for the detailed project data (as in 1.json, 2.json, etc.)
interface ProjectDetailData {
  id: number; // Numeric ID from individual files
  title: string;
  imageUrl: string;
  category: string;
  // Add other fields if needed by ProjectPage
}

// Interface for the objects we'll use in the component's state/rendering
interface ProjectItem {
  id: string; // String ID as expected by the component
  title: string;
  imageUrl: string;
  category: string;
}

// Interface for the structure of projectContent.json (now just IDs)
interface ProjectIdListData {
  title: string; // Keep title and description for the page
  description: string;
  projects: string[]; // Array of project IDs
}

// Load the list of project IDs and page metadata
const projectPageContent: ProjectIdListData = require('./projectContent.json');
const allProjectIds = projectPageContent.projects;

// Pre-load all individual project details based on available data files
// Now includes all 10 project data files
const projectDetailsById: {
  [key: string]: ProjectDetailData
} = Object.fromEntries(allProjectIds.map(id => [id, require(`./data/${id}.json`)]));

// Map IDs to the full ProjectItem objects
const projectItems: ProjectItem[] = allProjectIds.map(id => {
  const detail = projectDetailsById[id];
  if (!detail) {
    console.warn(`Project data for ID ${id} not found in ProjectPage. Skipping.`);
    return null;
  }
  return {
    id: String(detail.id),
    title: detail.title,
    imageUrl: detail.imageUrl,
    category: detail.category,
  };
}).filter(Boolean) as ProjectItem[];

// Use page title and description from projectContent.json
const pageTitle = projectPageContent.title;
const pageDescription = projectPageContent.description;

const ProjectPage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="pt-5 pb-8">
        <h2 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl text-neutral-900 text-center mb-10">
          {pageTitle}
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
          {pageDescription}
        </p>
      </div>

      {/* 프로젝트 카드 그리드 - Masonry 효과를 위해 단순 CSS로 시도 */}
      {/* 실제 Masonry 레이아웃은 클라이언트 사이드 JS 또는 전용 라이브러리가 필요할 수 있습니다. */}
      {/* 여기서는 반응형 그리드를 사용하고, 아이템 높이를 다르게 하여 유사한 느낌을 줍니다. */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {projectItems.map((item: ProjectItem, idx: number) => (
          <Link key={item.id} href={`/project/${item.id}`} className="block group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 break-inside-avoid">
            <Image src={item.imageUrl} alt={item.title} width={500} height={idx % 2 === 0 ? 700 : 500} className="object-cover h-full transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <h3 className="font-plus-jakarta-sans font-semibold text-xl text-white mb-1">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;