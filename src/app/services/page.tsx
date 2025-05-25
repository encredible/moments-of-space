import { Home, Building2, Store, Palette, Clock, Users, Award, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'residential',
      icon: Home,
      title: '주거 공간 인테리어',
      description: '아파트, 주택, 원룸 등 주거 공간의 완벽한 변화',
      features: [
        '아파트/주택 전체 리모델링',
        '부분 인테리어 (거실, 침실, 주방 등)',
        '원룸/스튜디오 공간 최적화',
        '가구 배치 및 동선 계획'
      ],
      duration: '4-8주',
      price: '300만원부터'
    },
    {
      id: 'commercial',
      icon: Building2,
      title: '상업 공간 디자인',
      description: '카페, 레스토랑, 사무실 등 브랜드 가치를 높이는 공간',
      features: [
        '카페/레스토랑 인테리어',
        '사무실 공간 설계',
        '리테일 매장 디자인',
        '브랜드 아이덴티티 반영 공간 연출'
      ],
      duration: '6-12주',
      price: '500만원부터'
    },
    {
      id: 'popup',
      icon: Store,
      title: '팝업 스토어 & 이벤트 공간',
      description: '단기간 임팩트 있는 브랜드 경험 공간 연출',
      features: [
        '단기 팝업 스토어 디자인',
        '전시회 및 이벤트 공간 기획',
        '임시 설치물 디자인',
        '브랜드 경험 공간 연출'
      ],
      duration: '2-4주',
      price: '200만원부터'
    },
    {
      id: 'styling',
      icon: Palette,
      title: '공간 스타일링',
      description: '기존 공간의 소품 배치와 컬러 컨설팅',
      features: [
        '기존 공간 소품 재배치',
        '컬러 컨설팅',
        '조명 계획',
        '식물 및 아트워크 배치'
      ],
      duration: '1-2주',
      price: '100만원부터'
    }
  ];

  const process = [
    {
      step: 1,
      title: '상담 및 현장 조사',
      description: '고객의 요구사항을 파악하고 현장을 정밀 측정합니다.',
      icon: Users
    },
    {
      step: 2,
      title: '컨셉 기획 및 디자인 제안',
      description: '공간의 특성과 고객의 라이프스타일을 반영한 디자인을 제안합니다.',
      icon: Palette
    },
    {
      step: 3,
      title: '3D 모델링 및 시각화',
      description: '실제와 같은 3D 렌더링으로 완성된 공간을 미리 확인할 수 있습니다.',
      icon: Award
    },
    {
      step: 4,
      title: '시공 관리 및 감리',
      description: '전문 시공업체와 협력하여 디자인이 완벽하게 구현되도록 관리합니다.',
      icon: CheckCircle
    },
    {
      step: 5,
      title: '스타일링 및 최종 완성',
      description: '소품 배치와 마무리 스타일링으로 공간을 완성합니다.',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            전문적인 공간 디자인 서비스
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            당신의 공간, 당신의 스타일, 우리의 전문성이 만나 특별한 공간을 만들어냅니다
          </p>
        </div>
      </section>

      {/* 서비스 카드 그리드 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-bg-warm p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-primary-200">
                    <div>
                      <p className="text-sm text-text-light">예상 기간</p>
                      <p className="font-semibold text-text-primary">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-light">시작 가격</p>
                      <p className="font-semibold text-accent-600">{service.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 서비스 프로세스 */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
              디자인 프로세스
            </h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              체계적이고 전문적인 5단계 프로세스로 완벽한 공간을 만들어갑니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-primary-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-200 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-bg-warm">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            프로젝트를 시작할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            무료 상담을 통해 당신의 공간에 대한 아이디어를 나누어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              무료 상담 신청하기
            </a>
            <a
              href="/inclusions"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              패키지 자세히 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 