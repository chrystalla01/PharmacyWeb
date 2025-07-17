import styles from "./page.module.css";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import TeamSection from "./sections/TeamSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <div className={styles.page}>
        <main className={styles.main}>
          {/* You can remove or repurpose this default content */}
        </main>
      </div>
    </>
  );
}
