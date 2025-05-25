import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* 임시 섹션들 - 추후 개별 컴포넌트로 분리 예정 */}
      <section className="py-20 bg-bg-warm">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-8">
            전문 서비스
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12">
            다양한 공간 디자인 서비스를 통해 당신의 공간을 특별하게 만들어드립니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '주거 공간 인테리어',
                description: '아파트, 주택, 원룸 등 주거 공간의 완벽한 변화',
                icon: '🏠'
              },
              {
                title: '상업 공간 디자인',
                description: '카페, 레스토랑, 사무실 등 브랜드 가치를 높이는 공간',
                icon: '🏢'
              },
              {
                title: '팝업 스토어',
                description: '단기간 임팩트 있는 브랜드 경험 공간 연출',
                icon: '🎪'
              },
              {
                title: '공간 스타일링',
                description: '기존 공간의 소품 배치와 컬러 컨설팅',
                icon: '✨'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-8">
            최근 프로젝트
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12">
            다양한 공간에서 진행된 프로젝트들을 확인해보세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-primary-100 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center text-text-light">
                    프로젝트 이미지 {project}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-500 transition-colors">
                  프로젝트 제목 {project}
                </h3>
                <p className="text-text-secondary text-sm">
                  프로젝트 설명이 들어갑니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8">
            당신의 공간을 변화시킬 준비가 되셨나요?
          </h2>
          <p className="text-primary-200 max-w-2xl mx-auto mb-8 text-lg">
            무료 상담을 통해 당신의 공간에 대한 아이디어를 나누어보세요.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            무료 상담 신청하기
          </a>
        </div>
      </section>
    </>
  );
}
