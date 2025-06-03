import SplitSection, { SplitSectionProps } from '../components/SplitSection';

// Load the home content data from content.json
import homeContent from './content.json';

// 서비스 항목의 인터페이스 정의
interface ServiceItem {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  imageOnLeft: boolean;
  includedTitle: string;
  includedItems: string[];
  feeTitle: string;
  feeItems: string[];
  buttonText: string;
  buttonLink: string;
}

export default function ServiceListSplitSection() {
  const serviceList = homeContent.serviceList || [] as ServiceItem[];

  return (
    <>
      {serviceList.map((service: ServiceItem, index: number) => (
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
