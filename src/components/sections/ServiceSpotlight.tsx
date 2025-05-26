import Link from 'next/link';

const ServiceSpotlight = () => {
  return (
    <section className="py-12 bg-white font-sans">
      <div className="max-w-[960px] mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 font-sans">
          Service Spotlight
        </h2>
        
        <div className="space-y-10">
          {/* Service Info */}
          <div className="max-w-[720px]">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight font-sans">
              Luxury Bathroom Renovation
            </h3>
            
            <p className="text-base text-gray-900 leading-relaxed font-sans">
              Transform your bathroom into a spa-like retreat with our luxury renovation service. We focus on high-end materials, custom fixtures, and innovative design to create a space that is both beautiful and functional.
            </p>
          </div>
          
          {/* Service Image */}
          <div className="space-y-6">
            <div className="w-full h-[522px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-xl overflow-hidden">
              {/* Placeholder for service image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500"></div>
            </div>
            
            {/* Service Details */}
            <div className="space-y-2">
              <h4 className="text-base font-medium text-gray-900 font-sans">
                Service Details
              </h4>
              <p className="text-sm text-gray-600 font-sans">
                Scope: Full Renovation | Style: Luxury | Duration: 4-6 weeks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-amber-600 font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-[1000px] mx-auto">
          <h2 className="text-5xl font-bold text-white mb-8 font-sans">
            당신의 공간을 변화시킬 준비가 되셨나요?
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 max-w-[700px] mx-auto leading-relaxed font-sans">
            꿈꿔왔던 공간을 현실로 만들어보세요. 
            전문적인 상담부터 완성까지, 함께 만들어가겠습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-amber-600 font-bold text-xl px-12 py-5 rounded-xl transition-all duration-300 font-sans shadow-lg hover:shadow-xl"
            >
              무료 상담 신청하기
            </Link>
            
            <Link
              href="/projects"
              className="border-2 border-white hover:bg-white hover:text-amber-600 text-white font-semibold text-xl px-12 py-5 rounded-xl transition-all duration-300 font-sans"
            >
              포트폴리오 보기
            </Link>
          </div>
          
          <div className="text-white/80 text-lg font-sans">
            <p>📞 초기 상담 무료 (30분) | 📍 서울/경기 지역 현장 방문 가능</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 