import Image from 'next/image';

const AboutTwo = () => {
  return (
    <section className="py-0 bg-white font-sans"> {/* 배경색을 흰색으로 변경하거나 필요에 따라 조정하세요 */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Text Content - Left Half */}
          <div className="flex items-center justify-center px-12 py-24 lg:order-first"> {/* lg:order-first 추가 */}
            <div className="max-w-[500px]">
              <h2 className="text-5xl font-bold text-gray-900 mb-8 font-sans">
                새로운 공간 이야기 {/* 제목 예시, 필요에 따라 변경하세요 */}
              </h2>

              <div className="space-y-8">
                <p className="text-2xl text-gray-700 leading-relaxed font-sans">
                  <span className="font-semibold text-amber-600">"창의성과 실용성의 만남"</span> {/* 내용 예시 */}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  이곳에 새로운 섹션에 대한 설명을 입력합니다. 
                  클라이언트의 요구를 반영하여 독창적이면서도 실용적인 공간을 어떻게 만들어나가는지 소개할 수 있습니다.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  프로젝트의 다양성과 혁신적인 접근 방식을 강조하여 
                  고객에게 새로운 영감을 제공하는 내용을 담아보세요.
                </p>
              </div>
            </div>
          </div>

          {/* Image - Right Half */}
          <div className="relative min-h-[500px] lg:min-h-full">
            <Image
              src="/images/main-3.avif" // 이미지 소스 변경
              alt="새로운 소개 섹션 이미지" // alt 텍스트 변경
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo; 