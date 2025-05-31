'use client'; // 나중에 인터랙션 추가 시 필요할 수 있음
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: "Remote Consultation",
      description: "Get professional design advice from anywhere. Through video calls and digital mood boards, we'll help you plan your space, create shopping lists, and layout suggestions. It&apos;s a convenient and affordable way to refresh your home, no matter where you are.",
      imageUrl: "/images/services/remote-consultation.jpg",
      features: ["Virtual consultations", "Digital mood boards", "Shopping lists", "Layout suggestions"]
    },
    {
      title: "Full Design Service", 
      description: "From concept to completion, we handle every aspect of your interior design project. This comprehensive service includes space planning, material selection, furniture sourcing, and project management. Perfect collaboration with our designers. We&apos;ll help you transform your space from concept to completion, managing every detail to create your dream home.",
      imageUrl: "/images/services/full-design.jpg",
      features: ["Space planning", "Material selection", "Furniture sourcing", "Project management"]
    },
    {
      title: "Furniture & Decor Selection",
      description: "Need help choosing the right pieces? Our curated furniture and decor selection service takes the guesswork out of decorating. We&apos;ll recommend pieces that fit your style, needs, and budget. We&apos;ll help you navigate choices, consider materials, and ensure your new furniture complements your existing decor beautifully.",
      imageUrl: "/images/services/furniture-selection.jpg",
      features: ["Curated selections", "Style matching", "Budget considerations", "Quality assessment"]
    }
  ];

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-4">
            Our Services
          </h1>
          <p className="font-plus-jakarta-sans text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a range of services to help you create a space you&apos;ll love. Whether you need a full redesign or just a little guidance, our team is here to bring your vision to life.
          </p>
        </header>

        <section className="space-y-16">
          {services.map((service, index) => (
            <article key={service.title} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="font-plus-jakarta-sans font-bold text-2xl sm:text-3xl text-neutral-900">
                  {service.title}
                </h2>
                <p className="font-plus-jakarta-sans text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors">
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 text-center bg-gray-50 rounded-xl p-12">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-plus-jakarta-sans text-lg text-gray-600 mb-8">
            Contact us today to discuss your project and see how we can help transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-neutral-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-block border border-neutral-900 text-neutral-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-neutral-900 hover:text-white transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage; 