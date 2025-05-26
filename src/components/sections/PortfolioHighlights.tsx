import Link from 'next/link';
import { Home, Building2, Store, Palette } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: "주거 공간 인테리어",
      description: "아파트, 주택, 원룸 등 개인 주거 공간의 맞춤형 인테리어 디자인",
      icon: Home,
      category: "residential"
    },
    {
      id: 2,
      title: "상업 공간 디자인",
      description: "카페, 레스토랑, 사무실 등 브랜드 아이덴티티를 반영한 상업 공간 설계",
      icon: Building2,
      category: "commercial"
    },
    {
      id: 3,
      title: "팝업 스토어 & 이벤트 공간",
      description: "단기 팝업 스토어, 전시회, 이벤트 공간의 창의적인 기획과 연출",
      icon: Store,
      category: "popup"
    },
    {
      id: 4,
      title: "공간 스타일링 & 소품 배치",
      description: "기존 공간의 소품 재배치, 컬러 컨설팅, 조명 계획으로 공간 분위기 개선",
      icon: Palette,
      category: "styling"
    }
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 font-sans">
            전문 서비스
          </h2>
          <p className="text-xl text-gray-600 max-w-[700px] mx-auto font-sans leading-relaxed">
            다양한 공간의 특성을 이해하고, 고객의 니즈에 맞는 최적의 디자인 솔루션을 제공합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                href="/services"
                className="group block"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-amber-200 transition-all duration-300 h-full text-center">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-amber-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  
                  {/* Service Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors font-sans">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview; 