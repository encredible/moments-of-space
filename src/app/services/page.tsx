'use client'; // 나중에 인터랙션 추가 시 필요할 수 있음
import servicesContent from './servicesContent.json' assert { type: 'json' };
import Image from 'next/image';

type Service = {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageSrc: string;
  imageAlt: string;
};

type ServicesContent = {
  title: string;
  description: string;
  services: Service[];
};

const content: ServicesContent = servicesContent;

const ServicesPage = () => {
  return (
    <main className="flex flex-col items-center px-4 sm:px-10 md:px-20 py-10">
      <section className="w-full max-w-5xl mb-16"> {/* 페이지 제목 및 소개 */}
        <div className="pt-5 pb-8">
          <h2 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl text-neutral-900 text-center mb-6">
            {content.title}
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            <p className="text-gray-600 mb-10">{content.description}</p>
          </p>
        </div>
      </section>

      {/* 서비스 카드 섹션 */}
      <section className="w-full max-w-6xl mb-20">
        <div className="flex flex-row overflow-x-auto gap-6 md:gap-8 scrollbar-hide md:overflow-visible">
          {content.services.map((service: Service, idx: number) => (
            <div
              key={service.title + idx}
              className="flex-shrink-0 w-80 md:w-96 flex flex-col bg-white p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 rounded-lg"
              style={{ minWidth: '20rem', maxWidth: '24rem' }}
            >
              <Image src={service.imageSrc} alt={service.imageAlt} width={600} height={400} className="object-cover w-full h-56 md:h-72 mb-4" />
              <h3 className="font-plus-jakarta-sans font-semibold text-xl text-neutral-900 mb-3">{service.title}</h3>
              <p className="font-plus-jakarta-sans text-sm text-gray-600 flex-grow">{service.shortDescription}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 서비스 상세 설명 섹션 */}
      <section className="w-full max-w-5xl space-y-20">
        {content.services.map((service: Service, index: number) => (
          <article key={service.title} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 w-full  overflow-hidden shadow-lg">
              <Image src={service.imageSrc} alt={service.imageAlt} width={600} height={400} className="object-cover w-full h-auto md:h-96" />
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="font-plus-jakarta-sans font-bold text-2xl sm:text-3xl text-neutral-900 mb-4">{service.title}</h3>
              <p className="font-plus-jakarta-sans text-base text-gray-700 leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ServicesPage;