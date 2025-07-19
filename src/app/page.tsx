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
        <div style={{ background: '#fff', maxWidth: '900px', margin: '0 auto', padding: '2.5rem 1.5rem 3rem 1.5rem', boxSizing: 'border-box' }}>
          <AboutSection />
          <hr style={{ border: 'none', borderTop: '1.5px solid #e0e0e0', margin: '0 0 1.2rem 0' }} />
          <ServicesSection />
          <hr style={{ border: 'none', borderTop: '1.5px solid #e0e0e0', margin: '0 0 1.2rem 0' }} />
          <TeamSection />
          <hr style={{ border: 'none', borderTop: '1.5px solid #e0e0e0', margin: '0 0 1.2rem 0' }} />
          <ContactSection />
        </div>
      </main>

    </>
  );
}
