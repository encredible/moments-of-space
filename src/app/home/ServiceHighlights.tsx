import Link from 'next/link';
import servicesContent from '../services/servicesContent.json';

const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function ServiceHighlights() {
  return (
    <section className="flex flex-row overflow-x-auto gap-6 md:gap-8 p-4 scrollbar-hide md:overflow-visible">
      {servicesContent.services.map((service) => (
        <Link
          key={service.title}
          href={`/services#${slugify(service.title)}`}
          className="flex-shrink-0 w-80 md:w-96 block px-6 py-6 hover:bg-gray-50 transition-colors shadow text-left"
          style={{ minWidth: '20rem', maxWidth: '24rem' }}
        >
          <img
            src={service.imageSrc}
            alt={service.imageAlt}
            className="w-full h-40 object-cover mb-3"
          />
          <div className="font-plus-jakarta-sans font-semibold text-lg text-neutral-900 mb-2">
            {service.title}
          </div>
          <div className="font-plus-jakarta-sans text-sm text-gray-600">
            {service.shortDescription}
          </div>
        </Link>
      ))}
    </section>
  );
}
