
export default function ContactSection({ lang = 'en' }: { lang?: 'en' | 'gr' }) {
  const text = {
    en: {
      title: 'Contact Us',
      telephone: 'Telephone',
      email: 'Email',
      address: 'Address',
      addressValue: '123 Main Street, Dromolaxia, Cyprus',
      note: 'Made by Chrystalla Fella',
      mapTitle: 'Jomelita Pharmacy Map',
    },
    gr: {
      title: 'Επικοινωνία',
      telephone: 'Τηλ',
      email: 'Ηλ. ταχυδρομείο',
      address: 'Διεύθυνση',
      addressValue: 'Οδός Κεντρική 123, Δρομολαξιά, Κύπρος',
      note: 'Made by Chrystalla Fella',
      mapTitle: 'Χάρτης Φαρμακείου Jomelita',
    },
  };
  const t = text[lang];

  return (
    <section id="contact" className="contact-section" style={{ background: '#fff', marginBottom: 0, paddingBottom: '1.2rem' }}>
      <h2 style={{
        fontFamily: 'Gill Sans, Verdana',
        color: '#444',
        margin: 0,
        padding: '0 0 12px 0',
        fontSize: '2.4rem',
        lineHeight: '2.8rem',
        letterSpacing: '-2px',
        fontWeight: 'bold',
        marginBottom: '1rem',
        marginTop: '6rem',
        textAlign: 'center',
      }}>{t.title}</h2>
      <div style={{
        maxWidth: '600px',
        margin: '2rem auto 0',
        padding: '0 1.5rem',
        textAlign: 'center',
        color: '#444',
        fontFamily: 'Times, Times New Roman, times-roman, georgia, serif',
        fontSize: '1.2rem',
        marginBottom: 0,
        paddingBottom: 0,
        animation: 'fadeIn 1.2s',
      }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <strong>{t.telephone}:</strong> +357 22 123456<br />
          <strong>{t.email}:</strong> info@jomelitapharmacy.com
        </div>
        <div style={{
          width: '100%',
          maxWidth: '480px',
          height: '220px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6b7280',
          fontSize: '1.1rem',
          margin: '0 auto 1.2rem',
          overflow: 'hidden',
          padding: 0,
          animation: 'fadeIn 1.5s',
        }}>
          <iframe
            title={t.mapTitle}
            src="https://www.openstreetmap.org/export/embed.html?bbox=33.331%2C34.822%2C33.352%2C34.832&layer=mapnik&marker=34.827%2C33.341"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2.5rem' }}>
          <strong>{t.address}:</strong> {t.addressValue}
        </div>
        <div style={{ fontSize: '0.95rem', color: 'gray', textAlign: 'center', marginTop: '2rem', marginBottom: 0 }}>
          &copy; {new Date().getFullYear()} {t.note}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
} 