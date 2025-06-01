'use client';
import Image from 'next/image'; // Image 컴포넌트를 사용하지 않더라도, 스타일 가이드 일관성을 위해 포함
import Link from 'next/link';

const MainContent: React.FC = () => {
  return (
    <main className="max-w-screen-xl mx-auto py-5 w-full">
      <div className="flex flex-col flex-grow w-full">
        {/* Hero Section */}
        <section
          className="rounded-xl h-128 bg-cover bg-center flex flex-col items-center justify-center text-center text-white mb-8"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("/images/hero-background.jpg")' }}
        >
          <h1 className="font-plus-jakarta-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-tighter">
            Creating beautiful spaces that inspire
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/services" className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-neutral-700 transition-colors">
              Our Services
            </Link>
            <Link href="/project" className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-lg text-lg font-medium border border-neutral-300 hover:bg-neutral-100 transition-colors">
              View Projects
            </Link>
          </div>
        </section>

        {/* Designers Section - 이제 별도 페이지로 분리됨 */}
        {/*
        <section id="designers-section" className="pt-5 px-4 pb-3">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            Our Designers
          </h2>
        </section>
        <section className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl shadow-lg">
            <Image src="/images/elena-rodriguez.jpg" alt="Elena Rodriguez, Lead Designer" width={128} height={128} className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="font-plus-jakarta-sans font-semibold text-xl text-neutral-900 mb-1">Elena Rodriguez</h3>
            <p className="font-plus-jakarta-sans text-sm text-gray-600">Elena is our Lead Designer, specializing in minimalist and sustainable design. She believes in creating spaces that are not only beautiful but also kind to the environment, bringing harmony and nature into every project.</p>
          </article>
          <article className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl shadow-lg">
            <Image src="/images/marcus-chen.jpg" alt="Marcus Chen, Senior Designer" width={128} height={128} className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="font-plus-jakarta-sans font-semibold text-xl text-neutral-900 mb-1">Marcus Chen</h3>
            <p className="font-plus-jakarta-sans text-sm text-gray-600">Marcus, a Senior Designer, is an expert in blending modern aesthetics with classic comfort. He excels at creating timeless interiors that feel both sophisticated and inviting.</p>
          </article>
          <article className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl shadow-lg">
            <Image src="/images/aisha-khan.jpg" alt="Aisha Khan, Interior Designer" width={128} height={128} className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="font-plus-jakarta-sans font-semibold text-xl text-neutral-900 mb-1">Aisha Khan</h3>
            <p className="font-plus-jakarta-sans text-sm text-gray-600">Aisha is passionate about vibrant colors and eclectic styles. She loves to craft unique and personalized environments that truly reflect the client's personality and story.</p>
          </article>
        </section>
        */}

        {/* Portfolio Highlights Section */}
        <section className="pt-5 px-4 pb-3">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            Portfolio Highlights
          </h2>
        </section>
        <section className="flex flex-col gap-5 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <article className="flex-1 flex flex-col gap-3">
              <Image src="/images/modern-apartment.jpg" alt="Modern Apartment" width={400} height={169} className="rounded-xl object-cover w-full h-44" />
              <h3 className="font-plus-jakarta-sans font-medium text-base text-neutral-900">Modern Apartment</h3>
              <p className="font-plus-jakarta-sans text-sm text-gray-500">A sleek and minimalist apartment design in downtown San Francisco.</p>
            </article>
            <article className="flex-1 flex flex-col gap-3">
              <Image src="/images/cozy-home.jpg" alt="Cozy Home" width={400} height={169} className="rounded-xl object-cover w-full h-44" />
              <h3 className="font-plus-jakarta-sans font-medium text-base text-neutral-900">Cozy Home</h3>
              <p className="font-plus-jakarta-sans text-sm text-gray-500">A warm and inviting home design with a focus on comfort and functionality.</p>
            </article>
            <article className="flex-1 flex flex-col gap-3">
              <Image src="/images/luxury-villa.jpg" alt="Luxury Villa" width={400} height={170} className="rounded-xl object-cover w-full h-44" />
              <h3 className="font-plus-jakarta-sans font-medium text-base text-neutral-900">Luxury Villa</h3>
              <p className="font-plus-jakarta-sans text-sm text-gray-500">An opulent villa design showcasing luxurious materials and finishes.</p>
            </article>
          </div>
          {/* Portfolio Item 4 */}
          <article className="flex flex-col gap-3 mt-5">
            <Image src="/images/office-space.jpg" alt="Office Space" width={1232} height={170} className="rounded-xl object-cover w-full h-44" />
            <h3 className="font-plus-jakarta-sans font-medium text-base text-neutral-900">Office Space</h3>
            <p className="font-plus-jakarta-sans text-sm text-gray-500">A modern and collaborative office space designed for productivity.</p>
          </article>
        </section>

        {/* Testimonials Section */}
        <section className="pt-5 px-4 pb-3">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            What Our Clients Say
          </h2>
        </section>
        <section className="flex flex-col gap-4 p-4">
          <article className="p-4 rounded-xl border border-gray-200">
            <p className="font-plus-jakarta-sans text-base text-neutral-900">&ldquo;Sarah transformed our living room into a masterpiece. Her attention to detail and creative vision are unparalleled.&rdquo;</p>
            <footer className="mt-3 font-plus-jakarta-sans text-sm text-gray-500">- John & Jane Doe</footer>
          </article>
          <article className="p-4 rounded-xl border border-gray-200">
            <p className="font-plus-jakarta-sans text-base text-neutral-900">&ldquo;Working with Sarah was a pleasure. She understood our needs perfectly and delivered a stunning design for our office.&rdquo;</p>
            <footer className="mt-3 font-plus-jakarta-sans text-sm text-gray-500">- ACME Corp</footer>
          </article>
        </section>

        {/* Call to Action Section */}
        <section className="pt-5 px-4 pb-3 text-center">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900">
            Ready to transform your space?
          </h2>
          <button className="mt-3 bg-black rounded-xl px-5 h-12 flex justify-center items-center font-plus-jakarta-sans font-bold text-base text-white hover:bg-gray-800 mx-auto">
            Get in Touch
          </button>
        </section>

        {/* Project Highlights Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Project Highlights</h2>
            <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
              A glimpse into some of our finest work, showcasing creativity and precision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Project Item 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/images/project/project-highlight-1.jpg" alt="Project 1 Highlight" width={400} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Modern Living Redefined</h3>
                  <p className="text-neutral-600 text-sm mb-4">Sleek lines and open spaces in a contemporary urban setting.</p>
                  <Link href="/project/modern-apartment-makeover" className="text-blue-600 hover:text-blue-800 font-medium">View Details</Link>
                </div>
              </div>
              {/* Project Item 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/images/project/project-highlight-2.jpg" alt="Project 2 Highlight" width={400} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Cozy & Chic Bedroom</h3>
                  <p className="text-neutral-600 text-sm mb-4">Warm textures and a calming palette for ultimate relaxation.</p>
                  <Link href="/project/bohemian-bedroom-retreat" className="text-blue-600 hover:text-blue-800 font-medium">View Details</Link>
                </div>
              </div>
              {/* Project Item 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/images/project/project-highlight-3.jpg" alt="Project 3 Highlight" width={400} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Elegant Kitchen Space</h3>
                  <p className="text-neutral-600 text-sm mb-4">Functionality meets style in this state-of-the-art kitchen.</p>
                  <Link href="/project/sleek-kitchen-remodel" className="text-blue-600 hover:text-blue-800 font-medium">View Details</Link>
                </div>
              </div>
              {/* Project Item 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="/images/project/project-highlight-4.jpg" alt="Project 4 Highlight" width={400} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Luxury Villa Retreat</h3>
                  <p className="text-neutral-600 text-sm mb-4">Breathtaking views and opulent design for a grand experience.</p>
                  <Link href="/project/luxury-villa-design" className="text-blue-600 hover:text-blue-800 font-medium">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;