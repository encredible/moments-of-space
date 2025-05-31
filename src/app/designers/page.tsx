'use client';
import Image from 'next/image';

const DesignersPage = () => {
  return (
    <main className="flex flex-col items-center px-4 sm:px-10 md:px-20 py-10"> {/* 반응형 패딩 조정 */}
      <section className="w-full max-w-3xl"> {/* 최대 너비를 약간 줄여 세로 리스트에 적합하게 조정 */}
        <div className="pt-5 pb-8">
          <h2 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl text-neutral-900 text-center mb-10">
            Our Talented Designers
          </h2>
        </div>
        <div className="flex flex-col gap-12"> {/* 세로 정렬을 위해 flex-col과 gap 증가 */}
          {/* Designer 1 */}
          <article className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-6 border border-gray-200 rounded-xl shadow-lg gap-6"> {/* 반응형 정렬 및 gap 추가 */}
            <Image src="/images/elena-rodriguez.jpg" alt="Elena Rodriguez, Lead Designer" width={160} height={160} className="w-40 h-40 rounded-full object-cover flex-shrink-0" /> {/* 이미지 축소 방지 */}
            <div className="flex flex-col">
              <h3 className="font-plus-jakarta-sans font-semibold text-xl sm:text-2xl text-neutral-900 mb-2">Elena Rodriguez</h3>
              <p className="font-plus-jakarta-sans text-sm sm:text-base text-gray-600">Elena is our Lead Designer, specializing in minimalist and sustainable design. She believes in creating spaces that are not only beautiful but also kind to the environment, bringing harmony and nature into every project.</p>
            </div>
          </article>
          {/* Designer 2 */}
          <article className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-6 border border-gray-200 rounded-xl shadow-lg gap-6">
            <Image src="/images/marcus-chen.jpg" alt="Marcus Chen, Senior Designer" width={160} height={160} className="w-40 h-40 rounded-full object-cover flex-shrink-0" />
            <div className="flex flex-col">
              <h3 className="font-plus-jakarta-sans font-semibold text-xl sm:text-2xl text-neutral-900 mb-2">Marcus Chen</h3>
              <p className="font-plus-jakarta-sans text-sm sm:text-base text-gray-600">Marcus, a Senior Designer, is an expert in blending modern aesthetics with classic comfort. He excels at creating timeless interiors that feel both sophisticated and inviting.</p>
            </div>
          </article>
          {/* Designer 3 */}
          <article className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-6 border border-gray-200 rounded-xl shadow-lg gap-6">
            <Image src="/images/aisha-khan.jpg" alt="Aisha Khan, Interior Designer" width={160} height={160} className="w-40 h-40 rounded-full object-cover flex-shrink-0" />
            <div className="flex flex-col">
              <h3 className="font-plus-jakarta-sans font-semibold text-xl sm:text-2xl text-neutral-900 mb-2">Aisha Khan</h3>
              <p className="font-plus-jakarta-sans text-sm sm:text-base text-gray-600">Aisha is passionate about vibrant colors and eclectic styles. She loves to craft unique and personalized environments that truly reflect the client's personality and story.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default DesignersPage; 