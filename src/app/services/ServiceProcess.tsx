import React from 'react';

interface ProcessStep {
    id: number;
    title: string;
    description: string;
}

interface ServiceProcessProps {
    steps: ProcessStep[];
    className?: string;
}

export default function ServiceProcess({ steps, className = '' }: ServiceProcessProps) {
    return (
        <section className={`w-full max-w-5xl py-16 ${className}`}>
            <h2 className="font-korean text-2xl sm:text-3xl text-neutral-900 text-center mb-10">
                서비스 진행 프로세스
            </h2>
            
            <div className="relative">
                {/* 프로세스 연결선 - 왼쪽에 배치, 원형 마커와 일치하는 테두리 두께 */}
                <div className="absolute left-10 top-10 bottom-10 w-0.25 bg-black hidden md:block"></div>
                
                <div className="space-y-12 md:space-y-16">
                    {steps.map((step) => (
                        <div key={step.id} className="relative">
                            {/* 왼쪽 마름모꼴 스텝 넘버 - 검은색 테두리, 흰색 바탕, 검은색 글자, 테두리 두께 반감 */}
                            <div className="absolute left-10 w-10 h-10 bg-background border border-black items-center justify-center text-black z-10 hidden md:flex -translate-x-1/2 rotate-45">
                                <span className="-rotate-45">{step.id}</span>
                            </div>
                            
                            {/* 텍스트 영역 - 타임라인 오른쪽에 모두 배치 */}
                            <div className="flex flex-col md:flex-row w-full">
                                {/* 텍스트 영역 - 타임라인과 더 멀게 */}
                                <div className="w-full pl-0 md:pl-32">
                                    <div className="flex flex-col">
                                        <h3 className="font-korean text-xl text-neutral-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
