"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import servicesContent from "../services/content.json" assert { type: 'json' };

const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ServiceHighlights() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const hash = `#${slug}`;
    if (pathname === "/services") {
      // Already on the services page, scroll smoothly
      const el = document.getElementById(slug);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", hash);
      }
    } else {
      // Navigate to /services#slug
      router.push(`/services${hash}`);
    }
  };

  return (
    <section className="py-4 md:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 md:gap-6 px-4 pb-4 max-w-6xl">
        {servicesContent.services.map((service) => {
          const slug = slugify(service.title);
          return (
            <button
              key={service.title}
              onClick={handleClick(slug)}
              className="w-full block px-4 py-4 md:px-5 md:py-5 hover:bg-custom-bg transition-colors shadow text-left focus:outline-none rounded-sm"
              tabIndex={0}
              type="button"
            >
              <div className="relative h-32 md:h-40 overflow-hidden rounded-sm mb-3">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="font-korean text-base md:text-lg text-neutral-900 mb-1 md:mb-2">
                {service.title}
              </div>
              <div className="font-korean text-xs md:text-sm text-gray-600 line-clamp-2">
                {service.shortDescription}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

