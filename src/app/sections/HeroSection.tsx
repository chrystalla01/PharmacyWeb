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
        <div className="hero-title" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3
        }}>
          <h1 style={{
            fontFamily: 'Gill Sans, Verdana',
            color: 'white',
            fontSize: '3.2rem',
            letterSpacing: '2px',
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '0 2px 16px rgba(0,0,0,0.25)',
            margin: 0,
            padding: 0
          }}>Jomelita Pharmacy</h1>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '-4px' }}>
        <hr style={{ width: '100%', maxWidth: 900, border: 'none', borderTop: '5px solid #e0e7ef', borderRadius: 3, margin: 0 }} />
      </div>
    </section>
  );
} 