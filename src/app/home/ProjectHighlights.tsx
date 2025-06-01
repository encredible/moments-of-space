"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// 홈 콘텐츠 인터페이스
interface HomeContent {
  projectHighlights: {
    title: string;
    projectIds: string[];
  };
  // 기타 필요한 필드들
}

// 프로젝트 상세 데이터 인터페이스
interface ProjectDetailData {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  // 기타 필요한 필드들
}

// 컴포넌트에서 사용할 프로젝트 인터페이스
interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

// homeContent.json 불러오기
import homeContentData from "./homeContent.json";

export default function ProjectHighlights() {
  const router = useRouter();
  const [highlightedProjects, setHighlightedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  // homeContent에서 하이라이트할 프로젝트 ID 목록 가져오기
  const projectHighlightsData = (homeContentData as HomeContent).projectHighlights;
  const highlightedProjectIds = projectHighlightsData.projectIds;

  useEffect(() => {
    // 프로젝트 데이터를 가져오는 함수
    const fetchProjectData = async () => {
      try {
        const projects: Project[] = [];
        
        // 각 프로젝트 ID에 대해 데이터 가져오기
        for (const id of highlightedProjectIds) {
          try {
            const response = await fetch(`/texts/project/${id}.json`);
            
            // 파일이 없으면 건너뛰기
            if (!response.ok) {
              console.warn(`프로젝트 ID ${id}의 데이터를 찾을 수 없습니다.`);
              continue;
            }
            
            const data = await response.json() as ProjectDetailData;
            
            projects.push({
              id: String(data.id),
              title: data.title,
              imageUrl: data.imageUrl,
              category: data.category,
            });
          } catch (error) {
            console.error(`프로젝트 ID ${id}의 데이터를 불러오는 중 오류가 발생했습니다:`, error);
          }
        }
        
        // 정렬된 프로젝트 배열 설정
        setHighlightedProjects(projects);
      } catch (error) {
        console.error('프로젝트 데이터를 불러오는 중 오류가 발생했습니다:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjectData();
  }, [highlightedProjectIds]); // highlightedProjectIds가 변경될 때만 실행

  const navigateToProject = (id: string) => {
    router.push(`/project/${id}`);
  };

  // 로딩 상태일 때 표시할 내용
  if (loading) {
    return (
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p>프로젝트 하이라이트를 불러오는 중...</p>
        </div>
      </section>
    );
  }
  
  // 프로젝트가 비어있으면 표시할 내용
  if (highlightedProjects.length === 0) {
    return (
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            {projectHighlightsData.title}
          </h2>
          <p className="mt-4">표시할 프로젝트가 없습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 px-4">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            {projectHighlightsData.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {highlightedProjects.map((project) => (
            <div
              key={project.id}
              className="block w-full"
              onClick={() => navigateToProject(project.id)}
              onKeyDown={(e) => e.key === 'Enter' && navigateToProject(project.id)}
              role="button"
              tabIndex={0}
            >
              <div className="relative overflow-hidden shadow-lg group">
                <div className="relative w-full" style={{ paddingTop: '100%' }}>
                  {/* Inner container for the image, absolutely positioned to fill the aspect ratio container */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 580px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-black/50 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button
            onClick={() => router.push('/project')}
            className="font-plus-jakarta-sans font-bold text-base text-white bg-black px-5 h-12 hover:bg-gray-800 transition-colors"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
