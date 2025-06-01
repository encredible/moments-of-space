// Interface for the detailed project data (as in 1.json, 2.json, etc.)
export interface ProjectDetailData {
  id: number; // Numeric ID from individual files
  title: string;
  imageUrl: string;
  category: string;
  // Add other fields if needed
}

// Interface for the objects we'll use in components' state/rendering
export interface ProjectItem {
  id: string; // String ID as expected by the component
  title: string;
  imageUrl: string;
  category: string;
}

// Interface for the structure of projectContent.json
export interface ProjectIdListData {
  title: string;
  description: string;
  projects: string[];
}

// Load the list of project IDs and page metadata
export const projectPageContent: ProjectIdListData = require('./projectContent.json');
export const allProjectIds = projectPageContent.projects;

// Pre-load all individual project details based on available data files
export const projectDetailsById: { [key: string]: ProjectDetailData } = Object.fromEntries(
  allProjectIds.map(id => [id, require(`./data/${id}.json`)])
);

// Helper function to map IDs to the full ProjectItem objects
export function getProjectItems(ids: string[]): ProjectItem[] {
  return ids.map(id => {
    const detail = projectDetailsById[id];
    if (!detail) {
      console.warn(`Project data for ID ${id} not found. Skipping.`);
      return null;
    }
    return {
      id: String(detail.id),
      title: detail.title,
      imageUrl: detail.imageUrl,
      category: detail.category,
    };
  }).filter(Boolean) as ProjectItem[];
}
