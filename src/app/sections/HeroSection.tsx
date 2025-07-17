import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-image-cover">
        <Image
          src="/imgs/meds.jpg"
          alt="Assorted colorful pharmacy pills and capsules"
          fill
          style={{ objectFit: "cover", zIndex: 1 }}
          priority
        />
        <div className="hero-overlay" />
        <div className="hero-title">
          <h1>Jomelita Pharmacy</h1>
        </div>
      </div>
    </section>
  );
} 