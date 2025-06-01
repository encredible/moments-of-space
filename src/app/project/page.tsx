'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Interface for the detailed project data (as in 1.json, 2.json, etc.)
interface ProjectDetailData {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  // 기타 필요한 필드들
}

// 컴포넌트에서 사용할 프로젝트 아이템 인터페이스
interface ProjectItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

// projectContent.json 구조 인터페이스
interface ProjectPageContent {
  title: string;
  description: string;
}

// projectContent.json은 기존 위치에 있으므로 import로 직접 불러옵니다
import projectContentData from './projectContent.json';

const ProjectPage = () => {
  // projectContent.json은 직접 import해서 사용
  const pageContent = projectContentData as ProjectPageContent;
  const [projectItems, setProjectItems] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 프로젝트 데이터만 동적으로 불러오는 함수
    const fetchData = async () => {
      try {

        // 2. 프로젝트 JSON 파일 불러오기
        const projectDataArray: ProjectDetailData[] = [];
        
        // public/texts/project 폴더에 있는 모든 JSON 파일을 순차적으로 불러옵니다
        for (let i = 1; i <= 100; i++) {
          try {
            const projectResponse = await fetch(`/texts/project/${i}.json`);
            
            // 404 오류가 발생하면(파일이 없으면) 건너뜁니다
            if (!projectResponse.ok) {
              continue;
            }
            
            const projectData = await projectResponse.json();
            projectDataArray.push(projectData);
          } catch (error) {
            // 파일이 없으면 그냥 계속 진행합니다
            continue;
          }
        }

        // 프로젝트 ID 기준으로 정렬
        projectDataArray.sort((a, b) => a.id - b.id);
        
        // 표시용 형식으로 변환
        const items = projectDataArray.map(detail => ({
          id: String(detail.id),
          title: detail.title,
          imageUrl: detail.imageUrl,
          category: detail.category,
        }));
        
        setProjectItems(items);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 로딩 중일 때 표시할 내용
  if (loading) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <p className="text-xl">프로젝트를 불러오는 중입니다...</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="pt-5 pb-8">
        <h2 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl text-neutral-900 text-center mb-10">
          {pageContent.title}
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
          {pageContent.description}
        </p>
      </div>

      {/* 프로젝트 카드 그리드 - Masonry 효과를 위한 레이아웃 */}
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