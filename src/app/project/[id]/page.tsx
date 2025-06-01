'use client';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectImage {
  src: string;
  alt: string;
}

interface Testimonial {
  quote: string;
  author: string;
}

interface ProjectItemDetail {
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

// 임시 데이터 (실제로는 API 호출 또는 정적 데이터 소스에서 가져옴)
const projectItemsData: Record<string, ProjectItemDetail> = {
  "modern-apartment-makeover": {
    id: "modern-apartment-makeover",
    title: "Modern Apartment Makeover",
    category: "Residential",
    imageUrl: "/images/project/project-modern-apartment-detail1.jpg",
    description: "A complete overhaul of a downtown apartment, focusing on open spaces and natural light. We aimed for a balance of modern aesthetics and comfortable living, incorporating custom furniture and smart home features.",
    client: "Private Client",
    date: "2023-03-15",
    tags: ["Modern", "Residential", "Interior Design", "Smart Home"],
    servicesProvided: ["Full Interior Design", "Custom Furniture Design", "Lighting Design", "Project Management"],
    images: [
      { src: "/images/project/project-modern-apartment-detail1.jpg", alt: "Living room view after makeover" },
      { src: "/images/project/project-modern-apartment-detail2.jpg", alt: "Modern kitchen design" },
      { src: "/images/project/project-modern-apartment-detail3.jpg", alt: "Bedroom with custom wardrobe" },
    ],
    testimonial: {
      quote: "The team transformed our outdated apartment into a stunning, functional space. Their attention to detail was incredible!",
      author: "Alex & Jamie P."
    }
  },
  "cozy-living-room-refresh": {
    id: "cozy-living-room-refresh",
    title: "Cozy Living Room Refresh",
    category: "Residential",
    imageUrl: "/images/project/project-cozy-living-detail2.jpg",
    description: "A quick refresh of a living room, adding warmth and comfort with new textiles, a feature wall, and carefully selected decor items. The goal was to create an inviting atmosphere for relaxation and family time.",
    client: "The Millers",
    date: "2023-05-20",
    tags: ["Cozy", "Residential", "Decor", "Styling"],
    servicesProvided: ["Color Consultation", "Furniture Selection", "Decor Styling"],
    images: [
      { src: "/images/project/project-cozy-living-detail1.jpg", alt: "Refreshed living room with new furniture" },
      { src: "/images/project/project-cozy-living-detail2.jpg", alt: "Close up of cozy textures and decor" },
    ],
    testimonial: {
      quote: "They understood exactly what we wanted and delivered a space that feels so much more like us. We love our new living room!",
      author: "David & Lisa M."
    }
  },
  "luxury-villa-design": {
    id: "luxury-villa-design",
    title: "Luxury Villa Design",
    category: "Residential",
    imageUrl: "/images/project/project-luxury-villa-detail1.jpg",
    description: "End-to-end design for a new luxury villa, featuring expansive ocean views, infinity pool, and high-end finishes throughout. The project involved close collaboration with architects and builders.",
    client: "Confidential",
    date: "2024-01-20",
    tags: ["Luxury", "Residential", "New Build", "Ocean View"],
    servicesProvided: ["Architectural Design Consultation", "Full Interior Design", "Landscape Design Coordination", "Material Selection"],
    images: [
      { src: "/images/project/project-luxury-villa-detail1.jpg", alt: "Villa exterior with infinity pool" },
      { src: "/images/project/project-luxury-villa-detail2.jpg", alt: "Spacious living area with ocean view" },
    ],
    testimonial: {
      quote: "An absolute dream to work with. Their vision and execution were flawless, creating a truly exceptional home.",
      author: "A Satisfied Client"
    }
  },
  "minimalist-office-space": {
    id: "minimalist-office-space",
    title: "Minimalist Office Space",
    category: "Commercial",
    imageUrl: "/images/project/project-modern-apartment-detail1.jpg",
    description: "Design of a new office space for a tech startup, emphasizing collaboration, flexibility, and a clean, minimalist aesthetic. The layout includes open work areas, private meeting pods, and a communal kitchen.",
    client: "Innovatech Ltd.",
    date: "2023-08-10",
    tags: ["Minimalist", "Commercial", "Office Design", "Startup"],
    servicesProvided: ["Space Planning", "Furniture Sourcing", "Branding Integration"],
    images: [
      { src: "/images/project/project-modern-apartment-detail3.jpg", alt: "Open concept office with natural light" },
      { src: "/images/project/project-luxury-villa-detail2.jpg", alt: "Collaborative meeting area" },
    ],
    testimonial: {
      quote: "The new office has significantly boosted our team's productivity and morale. The design is both functional and inspiring.",
      author: "CEO, Innovatech Ltd."
    }
  },
  "bohemian-bedroom-retreat": {
    id: "bohemian-bedroom-retreat",
    title: "Boho Bedroom Retreat",
    category: "Residential",
    imageUrl: "/images/project/project-boho-bedroom.jpg",
    description: "Creating a tranquil and stylish bedroom with bohemian-inspired elements, natural materials, and a calming color palette. The design incorporates vintage finds and handcrafted textiles.",
    client: "Sarah Johnson",
    date: "2023-10-01",
    tags: ["Bohemian", "Residential", "Bedroom Design", "Vintage"],
    servicesProvided: ["Concept Development", "Styling and Decoration", "Sourcing unique pieces"],
    images: [
      { src: "/images/project/project-boho-bedroom-detail1.jpg", alt: "Bohemian bedroom with layered textiles" },
      { src: "/images/project/project-boho-bedroom-detail2.jpg", alt: "Close up of eclectic decor elements" },
    ],
    testimonial: {
      quote: "My bedroom is now my favorite place in the house! It's so peaceful and perfectly reflects my style.",
      author: "Sarah J."
    }
  },
  "sleek-kitchen-remodel": {
    id: "sleek-kitchen-remodel",
    title: "Sleek Kitchen Remodel",
    category: "Residential",
    imageUrl: "/images/project/project-sleek-kitchen.jpg",
    description: "Modernizing an outdated kitchen with high-gloss cabinets, integrated appliances, quartz countertops, and smart storage solutions. The result is a highly functional and visually stunning culinary space.",
    client: "The Chengs",
    date: "2023-11-25",
    tags: ["Modern", "Residential", "Kitchen Remodel", "Contemporary"],
    servicesProvided: ["Kitchen Design", "Appliance Selection", "Cabinetry Design", "Installation Oversight"],
    images: [
      { src: "/images/project/project-sleek-kitchen-detail1.jpg", alt: "Modern kitchen with high-gloss cabinets" },
      { src: "/images/project/project-sleek-kitchen-detail2.jpg", alt: "Kitchen island with integrated appliances" },
    ],
    testimonial: {
      quote: "We are thrilled with our new kitchen. It's not only beautiful but also incredibly practical for our family.",
      author: "Mr. & Mrs. Cheng"
    }
  },
  // ... 다른 프로젝트 아이템 상세 데이터 추가 ...
};

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params }) => {
  const { id } = use(params);
  const item = projectItemsData[id];

  if (!item) {
    notFound(); // 해당 ID의 아이템이 없으면 404 페이지 표시
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-3 text-center">
            {item.title}
          </h1>
          <p className="font-plus-jakarta-sans text-lg text-gray-500 text-center">
            Category: {item.category}
          </p>
        </header>

        <figure className="mb-8 w-full aspect-[16/9] relative overflow-hidden rounded-lg shadow-lg">
          <Image 
            src={item.imageUrl} 
            alt={`Main image for ${item.title}`} 
            fill 
            className="object-cover"
            priority
          />
        </figure>

        <section className="prose prose-lg max-w-none mx-auto mb-10 font-plus-jakarta-sans text-gray-700">
          <p>{item.description}</p>
          {item.details && item.details.length > 0 && (
            <>
              <h2 className="font-semibold text-2xl mt-8 mb-3 text-neutral-800">Project Details</h2>
              <ul className="list-disc pl-5 space-y-1">
                {item.details.map((detail: string, index: number) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </>
          )}
        </section>

        {item.images && item.images.length > 0 && (
          <section className="mb-10">
            <h2 className="font-plus-jakarta-sans font-bold text-2xl sm:text-3xl text-neutral-900 mb-6 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {item.images.map((image: ProjectImage, index: number) => (
                <div key={index} className="aspect-video relative overflow-hidden rounded-lg shadow-md">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="text-center mt-12">
          <Link href="/project" className="inline-block bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-900 transition-colors text-base font-medium">
            Back to Projects
          </Link>
        </div>
      </article>
    </main>
  );
};

export default ProjectDetailPage; 