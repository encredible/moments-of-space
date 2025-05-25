import { Award, Users, Clock, Heart, Target, Lightbulb, Palette, Home } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '50+', label: '완성 프로젝트', icon: Home },
    { number: '98%', label: '고객 만족도', icon: Heart },
    { number: '5년', label: '경력', icon: Clock },
    { number: '30+', label: '협업 브랜드', icon: Users }
  ];

  const philosophy = [
    {
      icon: Target,
      title: '기능과 미학의 조화',
      description: '아름다움만을 추구하지 않습니다. 실용성과 미적 감각이 완벽하게 균형을 이루는 공간을 만듭니다.'
    },
    {
      icon: Heart,
      title: '클라이언트 중심 디자인',
      description: '각 고객의 라이프스타일과 개성을 깊이 이해하여 진정으로 그들만의 공간을 창조합니다.'
    },
    {
      icon: Lightbulb,
      title: '혁신적 솔루션',
      description: '제한된 공간과 예산 안에서도 창의적이고 혁신적인 해결책을 제시합니다.'
    },
    {
      icon: Palette,
      title: '지속가능한 디자인',
      description: '환경을 생각하는 친환경 소재와 지속가능한 디자인 원칙을 추구합니다.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: '디자인 여정의 시작',
      description: '건국대학교 실내디자인학과 졸업 후 대형 인테리어 회사에서 경력을 쌓기 시작했습니다.'
    },
    {
      year: '2021',
      title: '전문성 확장',
      description: '상업공간 디자인 분야로 영역을 확장하며 다양한 브랜드와 협업 프로젝트를 진행했습니다.'
    },
    {
      year: '2022',
      title: '독립 스튜디오 설립',
      description: 'Moments of Space를 설립하여 더욱 개인화된 서비스와 창의적인 디자인을 제공하기 시작했습니다.'
    },
    {
      year: '2023',
      title: '팝업 스토어 전문화',
      description: '팝업 스토어와 이벤트 공간 디자인 분야에서 전문성을 인정받으며 다수의 성공 사례를 만들었습니다.'
    },
    {
      year: '2024',
      title: '지속적인 성장',
      description: '현재까지 50여 개의 프로젝트를 성공적으로 완료하며 고객들로부터 높은 만족도를 얻고 있습니다.'
    }
  ];

  const awards = [
    '2023 한국공간디자인대상 우수상',
    '2023 서울디자인페스티벌 선정작',
    '2022 인테리어디자인어워드 신인상',
    'SBS 생활의 달인 출연 (2023.08)'
  ];

  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                공간에 대한 열정으로
                <br />
                <span className="text-accent-500">특별함을 만들어갑니다</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                안녕하세요, 공간 디자이너 김재관입니다. 
                각각의 공간이 가진 고유한 이야기를 발견하고, 
                그 안에서 사람들이 진정한 편안함과 영감을 느낄 수 있는 
                공간을 만드는 것이 저의 사명입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  상담 신청하기
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
                >
                  포트폴리오 보기
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-primary-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-300 to-primary-400 flex items-center justify-center text-text-light">
                  디자이너 프로필 이미지
                </div>
              </div>
              {/* 장식적 요소 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-500/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-text-secondary font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 디자인 철학 */}
      <section className="py-20 bg-bg-warm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              디자인 철학
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              공간은 단순한 물리적 환경이 아닙니다. 사람의 감정과 경험이 만들어지는 특별한 장소입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 경력 타임라인 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              디자인 여정
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              끊임없는 학습과 도전을 통해 성장해온 저의 디자인 여정을 소개합니다.
            </p>
          </div>

          <div className="relative">
            {/* 타임라인 라인 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* 타임라인 점 */}
                  <div className="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                    {item.year}
                  </div>
                  
                  <div className="flex-1 bg-bg-warm p-6 rounded-xl">
                    <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 수상 경력 및 미디어 */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">수상 경력</h2>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Award className="h-6 w-6 text-accent-400 flex-shrink-0" />
                    <span className="text-primary-200">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">전문 분야</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  '주거 공간 인테리어',
                  '상업 공간 디자인',
                  '팝업 스토어 기획',
                  '공간 브랜딩',
                  '컬러 컨설팅',
                  '가구 배치 계획',
                  '조명 디자인',
                  '3D 시각화'
                ].map((skill, index) => (
                  <div key={index} className="bg-primary-800 p-3 rounded-lg text-center text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 개인적인 면 */}
      <section className="py-20 bg-bg-warm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              영감의 원천
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              디자인 영감은 일상의 모든 순간에서 찾을 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-4">여행</h3>
              <p className="text-text-secondary">
                세계 각국의 건축과 인테리어를 경험하며 다양한 문화의 공간 철학을 배웁니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-4">예술</h3>
              <p className="text-text-secondary">
                현대 미술과 전통 공예에서 색감과 형태의 조화를 탐구하며 창의적 영감을 얻습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-4">자연</h3>
              <p className="text-text-secondary">
                자연의 색상과 질감, 빛의 변화를 관찰하며 공간에 생명력을 불어넣는 방법을 연구합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            함께 특별한 공간을 만들어보세요
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            당신의 공간에 대한 꿈과 비전을 들려주세요. 
            전문적인 경험과 창의적인 아이디어로 그 꿈을 현실로 만들어드리겠습니다.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            프로젝트 상담하기
          </a>
        </div>
      </section>
    </div>
  );
} 