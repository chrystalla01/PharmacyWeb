export default function ServicesSection() {
  return (
    <section id="services" className="services-section" style={{ padding: '0 0 1.2rem 0' }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: '#fff',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        textAlign: 'center',
        animation: 'fadeIn 1.2s',
      }}>
        <h2 style={{
          fontFamily: 'Gill Sans, Verdana',
          color: '#444',
          margin: 0,
          padding: '0 0 12px 0',
          fontSize: '2.6rem',
          lineHeight: '2.8rem',
          letterSpacing: '-2px',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          marginTop: '1rem',
          textAlign: 'center',
          position: 'relative',
        }}>
          Our Services
          <span style={{
            display: 'block',
            width: '60px',
            height: '4px',
            background: '#b6c2d1',
            borderRadius: '2px',
            margin: '12px auto 0',
          }}></span>
        </h2>
        <ul style={{
          maxWidth: '600px',
          margin: '2rem auto 0',
          padding: '0 1.5rem',
          listStyle: 'none',
          textAlign: 'left',
          color: '#444',
          fontSize: '1.3rem',
          lineHeight: 1.7,
          fontFamily: 'Times, Times New Roman, times-roman, georgia, serif',
          animation: 'fadeInUp 1.1s',
        }}>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}><span style={{ marginRight: '0.7rem' }}>💊</span>Prescription dispensing and refills</li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}><span style={{ marginRight: '0.7rem' }}>💬</span>Medication counseling and advice</li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}><span style={{ marginRight: '0.7rem' }}>🩺</span>Blood pressure monitoring</li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}><span style={{ marginRight: '0.7rem' }}>💉</span>Vaccination services</li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}><span style={{ marginRight: '0.7rem' }}>🦠</span>COVID-19 tests</li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}><span style={{ marginRight: '0.7rem' }}>📦</span>Personalized medication packaging</li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}><span style={{ marginRight: '0.7rem' }}>💡</span>Health and wellness consultations</li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}><span style={{ marginRight: '0.7rem' }}>🚚</span>Home delivery service</li>
        </ul>
        <div style={{
          maxWidth: '600px',
          margin: 'auto',
          color: '#fff',
          fontSize: '1rem',
          fontStyle: 'italic',
          textAlign: 'left',
          padding: '0 1.5rem',
          animation: 'fadeInUp 1.3s',
        }}>
          <strong>Note:</strong> Prescription medicines are dispensed only with a valid doctor’s note.
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
} 