// 프로젝트 이미지 인터페이스
export interface ProjectImage {
  src: string;
  alt: string;
}

// 추천사 인터페이스
export interface Testimonial {
  quote: string;
  author: string;
}

// Interface for the objects we'll use in components' state/rendering
export interface ProjectItem {
  id: string; // String ID as expected by the component
  title: string;
  imageUrl: string;
  category: string;
}

// 프로젝트 상세 페이지에서 사용할 인터페이스
export interface ProjectItemDetail {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
  details?: string[];
  images?: ProjectImage[];
  client?: string;
  date?: string;
  tags?: string[];
  servicesProvided?: string[];
  testimonial?: Testimonial;
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
export const projectDetailsById: { [key: string]: ProjectItemDetail } = Object.fromEntries(
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
