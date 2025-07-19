'use client';
import { useState } from 'react';
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import ServicesSection from "./sections/ServicesSection";
import TeamSection from "./sections/TeamSection";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'gr'>('en');

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <main className="main-content-bg">
        <div style={{ background: '#fff', maxWidth: '900px', margin: '0 auto', padding: '2.5rem 1.5rem 3rem 1.5rem', boxSizing: 'border-box' }}>
          <AboutSection lang={lang} />
          <hr style={{ border: 'none', borderTop: '1.5px solid #e0e0e0', margin: '0 0 1.2rem 0' }} />
          <ServicesSection lang={lang} />
          <hr style={{ border: 'none', borderTop: '1.5px solid #e0e0e0', margin: '0 0 1.2rem 0' }} />
          <TeamSection lang={lang} />
          <hr style={{ border: 'none', borderTop: '1.5px solid #e0e0e0', margin: '0 0 1.2rem 0' }} />
          <ContactSection lang={lang} />
        </div>
      </main>
    </>
  );
}
