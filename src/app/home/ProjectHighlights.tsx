"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Interface for the detailed project data (as in 1.json, 2.json, etc.)
// Note: The 'id' in these files is a number.
interface ProjectDetailData {
  id: number; // Numeric ID from individual files
  title: string;
  imageUrl: string;
  category: string;
  // Other fields from individual data files can be added here if needed by ProjectHighlights
}

// Interface for the objects we'll use in the component's state/rendering
interface Project {
  id: string; // String ID as expected by the component
  title: string;
  imageUrl: string;
  category: string;
}

// Load the list of project IDs
const allProjectIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

// Pre-load all individual project details
const projectDetailsById: { [key: string]: ProjectDetailData } = {
  "1": require("../project/data/1.json"),
  "2": require("../project/data/2.json"),
  "3": require("../project/data/3.json"),
  "4": require("../project/data/4.json"),
  // Removed 5.json and 6.json as they don't exist
};

export default function ProjectHighlights() {
  const router = useRouter();

  // Get first 4 project IDs to highlight
  const highlightedProjectIds = allProjectIds.slice(0, 4);

  // Map these IDs to the full Project objects using the pre-loaded details
  const highlightedProjects: Project[] = highlightedProjectIds.map(id => {
    const detail = projectDetailsById[id];
    if (!detail) {
      console.warn(`Project data for ID ${id} not found. Skipping this project.`);
      return null; // Will be filtered out later
    }
    return {
      id: String(detail.id), // Convert numeric ID from data file to string
      title: detail.title,
      imageUrl: detail.imageUrl,
      category: detail.category,
    };
  }).filter(Boolean) as Project[]; // Filter out any nulls and assert type

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
