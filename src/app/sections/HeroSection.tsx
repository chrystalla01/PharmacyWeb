import Image from "next/image";
import styles from "../page.module.css";

export default function HeroSection({ lang = 'en' }: { lang?: 'en' | 'gr' }) {
  const text = {
    en: {
      title: 'JOMELITA LTD',
      subtitle: 'Dromolaxia Pharmacy',
    },
    gr: {
      title: 'JOMELITA LTD',
      subtitle: 'Φαρμακείο Δρομολαξιάς',
    },
  };
  const t = text[lang];

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroImageCover}>
        <Image
          src="/imgs/meds-v2.jpg"
          alt="Assorted colorful pharmacy pills and capsules"
          fill
          style={{ objectFit: "cover", zIndex: 1 }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroTitle}>
          <h1>
            {t.title}<br />
            <span style={{ display: 'block', marginTop: '0.5rem' }}>{t.subtitle}</span>
          </h1>
        </div>
      </div>
      <div className={styles.divider}>
        <hr />
      </div>
    </section>
  );
}