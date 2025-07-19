
export default function ServicesSection({ lang = 'en' }: { lang?: 'en' | 'gr' }) {
  const text = {
    en: {
      title: 'Our Services',
      services: [
        'Prescription dispensing and refills',
        'Medication counseling and advice',
        'Blood pressure monitoring',
        'Vaccination services',
        'COVID-19 tests',
        'Personalized medication packaging',
        'Health and wellness consultations',
        'Home delivery service',
      ],
      note: 'Note: Prescription medicines are dispensed only with a valid doctor’s note.'
    },
    gr: {
      title: 'Οι Υπηρεσίες μας',
      services: [
        'Διάθεση και ανανέωση συνταγών',
        'Συμβουλές και καθοδήγηση για φάρμακα',
        'Έλεγχος αρτηριακής πίεσης',
        'Υπηρεσίες εμβολιασμού',
        'Τεστ COVID-19',
        'Εξατομικευμένη συσκευασία φαρμάκων',
        'Συμβουλές υγείας και ευεξίας',
        'Υπηρεσία κατ’ οίκον παράδοσης',
      ],
      note: 'Σημείωση: Τα φάρμακα χορηγούνται μόνο με έγκυρη ιατρική συνταγή.'
    }
  };
  const t = text[lang];

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
          {t.title}
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
          {t.services.map((service, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.7rem', background: '#f5f7fa', padding: '0.7rem 1rem' }}>
              <span style={{ marginRight: '0.7rem' }}>{['💊','💬','🩺','💉','🦠','📦','💡','🚚'][i]}</span>{service}
            </li>
          ))}
        </ul>
        <div style={{
          maxWidth: '600px',
          margin: 'auto',
          color: '#000',
          fontSize: '1rem',
          fontStyle: 'italic',
          textAlign: 'left',
          padding: '0 1.5rem',
          animation: 'fadeInUp 1.3s',
        }}>
          <strong>{t.note}</strong>
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