import SplitSection, { SplitSectionProps } from '../../components/SplitSection';

// Load the home content data from content.json
import homeContent from '../content.json';
import SectionTitle from "@/app/components/SectionTitle";

export default function ServiceListSplitSection() {
  const serviceList = homeContent.serviceList || [] as SplitSectionProps[];

  return (
    <section id="services-section">
      <SectionTitle title="HOME STYLING SERVICE" description="인테리어 공사 없이도 당신의 공간은 변화할 수 있습니다." />
      {serviceList.map((service: SplitSectionProps, index: number) => (
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
          buttonText={service.buttonText}
          buttonLink={service.buttonLink}
        />
      ))}
    </section>
  );
}
