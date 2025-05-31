'use client';
import Image from 'next/image';
import Link from 'next/link';

const ProjectPage = () => {
  // 프로젝트 데이터 (실제로는 API나 CMS에서 가져올 수 있음)
  const projects = [
    {
      id: "modern-apartment-makeover",
      title: "Modern Apartment Makeover",
      imageUrl: "/images/project/project-modern-apartment.jpg",
      category: "Residential",
      description: "A complete transformation of a downtown apartment with modern aesthetics and smart home integration."
    },
    {
      id: "cozy-living-room-refresh",
      title: "Cozy Living Room Refresh",
      imageUrl: "/images/project/project-cozy-living.jpg", 
      category: "Residential",
      description: "Adding warmth and comfort to a family living space with new textiles and thoughtful decor."
    },
    {
      id: "luxury-villa-design",
      title: "Luxury Villa Design",
      imageUrl: "/images/project/project-luxury-villa.jpg",
      category: "Residential", 
      description: "End-to-end design for a new luxury villa with ocean views and high-end finishes."
    },
    {
      id: "minimalist-office-space",
      title: "Minimalist Office Space", 
      imageUrl: "/images/project/project-office-space.jpg",
      category: "Commercial",
      description: "A clean, collaborative workspace designed for productivity and employee wellbeing."
    },
    {
      id: "bohemian-bedroom-retreat",
      title: "Bohemian Bedroom Retreat",
      imageUrl: "/images/project/project-boho-bedroom.jpg",
      category: "Residential",
      description: "Creating a tranquil bedroom sanctuary with bohemian elements and natural materials."
    },
    {
      id: "sleek-kitchen-remodel", 
      title: "Sleek Kitchen Remodel",
      imageUrl: "/images/project/project-sleek-kitchen.jpg",
      category: "Residential",
      description: "Modernizing a kitchen with high-gloss cabinets, integrated appliances and smart storage."
    }
  ];

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-3">
            Our Projects
          </h1>
          <p className="font-plus-jakarta-sans text-lg text-gray-500 max-w-3xl mx-auto">
            Discover the spaces we&apos;ve transformed. Each project reflects our commitment to creating environments that are both beautiful and functional, tailored to our clients&apos; unique visions.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="group cursor-pointer">
              <Link href={`/project/${project.id}`} className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="font-plus-jakarta-sans font-semibold text-xl text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h2>
                    <p className="font-plus-jakarta-sans text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-16 text-center">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900 mb-4">
            Have a project in mind?
          </h2>
          <p className="font-plus-jakarta-sans text-lg text-gray-600 mb-8">
            Let&apos;s discuss how we can bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-neutral-700 transition-colors"
          >
            Start Your Project
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ProjectPage; 