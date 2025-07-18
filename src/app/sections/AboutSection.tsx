export default function AboutSection() {
  return (
    <section id="about" className="about-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh', paddingTop: 0, marginTop: 0 }}>
      <div style={{
        maxWidth: '100%',
        width: '100%',
        background: '#ece5df',
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/wood.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <h2 style={{
          fontFamily: 'Gill Sans, Verdana',
          color: '#444',
          margin: 0,
          padding: '0 0 12px 0',
          fontSize: '3.2rem',
          lineHeight: '2.8rem',
          letterSpacing: '-2px',
          fontWeight: 'bold',
          marginBottom: '1rem',
          marginTop: '1rem',
          textAlign: 'center',
        }}>About Us</h2>
        <div style={{
          fontSize: '1.55rem',
          color: '#444',
          lineHeight: 1.8,
          fontFamily: 'Times, Times New Roman, times-roman, georgia, serif',
        }}>
          Established in 2012, Jomelita Pharmacy has been proudly serving the Dromolaxia community with trusted, professional care. Our team of licensed pharmacists brings over 30 years of experience to ensure you receive safe, informed, and friendly support every time you visit.<br /><br />
          We focus on creating a welcoming environment where you can get the advice and attention you need—whether you're managing prescriptions or simply looking for guidance.<br /><br />
          As a locally owned pharmacy, we’re committed to putting the health of our community first.
        </div>
        <h3 style={{ fontFamily: 'Gill Sans, Verdana', fontSize: '13px',color: '#444',lineHeight: '16px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', margin: 0, marginBottom: '0.5rem', marginTop: '2.5rem' }}>Opening Times</h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          color: '#444',
          margin: 0,
          fontSize: '1.15rem',
          textAlign: 'center',
          lineHeight: '2',
          fontFamily: 'Times, Times New Roman, times-roman, georgia, serif'
        }}>
          <li>Monday: 8:00 AM - 13:30 PM | 16:00 PM - 19:30 PM</li>
          <li>Tuesday: 8:00 AM - 13:30 PM | 16:00 PM - 19:30 PM</li>
          <li>Wednesday: 8:00 AM - 13:30 PM</li>
          <li>Thursday: 8:00 AM - 13:30 PM | 16:00 PM - 19:30 PM</li>
          <li>Friday: 8:00 AM - 13:30 PM | 16:00 PM - 19:30 PM</li>
          <li>Saturday: 8:00 AM - 13:30 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </section>
  );
} 