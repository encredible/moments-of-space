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
import projectContent from './content.json' assert { type: 'json' };
export const projectPageContent: ProjectIdListData = projectContent;
export const allProjectIds = projectPageContent.projects;

// 필요한 프로젝트 데이터를 직접 import
import project1 from './data/1.json' assert { type: 'json' };
import project2 from './data/2.json' assert { type: 'json' };
import project3 from './data/3.json' assert { type: 'json' };
import project4 from './data/4.json' assert { type: 'json' };
import project5 from './data/5.json' assert { type: 'json' };
import project6 from './data/6.json' assert { type: 'json' };
import project7 from './data/7.json' assert { type: 'json' };
import project8 from './data/8.json' assert { type: 'json' };
import project9 from './data/9.json' assert { type: 'json' };
import project10 from './data/10.json' assert { type: 'json' };

// Pre-load all individual project details based on available data files
export const projectDetailsById: { [key: string]: ProjectItemDetail } = {
  '1': project1,
  '2': project2,
  '3': project3,
  '4': project4,
  '5': project5,
  '6': project6,
  '7': project7,
  '8': project8,
  '9': project9,
  '10': project10
};

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
