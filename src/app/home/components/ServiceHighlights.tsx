"use client";
import {useRouter} from "next/navigation";
import {usePathname} from "next/navigation";
import Image from "next/image";
import servicesContent from "../../services/content.json" assert {type: 'json'};
import FurnitureGallery from "../../components/FurnitureGallery";
import SectionTitle from "../../components/SectionTitle";
import homeContent from "../../home/content.json";

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
                el.scrollIntoView({behavior: "smooth", block: "start"});
                window.history.replaceState(null, "", hash);
            }
        } else {
            // Navigate to /services#slug
            router.push(`/services${hash}`);
        }
    };

    return (
        <section className="py-4 md:py-8 mx-auto">
            <SectionTitle
                title={homeContent.commonText.serviceFeature.title}
                description={homeContent.commonText.serviceFeature.description}
            />
            <div className="mb-4 md:mb-8">
                <h2 className="text-xl font-extrabold md:text-2xl text-neutral-900">
                    {servicesContent.serviceHighlights.pointTitle}
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 md:gap-6 pb-4 w-full">
                {servicesContent.services.map((service) => {
                    const slug = slugify(service.title);
                    return (
                        <button
                            key={service.title}
                            onClick={handleClick(slug)}
                            className="w-full block transition-colors text-left focus:outline-none"
                            tabIndex={0}
                            type="button"
                        >
                            <div className="relative h-60 md:h-72 overflow-hidden mb-3">
                                <Image
                                    src={service.imageSrc}
                                    alt={service.imageAlt}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-center md:text-xl text-neutral-900 mb-1 md:mb-2">
                                {service.title}
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

