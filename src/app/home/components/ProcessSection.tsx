import React, {useState} from 'react';
import Image from 'next/image';
import homeContent from "@/app/home/content.json";
import SectionTitle from "@/app/components/SectionTitle";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const processSteps = homeContent.process.processSteps;
  
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={homeContent.process.title}
          description={homeContent.process.description}
        />
        
        <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-12">
          {/* 이미지 섹션 - 모바일에서는 상단에 표시 */}
          <div className="relative w-full aspect-video md:w-1/2">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute inset-0 transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={step.imageSrc}
                  alt={step.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{clipPath: "polygon(120px 0, 100% 0, 100% 100%, 0 100%, 0 120px)"}}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          
          {/* 프로세스 번호와 설명 섹션 - 모바일에서는 하단에 표시 */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            {/* 프로세스 번호 (가로 배치) */}
            <div className="flex justify-center space-x-6 md:space-x-12 lg:space-x-16 mb-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`text-3xl md:text-4xl font-extrabold cursor-pointer transition-colors duration-300 ${activeStep === index ? 'text-neutral-900' : 'text-neutral-300'}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {step.number}
                </div>
              ))}
            </div>
            
            {/* 활성화된 단계의 설명만 표시 */}
            <div className="max-w-3xl mx-auto px-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-0 hidden'}`}
                >
                  <p className="text-sm md:text-base pb-2 font-bold">
                    {step.title}
                  </p>
                  <p className="text-sm md:text-base pb-4">
                    {step.description}
                  </p>
                  <p className="text-sm md:text-base font-extrabold">
                    {step.additional}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
