import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-20 pb-0 bg-white font-sans">
      <div className="w-full">
        {/* Hero Image with Text Overlay */}
        <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
          <Image
            src="/images/main-1.avif"
            alt="공간 디자인 메인 이미지"
            fill
            className="object-cover"
            priority
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <div className="max-w-[900px] mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight font-sans">
                공간에 생명을 불어넣는 디자이너
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-[700px] mx-auto leading-relaxed font-sans">
                주거부터 상업공간까지, 당신만의 특별한 공간을 만들어드립니다
              </p>
              
              <Link
                href="/services"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold text-xl px-12 py-5 rounded-xl transition-all duration-300 font-sans shadow-lg hover:shadow-xl"
              >
                서비스 알아보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 