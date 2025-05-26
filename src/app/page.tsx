import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AboutTwo from "@/components/sections/AboutTwo";
import AboutThree from "@/components/sections/AboutThree";
import FeaturedProjects from "@/components/sections/FeaturedProject";
import CTASection from "@/components/sections/ServiceSpotlight";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AboutTwo />
      <AboutThree />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
