export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" style={{ marginBottom: 0, paddingBottom: 0 }}>
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
      }}>Contact Us</h2>
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
      }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <strong>Telephone:</strong> +357 22 123456<br />
          <strong>Email:</strong> info@jomelitapharmacy.com
        </div>
        <div style={{
          width: '100%',
          maxWidth: '480px',
          height: '220px',
          background: '#e0e7ef',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6b7280',
          fontSize: '1.1rem',
          border: '2px dashed #b6c2d1',
          margin: '0 auto 1.2rem',
          overflow: 'hidden',
          padding: 0,
        }}>
          <iframe
            title="Jomelita Pharmacy Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=33.331%2C34.822%2C33.352%2C34.832&layer=mapnik&marker=34.827%2C33.341"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2.5rem' }}>
          <strong>Address:</strong> 123 Main Street, Dromolaxia, Cyprus
        </div>
        <div style={{ fontSize: '0.95rem', color: 'gray', textAlign: 'center', marginTop: '2rem', marginBottom: 0 }}>
          &copy; {new Date().getFullYear()} Made by Chrystalla Fella
        </div>
      </div>
    </section>
  );
} 