import Link from "next/link";

export default function Navbar({ lang, setLang }: { lang: 'en' | 'gr', setLang: (l: 'en' | 'gr') => void }) {
  const text = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      team: 'Our Team',
      contact: 'Contact',
    },
    gr: {
      home: 'Αρχική',
      about: 'Σχετικά',
      services: 'Υπηρεσίες',
      team: 'Η Ομάδα',
      contact: 'Επικοινωνία',
    },
  };
  const t = text[lang];

  return (
    <nav className="navbar">
      <div className="nav-logo logo-placeholder">
        <span>Logo</span>
      </div>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <ul className="nav-links">
        <li><Link href="#home">{t.home}</Link></li>
        <li><Link href="#about">{t.about}</Link></li>
        <li><Link href="#services">{t.services}</Link></li>
        <li><Link href="#team">{t.team}</Link></li>
        <li><Link href="#contact">{t.contact}</Link></li>
        <li className="lang-toggle">
          <button type="button" onClick={() => setLang('en')} style={{ fontWeight: lang === 'en' ? 'bold' : 'normal' }}>EN</button>
          /
          <button type="button" onClick={() => setLang('gr')} style={{ fontWeight: lang === 'gr' ? 'bold' : 'normal' }}>GR</button>
        </li>
      </ul>
    </nav>
  );
} 