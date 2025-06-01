import Link from 'next/link';
import servicesContent from '../services/servicesContent.json';

const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function ServiceHighlights() {
  return (
    <section className="flex flex-col gap-4 p-4">
      {servicesContent.services.map((service) => (
        <Link
          key={service.title}
          href={`/services#${slugify(service.title)}`}
          className="block px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded transition-colors"
        >
          <div className="font-plus-jakarta-sans font-semibold text-lg text-neutral-900">
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
