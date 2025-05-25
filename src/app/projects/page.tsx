'use client';

import { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'residential', label: '주거 공간' },
    { id: 'commercial', label: '상업 공간' },
    { id: 'popup', label: '팝업 & 이벤트' },
    { id: 'styling', label: '스타일링' }
  ];

  const projects = [
    {
      id: 1,
      title: '모던 아파트 리모델링',
      category: 'residential',
      location: '서울 강남구',
      date: '2024.03',
      duration: '6주',
      size: '32평',
      description: '젊은 부부를 위한 모던하고 기능적인 공간 디자인. 오픈 플랜과 맞춤 수납으로 공간 활용도를 극대화했습니다.',
      tags: ['모던', '오픈플랜', '맞춤수납'],
      images: [
        '/images/project1-1.jpg',
        '/images/project1-2.jpg',
        '/images/project1-3.jpg'
      ]
    },
    {
      id: 2,
      title: '브런치 카페 인테리어',
      category: 'commercial',
      location: '서울 홍대',
      date: '2024.02',
      duration: '8주',
      size: '25평',
      description: '자연스럽고 따뜻한 분위기의 브런치 카페. 원목과 그린 컬러를 활용한 친환경적 디자인이 특징입니다.',
      tags: ['내추럴', '친환경', '브런치카페'],
      images: [
        '/images/project2-1.jpg',
        '/images/project2-2.jpg',
        '/images/project2-3.jpg'
      ]
    },
    {
      id: 3,
      title: '패션 브랜드 팝업 스토어',
      category: 'popup',
      location: '서울 성수동',
      date: '2024.01',
      duration: '3주',
      size: '15평',
      description: '신진 패션 브랜드의 첫 팝업 스토어. 브랜드 아이덴티티를 강조한 미니멀하고 세련된 공간 연출.',
      tags: ['미니멀', '브랜딩', '패션'],
      images: [
        '/images/project3-1.jpg',
        '/images/project3-2.jpg',
        '/images/project3-3.jpg'
      ]
    },
    {
      id: 4,
      title: '원룸 공간 최적화',
      category: 'styling',
      location: '서울 마포구',
      date: '2023.12',
      duration: '1주',
      size: '12평',
      description: '좁은 원룸을 위한 스마트한 공간 활용. 다기능 가구와 수직 수납으로 공간감을 확장했습니다.',
      tags: ['원룸', '공간최적화', '다기능가구'],
      images: [
        '/images/project4-1.jpg',
        '/images/project4-2.jpg',
        '/images/project4-3.jpg'
      ]
    },
    {
      id: 5,
      title: '펜션 공용 공간 디자인',
      category: 'commercial',
      location: '경기 가평',
      date: '2023.11',
      duration: '10주',
      size: '50평',
      description: '자연과 조화를 이루는 펜션 공용 공간. 대형 창을 통한 자연 채광과 우드 톤 인테리어가 포인트.',
      tags: ['펜션', '자연친화', '우드톤'],
      images: [
        '/images/project5-1.jpg',
        '/images/project5-2.jpg',
        '/images/project5-3.jpg'
      ]
    },
    {
      id: 6,
      title: '신혼집 인테리어',
      category: 'residential',
      location: '서울 송파구',
      date: '2023.10',
      duration: '7주',
      size: '28평',
      description: '신혼부부의 첫 집을 위한 로맨틱하고 실용적인 디자인. 파스텔 톤과 커스텀 가구로 개성을 표현.',
      tags: ['신혼집', '로맨틱', '파스텔'],
      images: [
        '/images/project6-1.jpg',
        '/images/project6-2.jpg',
        '/images/project6-3.jpg'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryLabel = (category: string) => {
    const filter = filters.find(f => f.id === category);
    return filter ? filter.label : category;
  };

  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            프로젝트 포트폴리오
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            다양한 공간에서 진행된 프로젝트들을 통해 저희의 디자인 철학과 전문성을 확인해보세요.
          </p>
        </div>
      </section>

      {/* 필터 섹션 */}
      <section className="py-8 bg-white border-b border-primary-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-text-secondary" />
              <span className="text-text-secondary font-medium">카테고리:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-accent-500 text-white'
                      : 'bg-primary-100 text-text-secondary hover:bg-primary-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 그리드 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-bg-warm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  {/* 프로젝트 이미지 */}
                  <div className="aspect-[4/3] bg-primary-200 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary-300 to-primary-400 flex items-center justify-center text-text-light">
                      프로젝트 이미지 {project.id}
                    </div>
                  </div>

                  {/* 프로젝트 정보 */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                        {getCategoryLabel(project.category)}
                      </span>
                      <span className="text-text-light text-sm">{project.date}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text-primary mb-3 group-hover:text-accent-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* 프로젝트 세부 정보 */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-text-light">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-text-light">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{project.size}</span>
                        </div>
                      </div>
                    </div>

                    {/* 태그 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-text-secondary text-xs rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* 더보기 버튼 */}
                    <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white font-semibold rounded-lg transition-all duration-300 group">
                      자세히 보기
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 결과가 없을 때 */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                해당 카테고리의 프로젝트가 없습니다
              </h3>
              <p className="text-text-secondary">
                다른 카테고리를 선택해보세요.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
              프로젝트 성과
            </h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              지금까지 완성한 프로젝트들의 성과를 숫자로 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: '완성 프로젝트', description: '다양한 규모의 프로젝트 경험' },
              { number: '98%', label: '고객 만족도', description: '높은 품질의 서비스 제공' },
              { number: '30+', label: '협업 브랜드', description: '다양한 브랜드와의 성공적 협업' },
              { number: '5년', label: '전문 경력', description: '축적된 노하우와 전문성' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent-400 mb-2">
                  {stat.number}
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {stat.label}
                </h3>
                <p className="text-primary-200 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 프로세스 */}
      <section className="py-20 bg-bg-warm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              프로젝트 진행 과정
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              체계적이고 전문적인 프로세스로 완벽한 결과물을 만들어냅니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: '상담 & 기획',
                description: '클라이언트의 요구사항과 공간의 특성을 파악하여 최적의 컨셉을 기획합니다.',
                icon: '💭'
              },
              {
                step: '02',
                title: '디자인 개발',
                description: '3D 모델링과 렌더링을 통해 완성된 공간의 모습을 미리 확인할 수 있습니다.',
                icon: '🎨'
              },
              {
                step: '03',
                title: '시공 관리',
                description: '전문 시공팀과 협력하여 디자인이 완벽하게 구현되도록 관리합니다.',
                icon: '🔨'
              },
              {
                step: '04',
                title: '완성 & 케어',
                description: '최종 스타일링과 함께 지속적인 애프터케어 서비스를 제공합니다.',
                icon: '✨'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">{process.icon}</span>
                </div>
                <div className="text-accent-600 font-bold text-lg mb-2">{process.step}</div>
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

      {/* CTA 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            당신의 프로젝트도 시작해보세요
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            포트폴리오에서 확인한 전문성으로 당신만의 특별한 공간을 만들어드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              프로젝트 상담하기
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              서비스 알아보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 