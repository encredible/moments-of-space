'use client'; // 나중에 인터랙션 추가 시 필요할 수 있음
import Image from 'next/image';

const ServicesPage = () => {
  const services = [
    {
      title: "Online Home Styling",
      shortDescription: "Get expert home styling advice entirely online. Perfect for quick makeovers and remote consultations.",
      longDescription: "Our online home styling service connects you with our talented designers virtually. Share your space through photos or video calls, and receive personalized mood boards, shopping lists, and layout suggestions. It's a convenient and affordable way to refresh your home, no matter where you are.",
      imageSrc: "/images/online-styling.jpg", // 임시 이미지 경로
      imageAlt: "Online home styling session with a designer on a laptop",
    },
    {
      title: "In-Person Home Styling",
      shortDescription: "Comprehensive home styling with on-site visits from our experienced designers.",
      longDescription: "For a more hands-on approach, our in-person styling service includes site visits, detailed measurements, and direct collaboration with our designers. We'll help you transform your space from concept to completion, managing every detail to create your dream home.",
      imageSrc: "/images/in-person-styling.jpg", // 임시 이미지 경로
      imageAlt: "Interior designer discussing plans with a client in a living room",
    },
    {
      title: "Furniture Purchase Consulting",
      shortDescription: "Expert advice to help you choose the perfect furniture pieces for your space and budget.",
      longDescription: "Struggling to find the right furniture? Our consulting service provides expert guidance on selecting pieces that fit your style, needs, and budget. We'll help you navigate choices, consider materials, and ensure your new furniture complements your existing decor beautifully.",
      imageSrc: "/images/furniture-consulting.jpg", // 임시 이미지 경로
      imageAlt: "Designer helping a client choose fabric swatches for furniture",
    },
  ];

  return (
    <main className="flex flex-col items-center px-4 sm:px-10 md:px-20 py-10">
      <section className="w-full max-w-5xl mb-16"> {/* 페이지 제목 및 소개 */}
        <div className="pt-5 pb-8">
          <h2 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl text-neutral-900 text-center mb-6">
            Our Services
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a range of services to help you create a space you&apos;ll love. Whether you need a full redesign or just a little guidance, our team is here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* 서비스 카드 섹션 */}
      <section className="w-full max-w-6xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-white p-6 border border-gray-200  shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-plus-jakarta-sans font-semibold text-xl text-neutral-900 mb-3">{service.title}</h3>
              <p className="font-plus-jakarta-sans text-sm text-gray-600 flex-grow">{service.shortDescription}</p>
              {/* <button className="mt-auto bg-neutral-800 text-white px-4 py-2  hover:bg-neutral-900 transition-colors text-sm font-medium">
                Learn More
              </button> */}
            </div>
          ))}
        </div>
      </section>

      {/* 서비스 상세 설명 섹션 */}
      <section className="w-full max-w-5xl space-y-20">
        {services.map((service, index) => (
          <article key={service.title} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 w-full  overflow-hidden shadow-lg">
              <Image src={service.imageSrc} alt={service.imageAlt} width={600} height={400} className="object-cover w-full h-auto md:h-96" />
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="font-plus-jakarta-sans font-bold text-2xl sm:text-3xl text-neutral-900 mb-4">{service.title}</h3>
              <p className="font-plus-jakarta-sans text-base text-gray-700 leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ServicesPage; 