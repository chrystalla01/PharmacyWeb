import Image from "next/image";
import styles from "../page.module.css";

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroImageCover}>
        <Image
          src="/imgs/meds.jpg"
          alt="Assorted colorful pharmacy pills and capsules"
          fill
          style={{ objectFit: "cover", zIndex: 1 }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroTitle}>
          <h1>
            JOMELITA&nbsp;LTD<br />
            <span>Dromolaxia&nbsp;Pharmacy</span>
          </h1>
        </div>
      </div>
      <div className={styles.divider}>
        <hr />
      </div>
    </section>
  );
}