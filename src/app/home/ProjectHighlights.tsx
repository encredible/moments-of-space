"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProjectItem, projectDetailsById, getProjectItems } from "../project/projectData";

// Interface for the homeContent.json ProjectHighlights section
interface ProjectHighlightsData {
  title: string;
  highlightedProjectIds: string[];
  viewAllButtonText: string;
}

// Load the project highlights data from homeContent.json
const homeContent = require('./content.json');
const projectHighlightsData: ProjectHighlightsData = homeContent.projectHighlights;

export default function ProjectHighlights() {
  const router = useRouter();

  // Use the project IDs from homeContent.json
  const highlightedProjectIds = projectHighlightsData.highlightedProjectIds;

  // Map these IDs to the full ProjectItem objects using the function from the shared module
  const highlightedProjects = getProjectItems(highlightedProjectIds);

  const navigateToProject = (id: string) => {
    router.push(`/project/${id}`);
  };

  return (
    <section className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4 md:mb-8">
          <h2 className="font-korean text-xl md:text-2xl text-neutral-900">
            {projectHighlightsData.title}
          </h2>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {highlightedProjects.map((project) => (
            <div
              key={project.id}
              className="block w-full rounded-sm touch-manipulation"
              onClick={() => navigateToProject(project.id)}
              onKeyDown={(e) => e.key === 'Enter' && navigateToProject(project.id)}
              role="button"
              tabIndex={0}
            >
              <div className="relative overflow-hidden shadow-md rounded-sm group">
                <div className="relative w-full" style={{ paddingTop: '66.67%' }}>
                  {/* Inner container for the image, absolutely positioned to fill the aspect ratio container */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="eager"
                      quality={85}
                    />
                  </div>
                </div>
                {/* 항상 보이는 오버레이로 변경하여 모바일에서도 프로젝트 정보 제공 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3 md:p-4">
                  <div className="w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-medium text-custom-bg bg-black/60 backdrop-blur-sm rounded-full mb-1 md:mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-base md:text-lg lg:text-xl text-white font-korean-button leading-tight">{project.title}</h3>
                      </div>
                      <div className="hidden sm:flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-full w-8 h-8 md:w-9 md:h-9">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5 text-white">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 md:mt-8">
          <button
            onClick={() => router.push('/project')}
            className="font-korean-button text-base text-custom-bg bg-black px-5 py-3 hover:bg-gray-800 transition-colors w-full sm:w-auto max-w-xs rounded-sm"
          >
            {projectHighlightsData.viewAllButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}
