import { Check, X, Star, ArrowRight, Package, Clock, Users, Award } from 'lucide-react';

export default function InclusionsPage() {
  const packages = [
    {
      name: '스타일링 패키지',
      price: '100만원부터',
      duration: '1-2주',
      description: '기존 공간의 소품 배치와 컬러 개선으로 새로운 분위기 연출',
      popular: false,
      features: [
        '현장 방문 및 상담 (1회)',
        '공간 분석 및 컨셉 제안',
        '컬러 팔레트 제안',
        '소품 및 가구 재배치 계획',
        '조명 개선 제안',
        '식물 배치 가이드',
        '스타일링 실행 (1일)',
        '애프터케어 (1개월)'
      ],
      notIncluded: [
        '새로운 가구 구매',
        '시공 작업',
        '전기 공사',
        '도배/페인팅'
      ]
    },
    {
      name: '인테리어 패키지',
      price: '300만원부터',
      duration: '4-8주',
      description: '주거 공간의 완전한 변화를 위한 종합 인테리어 서비스',
      popular: true,
      features: [
        '현장 방문 및 상담 (2회)',
        '정밀 측정 및 도면 작성',
        '3D 모델링 및 렌더링',
        '컨셉 디자인 및 제안서',
        '가구 및 소재 선정',
        '시공업체 선정 및 관리',
        '공사 진행 감리',
        '최종 스타일링',
        '애프터케어 (3개월)'
      ],
      notIncluded: [
        '시공비 (별도)',
        '가구 구매비 (별도)',
        '전기/설비 공사비',
        '허가 관련 비용'
      ]
    },
    {
      name: '상업공간 패키지',
      price: '500만원부터',
      duration: '6-12주',
      description: '브랜드 가치를 높이는 전문적인 상업 공간 디자인',
      popular: false,
      features: [
        '브랜드 분석 및 컨셉 개발',
        '현장 조사 및 법규 검토',
        '공간 계획 및 동선 설계',
        '3D 시각화 (다각도)',
        '시공 도면 작성',
        '브랜드 아이덴티티 반영',
        '시공 감리 및 품질 관리',
        '오픈 준비 지원',
        '애프터케어 (6개월)'
      ],
      notIncluded: [
        '인허가 비용',
        '시공비 (별도)',
        '설비 공사비',
        '사인물 제작비'
      ]
    },
    {
      name: '팝업 스토어 패키지',
      price: '200만원부터',
      duration: '2-4주',
      description: '단기간 임팩트 있는 브랜드 경험 공간 연출',
      popular: false,
      features: [
        '브랜드 컨셉 분석',
        '공간 기획 및 스토리텔링',
        '임시 설치물 디자인',
        '포토존 및 체험 공간 설계',
        '설치 및 해체 계획',
        '소품 및 디스플레이 제안',
        '현장 설치 감독',
        '운영 가이드 제공'
      ],
      notIncluded: [
        '임대료',
        '설치물 제작비 (별도)',
        '운영 인력',
        '마케팅 비용'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Package,
      title: '가구 큐레이션',
      description: '예산과 스타일에 맞는 가구 선정 및 구매 대행',
      price: '별도 협의'
    },
    {
      icon: Clock,
      title: '긴급 스타일링',
      description: '이사, 촬영 등 긴급한 스타일링이 필요한 경우',
      price: '50% 추가'
    },
    {
      icon: Users,
      title: '그룹 컨설팅',
      description: '여러 공간을 동시에 진행하는 경우 할인 혜택',
      price: '10-20% 할인'
    },
    {
      icon: Award,
      title: '프리미엄 서비스',
      description: '24시간 응답, 전담 매니저, 무제한 수정',
      price: '30% 추가'
    }
  ];

  const faq = [
    {
      question: '디자인비에 시공비가 포함되나요?',
      answer: '디자인비는 기획, 설계, 감리 등의 서비스 비용이며, 실제 시공비는 별도입니다. 정확한 시공비는 현장 조사 후 견적을 제공해드립니다.'
    },
    {
      question: '프로젝트 진행 중 변경이 가능한가요?',
      answer: '디자인 확정 전까지는 수정이 가능합니다. 시공 시작 후 변경 시에는 추가 비용이 발생할 수 있습니다.'
    },
    {
      question: '애프터케어는 어떤 서비스인가요?',
      answer: '프로젝트 완료 후 일정 기간 동안 소품 재배치, 관리 방법 안내, 추가 문의 응답 등의 서비스를 제공합니다.'
    },
    {
      question: '서울/경기 외 지역도 가능한가요?',
      answer: '기본적으로 서울/경기 지역을 중심으로 서비스하며, 다른 지역의 경우 교통비 등 추가 비용이 발생할 수 있습니다.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            서비스 패키지 & 포함사항
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            프로젝트 규모와 예산에 맞는 다양한 패키지를 제공합니다. 
            투명한 가격 정책으로 예상치 못한 비용 부담을 줄여드립니다.
          </p>
        </div>
      </section>

      {/* 패키지 그리드 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-bg-warm rounded-2xl p-8 ${
                  pkg.popular ? 'ring-2 ring-accent-500 shadow-xl' : 'hover:shadow-lg'
                } transition-shadow duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      인기 패키지
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-accent-600">{pkg.price}</div>
                    <div className="text-sm text-text-light">예상 기간: {pkg.duration}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">포함 사항</h4>
                    <div className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">별도 비용</h4>
                    <div className="space-y-2">
                      {pkg.notIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary-200">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    상담 신청하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 서비스 */}
      <section className="py-20 bg-bg-warm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              추가 서비스
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              기본 패키지 외에 필요에 따라 선택할 수 있는 추가 서비스입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3">
                    {service.description}
                  </p>
                  <div className="text-accent-600 font-semibold text-sm">
                    {service.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 프로젝트 진행 과정 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              프로젝트 진행 과정
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              체계적이고 투명한 프로세스로 프로젝트를 진행합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: '상담 & 계약',
                description: '무료 상담을 통해 요구사항을 파악하고 적합한 패키지를 제안합니다.',
                color: 'bg-blue-500'
              },
              {
                step: '02',
                title: '현장 조사',
                description: '정밀 측정과 현장 분석을 통해 정확한 디자인 계획을 수립합니다.',
                color: 'bg-green-500'
              },
              {
                step: '03',
                title: '디자인 개발',
                description: '컨셉 개발부터 3D 시각화까지 완성된 디자인을 제안합니다.',
                color: 'bg-purple-500'
              },
              {
                step: '04',
                title: '시공 & 완성',
                description: '전문 시공팀과 협력하여 디자인을 완벽하게 구현합니다.',
                color: 'bg-accent-500'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
                  {process.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              프로젝트 진행 전 궁금한 사항들을 확인해보세요.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-primary-800 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold mb-3 text-accent-400">
                  Q. {item.question}
                </h3>
                <p className="text-primary-200 leading-relaxed">
                  A. {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-bg-warm">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            어떤 패키지가 적합한지 궁금하신가요?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            무료 상담을 통해 프로젝트에 가장 적합한 패키지를 추천해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              무료 상담 신청하기
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              서비스 자세히 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 