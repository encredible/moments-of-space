import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectDetailsById, ProjectItemDetail, ProjectImage, Testimonial } from '../projectData';
import PageLayout from '../../components/PageLayout';

interface ProjectDetailPageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = params;
  
  // 프로젝트 데이터 가져오기
  const project = projectDetailsById[id];
  
  // 프로젝트가 없으면 404 페이지로 이동
  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <Link href="/project" className="text-blue-600 hover:underline text-sm mb-6 block">← Back to Projects</Link>
      <h1 className="text-4xl mb-2">{project.title}</h1>
      <div className="text-gray-500 text-sm mb-4">{project.category}{project.date ? ` · ${project.date}` : ''}</div>
      <div className="mb-6">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-auto rounded"
          priority
        />
      </div>
      <p className="mb-6 text-lg text-gray-800">{project.description}</p>
      {project.details && project.details.length > 0 && (
        <ul className="mb-6 list-disc list-inside text-gray-700">
          {project.details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {project.tags && project.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-xs px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
      )}
      {project.images && project.images.length > 0 && (
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((img, idx) => (
            <Image
              key={img.src + idx}
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-auto rounded"
            />
          ))}
        </div>
      )}
      {project.servicesProvided && project.servicesProvided.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl mb-2">Services Provided</h2>
          <ul className="list-disc list-inside ml-4">
            {project.servicesProvided.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      )}
      {project.client && (
        <div className="mb-2 text-sm text-gray-500">Client: {project.client}</div>
      )}
      {project.testimonial && (
        <div className="bg-gray-100 border-l-4 border-blue-400 p-4 mt-8">
          <blockquote className="italic text-gray-700">“{project.testimonial.quote}”</blockquote>
          <div className="mt-2 text-sm text-gray-600">— {project.testimonial.author}</div>
        </div>
      )}
    </PageLayout>
  );
}