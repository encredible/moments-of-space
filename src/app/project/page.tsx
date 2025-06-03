'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectItem, projectPageContent, allProjectIds, getProjectItems } from './projectData';
import PageLayout from '../components/PageLayout';
import ContentHeader from '../components/ContentHeader';

// Use the page title and description from projectContent.json
const pageTitle = projectPageContent.title;
const pageDescription = projectPageContent.description;

// Get all project items
const projectItems = getProjectItems(allProjectIds);

// Page title and description already loaded from projectContent.json above

const ProjectPage = () => {
  return (
    <PageLayout>
      <ContentHeader
        title={pageTitle}
        description={pageDescription}
      />

      {/* 프로젝트 카드 그리드 - Masonry 효과를 위해 단순 CSS로 시도 */}
      {/* 실제 Masonry 레이아웃은 클라이언트 사이드 JS 또는 전용 라이브러리가 필요할 수 있습니다. */}
      {/* 여기서는 반응형 그리드를 사용하고, 아이템 높이를 다르게 하여 유사한 느낌을 줍니다. */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 px-4 md:px-6">
        {projectItems.map((item: ProjectItem, idx: number) => (
          <Link key={item.id} href={`/project/${item.id}`} className="block group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 break-inside-avoid">
            <Image src={item.imageUrl} alt={item.title} width={500} height={idx % 2 === 0 ? 700 : 500} className="object-cover h-full transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-xl text-custom-bg mb-1">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default ProjectPage;