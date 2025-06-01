"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import servicesContent from "../services/content.json";

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
    <section className="flex flex-row overflow-x-auto gap-6 md:gap-8 p-4 scrollbar-hide md:overflow-visible">
      {servicesContent.services.map((service) => {
        const slug = slugify(service.title);
        return (
          <button
            key={service.title}
            onClick={handleClick(slug)}
            className="flex-shrink-0 w-80 md:w-96 block px-6 py-6 hover:bg-gray-50 transition-colors shadow text-left focus:outline-none"
            style={{ minWidth: "20rem", maxWidth: "24rem" }}
            tabIndex={0}
            type="button"
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
          </button>
        );
      })}
    </section>
  );
}

