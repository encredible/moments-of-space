'use client';
import Image from 'next/image';
import Link from 'next/link';

const DesignersPage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-3">
            Our Designers
          </h1>
          <p className="font-plus-jakarta-sans text-lg text-gray-500 max-w-2xl mx-auto">
            Meet the talented team behind our beautiful designs. Each designer brings unique expertise and passion to every project.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-40 h-40 mb-6">
              <Image 
                src="/images/elena-rodriguez.jpg" 
                alt="Elena Rodriguez, Lead Designer" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="font-plus-jakarta-sans font-semibold text-2xl text-neutral-900 mb-2">Elena Rodriguez</h2>
            <h3 className="font-plus-jakarta-sans font-medium text-lg text-blue-600 mb-4">Lead Designer</h3>
            <p className="font-plus-jakarta-sans text-base text-gray-600 leading-relaxed">
              Elena is our Lead Designer, specializing in minimalist and sustainable design. She believes in creating spaces that are not only beautiful but also kind to the environment, bringing harmony and nature into every project.
            </p>
          </article>

          <article className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-40 h-40 mb-6">
              <Image 
                src="/images/marcus-chen.jpg" 
                alt="Marcus Chen, Senior Designer" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="font-plus-jakarta-sans font-semibold text-2xl text-neutral-900 mb-2">Marcus Chen</h2>
            <h3 className="font-plus-jakarta-sans font-medium text-lg text-blue-600 mb-4">Senior Designer</h3>
            <p className="font-plus-jakarta-sans text-base text-gray-600 leading-relaxed">
              Marcus, a Senior Designer, is an expert in blending modern aesthetics with classic comfort. He excels at creating timeless interiors that feel both sophisticated and inviting.
            </p>
          </article>

          <article className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-40 h-40 mb-6">
              <Image 
                src="/images/aisha-khan.jpg" 
                alt="Aisha Khan, Interior Designer" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="font-plus-jakarta-sans font-semibold text-2xl text-neutral-900 mb-2">Aisha Khan</h2>
            <h3 className="font-plus-jakarta-sans font-medium text-lg text-blue-600 mb-4">Interior Designer</h3>
            <p className="font-plus-jakarta-sans text-base text-gray-600 leading-relaxed">
              Aisha is passionate about vibrant colors and eclectic styles. She loves to craft unique and personalized environments that truly reflect the client&apos;s personality and story.
            </p>
          </article>
        </section>

        <section className="mt-16 text-center">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl text-neutral-900 mb-4">
            Ready to work with our team?
          </h2>
          <p className="font-plus-jakarta-sans text-lg text-gray-600 mb-8">
            Every project is a collaboration. Let us know what you have in mind.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-neutral-700 transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
};

export default DesignersPage; 