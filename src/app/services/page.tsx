'use client'; // 나중에 인터랙션 추가 시 필요할 수 있음
import servicesContent from './servicesContent.json' assert {type: 'json'};
import Image from 'next/image';
import SplitSection from '@/components/SplitSection';

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

            {/* 서비스 상세 설명 섹션 */}
            {content.services.map((service: Service, index: number) => {
                const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                    <SplitSection
                        imageUrl={service.imageSrc}
                        imageAlt={service.imageAlt}
                        title={service.title}
                        description={service.longDescription}
                        imageOnLeft={index % 2 === 0}
                        imageHeight={400}
                        shadowStyle="shadow-lg"
                    />
                );
            })}
        </main>
    );
};

export default ServicesPage;