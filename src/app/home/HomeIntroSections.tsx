import Image from 'next/image';

export default function HomeIntroSections() {
  return (
    <>
      {/* 1st Row: Image | Text */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-0 bg-white gap-8 md:gap-0">
        <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
          <Image
            src="/images/home-styling-meaning.jpg"
            alt="A beautifully styled living room with natural light"
            width={600}
            height={400}
            className="shadow-md object-cover w-full max-w-lg"
            priority
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-start md:pl-12">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl sm:text-3xl text-neutral-900 mb-4">Why Home Styling Matters</h2>
          <p className="max-w-xl text-gray-700 text-base">Home styling is more than just decorating—it's about creating a space that reflects your unique story, supports your lifestyle, and brings out the best in everyday living. Thoughtful styling can transform any room into a place of inspiration and comfort.</p>
        </div>
      </section>
      {/* 2nd Row: Text | Image */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-0 gap-8 md:gap-0">
        <div className="md:w-1/2 w-full flex flex-col items-start md:pr-12 order-2 md:order-1">
          <h2 className="font-plus-jakarta-sans font-bold text-2xl sm:text-3xl text-neutral-900 mb-4">Our Approach to Beautiful Living</h2>
          <p className="max-w-xl text-gray-700 text-base">We blend function and beauty, focusing on layouts, materials, and details that make your home both practical and visually stunning. Our designers guide you through every step, ensuring the result is a harmonious, welcoming environment tailored just for you.</p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <Image
            src="/images/home-styling-process.jpg"
            alt="Designer planning with client over home layout and materials"
            width={600}
            height={400}
            className="shadow-md object-cover w-full max-w-lg"
            priority
          />
        </div>
      </section>
    </>
  );
}
