"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

interface ProjectContent {
  projects: Project[];
}

// Use require for JSON imports in Next.js
const projectContent: ProjectContent = require("../project/projectContent.json");

export default function ProjectHighlights() {
  const router = useRouter();
  // Get first 4 projects to highlight
  const highlightedProjects = projectContent.projects.slice(0, 4);

  const navigateToProject = (id: string) => {
    router.push(`/project/${id}`);
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 px-4">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            Project Highlights
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
