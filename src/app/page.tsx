'use client';
import { useState } from 'react';
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import TeamSection from "./sections/TeamSection";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'gr'>('en');

  return (
    <>
      <HeroSection lang={lang} />
      <nav style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '1rem 2rem 0 2rem', background: 'transparent' }}>
        <button
          onClick={() => setLang('en')}
          style={{ fontWeight: lang === 'en' ? 'bold' : 'normal', marginRight: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
        >EN</button>
        /
        <button
          onClick={() => setLang('gr')}
          style={{ fontWeight: lang === 'gr' ? 'bold' : 'normal', marginLeft: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
        >GR</button>
      </nav>
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
