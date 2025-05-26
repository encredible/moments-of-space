import Link from 'next/link';
import Image from 'next/image';

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-gray-50 font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 font-sans">
            주요 프로젝트
          </h2>
          <p className="text-xl text-gray-600 max-w-[700px] mx-auto font-sans leading-relaxed">
            공간의 변화를 통해 새로운 가능성을 발견하는 프로젝트들을 소개합니다
          </p>
        </div>
        
        {/* Featured Project with main-3.avif - Split Layout */}
        <div className="max-w-[1200px] mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-xl">
            {/* Image Half */}
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src="/images/main-3.avif"
                alt="주요 프로젝트 - 공간 디자인"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Text Half */}
            <div className="p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block text-sm text-amber-600 font-medium bg-amber-100 px-4 py-2 rounded-full mb-6">
                  주거공간
                </span>
                <h3 className="text-4xl font-bold text-gray-900 font-sans mb-6">
                  모던 아파트 리모델링
                </h3>
                <p className="text-gray-600 text-lg mb-6 font-sans">
                  32평 아파트 | 서울 강남구 | 2024년 완공
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-sans mb-8">
                기존의 답답한 구조를 개방형으로 변경하여 넓고 밝은 공간을 연출했습니다. 
                자연 소재와 따뜻한 색감으로 편안하면서도 세련된 분위기를 완성했습니다.
              </p>
              
              <Link
                href="/projects"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-lg transition-colors duration-300"
              >
                프로젝트 자세히 보기
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Before & After Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-[1200px] mx-auto">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-2 h-64">
              {/* Before */}
              <div className="relative bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-black/70 text-white px-4 py-2 rounded text-sm font-medium">Before</span>
                </div>
              </div>
              {/* After */}
              <div className="relative bg-gradient-to-br from-amber-200 via-orange-200 to-yellow-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-black/70 text-white px-4 py-2 rounded text-sm font-medium">After</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 font-sans">
                  원룸 스튜디오 변신
                </h3>
                <span className="text-sm text-amber-600 font-medium bg-amber-100 px-3 py-1 rounded-full">
                  주거공간
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 font-sans">
                15평 원룸 | 서울 홍대 | 2024년 완공
              </p>
              <p className="text-gray-700 leading-relaxed font-sans">
                제한된 공간을 최대한 활용하여 기능적이면서도 스타일리시한 원룸으로 변화시켰습니다.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-2 h-64">
              {/* Before */}
              <div className="relative bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-black/70 text-white px-4 py-2 rounded text-sm font-medium">Before</span>
                </div>
              </div>
              {/* After */}
              <div className="relative bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-black/70 text-white px-4 py-2 rounded text-sm font-medium">After</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 font-sans">
                  브랜드 카페 인테리어
                </h3>
                <span className="text-sm text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
                  상업공간
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 font-sans">
                50평 카페 | 서울 홍대 | 2024년 완공
              </p>
              <p className="text-gray-700 leading-relaxed font-sans">
                브랜드의 아이덴티티를 공간에 녹여내어 고객들에게 특별한 경험을 제공하는 카페로 완성했습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xl px-12 py-4 rounded-xl transition-all duration-300 font-sans shadow-lg hover:shadow-xl"
          >
            모든 프로젝트 보기
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 