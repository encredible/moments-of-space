import SplitSection from '../components/SplitSection';

export default function HomeIntroSections() {
  return (
    <>
      {/* 1st Row: Image | Text */}
      <SplitSection
        imageUrl="/images/home-styling-meaning.jpg"
        imageAlt="A beautifully styled living room with natural light"
        title="Why Home Styling Matters"
        description="Home styling is more than just decorating—it's about creating a space that reflects your unique story, supports your lifestyle, and brings out the best in everyday living. Thoughtful styling can transform any room into a place of inspiration and comfort."
        imageOnLeft={true}
        priority={true}
        className="bg-white"
      />

      {/* 2nd Row: Text | Image */}
      <SplitSection
        imageUrl="/images/home-styling-process.jpg"
        imageAlt="Designer planning with client over home layout and materials"
        title="Our Approach to Beautiful Living"
        description="We blend function and beauty, focusing on layouts, materials, and details that make your home both practical and visually stunning. Our designers guide you through every step, ensuring the result is a harmonious, welcoming environment tailored just for you."
        imageOnLeft={false}
        priority={true}
      />
    </>
  );
}
