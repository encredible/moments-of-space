import Image from 'next/image';

const About = () => {
  return (
    <section className="py-0 bg-amber-50 font-sans">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Image - Left Half */}
          <div className="relative min-h-[500px] lg:min-h-full">
            <Image
              src="/images/main-2.avif"
              alt="디자이너 작업 모습"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Text Content - Right Half */}
          <div className="flex items-center justify-center px-12 py-24">
            <div className="max-w-[500px]">
              <h2 className="text-5xl font-bold text-gray-900 mb-8 font-sans">
                디자인 철학
              </h2>
              
              <div className="space-y-8">
                <p className="text-2xl text-gray-700 leading-relaxed font-sans">
                  <span className="font-semibold text-amber-600">"기능과 미학의 완벽한 조화"</span>
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  모든 공간은 고유한 이야기를 가지고 있습니다. 저희는 클라이언트의 라이프스타일을 깊이 이해하고, 
                  그들만의 특별한 공간을 창조합니다. 단순히 아름다운 공간이 아닌, 실용성과 편안함이 조화를 이루는 
                  맞춤형 디자인을 제공합니다.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  주거 공간부터 상업 공간, 팝업 스토어까지 다양한 프로젝트를 통해 축적된 경험과 노하우로 
                  고객의 꿈을 현실로 만들어드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 