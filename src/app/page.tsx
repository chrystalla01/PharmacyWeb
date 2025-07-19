import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import TeamSection from "./sections/TeamSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="main-content-bg">
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
    </>
  );
}
