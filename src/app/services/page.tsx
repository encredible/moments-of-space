'use client'; // 나중에 인터랙션 추가 시 필요할 수 있음
import servicesContent from './servicesContent.json' assert {type: 'json'};
import SplitSection from '../components/SplitSection';
import ServiceProcess from '../components/ServiceProcess';

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
                    <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                        {content.description}
                    </p>
                </div>
            </section>

            {/* 서비스 상세 설명 섹션 */}
            {content.services.map((service: Service, index: number) => {
                const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                    <SplitSection
                        key={service.title}
                        id={slug}
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
            
            {/* 서비스 프로세스 섹션 */}
            <ServiceProcess
                className="mt-20"
                steps={[
                    {
                        id: 1,
                        title: '고객 요구사항 파악',
                        description: '고객님의 라이프스타일, 선호하는 디자인 스타일, 예산 및 일정 등 상세한 요구사항을 파악하여 맞춤형 인테리어 계획을 수립합니다.'
                    },
                    {
                        id: 2,
                        title: '요구사항에 맞는 콜라주 전달',
                        description: '고객님의 요구사항을 바탕으로 다양한 디자인 옵션과 스타일 콜라주를 제작하여 공간의 잠재력을 시각적으로 보여드립니다.'
                    },
                    {
                        id: 3,
                        title: '고객 피드백 반영',
                        description: '제안된 디자인에 대한 고객님의 피드백을 수렴하고 세부 사항을 조정하여 최적의 디자인 방향을 확정합니다.'
                    },
                    {
                        id: 4,
                        title: '가구 구매 정보 전달',
                        description: '확정된 디자인에 맞는 가구 및 소품의 구매처, 가격, 사양 등 상세 정보를 제공하여 효율적인 구매를 도와드립니다.'
                    },
                    {
                        id: 5,
                        title: '가구 구매 및 배치',
                        description: '선택한 가구와 소품의 구매를 지원하고, 공간에 최적화된 배치를 통해 아름답고 기능적인 인테리어를 완성합니다.'
                    }
                ]}
            />
        </main>
    );
};

export default ServicesPage;