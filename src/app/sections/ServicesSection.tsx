export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
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
        marginTop: '1rem',
        textAlign: 'center',
      }}>Our Services</h2>
      <ul style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 1.5rem',
        listStyle: 'disc inside',
        textAlign: 'left',
        color: '#444',
        fontSize: '1.3rem',
        lineHeight: 1.7,
        fontFamily: 'Times, Times New Roman, times-roman, georgia, serif',
      }}>
        <li>Prescription dispensing and refills</li>
        <li>Medication counseling and advice</li>
        <li>Blood pressure monitoring</li>
        <li>Vaccination services</li>
        <li>COVID-19 tests</li>
        <li>Personalized medication packaging</li>
        <li>Health and wellness consultations</li>
        <li>Home delivery service</li>
      </ul>
      <div style={{
        maxWidth: '600px',
        margin: 'auto',
        color: '#fff',
        fontSize: '1rem',
        fontStyle: 'italic',
        textAlign: 'left',
        padding: '0 1.5rem',
      }}>
        <strong>Note:</strong> Prescription medicines are dispensed only with a valid doctor’s note.
      </div>
    </section>
  );
} 