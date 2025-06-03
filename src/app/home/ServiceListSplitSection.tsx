import SplitSection, { SplitSectionProps } from '../components/SplitSection';

// Load the home content data from content.json
import homeContent from './content.json' assert { type: 'json' };

export default function ServiceListSplitSection() {
  const serviceList = homeContent.serviceList || [];

  return (
    <>
      {serviceList.map((service: any, index: number) => (
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
    </>
  );
}
