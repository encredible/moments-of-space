import Image from 'next/image';

const AboutThree = () => {
  return (
    <section className="py-0 bg-amber-50 font-sans"> {/* 배경색은 필요에 따라 조정하세요 (예: bg-amber-50 또는 다른 색) */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Image - Left Half */}
          <div className="relative min-h-[500px] lg:min-h-full">
            <Image
              src="/images/main-4.avif" // 이미지 소스 변경
              alt="세 번째 소개 섹션 이미지" // alt 텍스트 변경
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content - Right Half */}
          <div className="flex items-center justify-center px-12 py-24">
            <div className="max-w-[500px]">
              <h2 className="text-5xl font-bold text-gray-900 mb-8 font-sans">
                또 다른 공간 이야기 {/* 제목 예시 */}
              </h2>

              <div className="space-y-8">
                <p className="text-2xl text-gray-700 leading-relaxed font-sans">
                  <span className="font-semibold text-amber-600">"혁신과 경험의 조화"</span> {/* 내용 예시 */}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  세 번째 섹션에 대한 설명을 이곳에 작성합니다.
                  다양한 프로젝트 경험을 통해 얻은 인사이트와 혁신적인 디자인 솔루션을 소개할 수 있습니다.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  고객의 기대를 뛰어넘는 맞춤형 공간 디자인으로 어떻게 만족을 드리는지 설명해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree; 