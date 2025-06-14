import SplitSection, { SplitSectionProps } from '../../components/SplitSection';

// Load the home content data from content.json
import homeContent from '../content.json';
import SectionTitle from "@/app/components/SectionTitle";

export default function ServiceListSplitSection() {
  const serviceList = homeContent.serviceList || [] as SplitSectionProps[];

  return (
    <section id="services-section">
      <SectionTitle title={serviceList.title} description={serviceList.description} />
      {serviceList.items.map((service: SplitSectionProps, index: number) => (
        <SplitSection
          key={`service-section-${index}`}
          imageUrl={service.imageUrl}
          imageAlt={service.imageAlt}
          title={service.title}
          description={service.description}
          imageOnLeft={service.imageOnLeft}
          priority={true}
          imageWidth={600}
          imageHeight={800}
          className=''
          id={`service-${index}`}
          includedTitle={service.includedTitle}
          includedItems={service.includedItems}
          feeTitle={service.feeTitle}
          feeItems={service.feeItems}
        />
      ))}
    </section>
  );
}
