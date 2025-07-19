'use client';
import { useState } from 'react';

export default function AboutSection({ lang = 'en' }: { lang?: 'en' | 'gr' }) {
  const [season, setSeason] = useState<'may-october' | 'october-may'>('may-october');

  type TimeRow = { day: string; morning: string; evening: string };
  const times: Record<'may-october' | 'october-may', TimeRow[]> = {
    'may-october': [
      { day: 'Monday', morning: '8:00 AM - 13:30 PM', evening: '16:00 PM - 19:30 PM' },
      { day: 'Tuesday', morning: '8:00 AM - 13:30 PM', evening: '16:00 PM - 19:30 PM' },
      { day: 'Wednesday', morning: '8:00 AM - 13:30 PM', evening: '-' },
      { day: 'Thursday', morning: '8:00 AM - 13:30 PM', evening: '16:00 PM - 19:30 PM' },
      { day: 'Friday', morning: '8:00 AM - 13:30 PM', evening: '16:00 PM - 19:30 PM' },
      { day: 'Saturday', morning: '8:00 AM - 13:30 PM', evening: '-' },
      { day: 'Sunday', morning: 'Closed', evening: 'Closed' },
    ],
    'october-may': [
      { day: 'Monday', morning: '9:00 AM - 13:00 PM', evening: '15:00 PM - 18:00 PM' },
      { day: 'Tuesday', morning: '9:00 AM - 13:00 PM', evening: '15:00 PM - 18:00 PM' },
      { day: 'Wednesday', morning: '9:00 AM - 13:00 PM', evening: '-' },
      { day: 'Thursday', morning: '9:00 AM - 13:00 PM', evening: '15:00 PM - 18:00 PM' },
      { day: 'Friday', morning: '9:00 AM - 13:00 PM', evening: '15:00 PM - 18:00 PM' },
      { day: 'Saturday', morning: '9:00 AM - 13:00 PM', evening: '-' },
      { day: 'Sunday', morning: 'Closed', evening: 'Closed' },
    ],
  };

  const text = {
    en: {
      title: 'About Us',
      body: `Established in 2012, Jomelita Pharmacy has been proudly serving the Dromolaxia community with trusted, professional care. Our team of licensed pharmacists brings over 30 years of experience to ensure you receive safe, informed, and friendly support every time you visit.\n\nWe focus on creating a welcoming environment where you can get the advice and attention you need—whether you're managing prescriptions or simply looking for guidance.\n\nAs a locally owned pharmacy, we’re committed to putting the health of our community first.`,
      opening: 'Opening Times',
      dayLabel: 'Day',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      closed: 'Closed',
      morning: 'Morning',
      evening: 'Evening',
      mayOct: 'May–October',
      octMay: 'October–May',
    },
    gr: {
      title: 'Σχετικά με εμάς',
      body: `Από το 2012, το Φαρμακείο Jomelita εξυπηρετεί με υπευθυνότητα και επαγγελματισμό την κοινότητα της Δρομολαξιάς. Η ομάδα μας, με πάνω από 30 χρόνια εμπειρίας, διασφαλίζει ότι λαμβάνετε πάντα ασφαλή, ενημερωμένη και φιλική εξυπηρέτηση.\n\nΔίνουμε έμφαση στη δημιουργία ενός φιλόξενου περιβάλλοντος όπου μπορείτε να λάβετε τις συμβουλές και την προσοχή που χρειάζεστε—είτε διαχειρίζεστε συνταγές είτε ζητάτε καθοδήγηση.\n\nΩς τοπικό φαρμακείο, προτεραιότητά μας είναι η υγεία της κοινότητάς μας.`,
      opening: 'Ώρες Λειτουργίας',
      dayLabel: 'Ημέρα',
      days: ['Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο', 'Κυριακή'],
      closed: 'Κλειστά',
      morning: 'Πρωί',
      evening: 'Απόγευμα',
      mayOct: 'Μάιος–Οκτώβριος',
      octMay: 'Οκτώβριος–Μάιος',
    }
  };
  const t = text[lang];

  return (
    <section id="about" className="about-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh', padding: '0 0 1.2rem 0', marginTop: 0 }}>
      <div style={{
        maxWidth: '100%',
        width: '100%',
        background: '#fff',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        animation: 'fadeIn 1.2s',
      }}>
        <h3
          style={{
            fontFamily: 'Gill Sans, Verdana',
            fontSize: lang === 'gr' ? '1.7rem' : '1.5rem',
            color: '#444',
            lineHeight: lang === 'gr' ? '1.3' : '16px',
            textTransform: 'uppercase',
            letterSpacing: lang === 'gr' ? '1px' : '2px',
            fontWeight: 'bold',
            margin: 0,
            marginBottom: '0.5rem',
            marginTop: '1rem'
          }}
        >
          {t.opening}
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <select
            style={{
              padding: '0.25rem 0.7rem',
              borderRadius: '4px',
              border: '1.5px solid #bdbdbd',
              backgroundImage: "url('https://www.transparenttextures.com/patterns/wood.png'), linear-gradient(180deg, #ececec 0%, #bdbdbd 100%)",
              backgroundRepeat: 'repeat, no-repeat',
              backgroundSize: 'auto, 100% 100%',
              color: '#fff',
              fontFamily: 'Times, Times New Roman, times-roman, georgia, serif',
              fontSize: '0.95rem',
              outline: 'none',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
              transition: 'border 0.2s',
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 400,
            }}
            value={season}
            onChange={e => setSeason(e.target.value as 'may-october' | 'october-may')}
          >
            <option value="may-october" style={{ color: '#fff', background: '#bdbdbd' }}>{t.mayOct}</option>
            <option value="october-may" style={{ color: '#fff', background: '#bdbdbd' }}>{t.octMay}</option>
          </select>
        </div>
        <table style={{ width: '100%', maxWidth: '420px', borderCollapse: 'collapse', margin: '0 auto', fontFamily: 'Times, Times New Roman, times-roman, georgia, serif', fontSize: '0.98rem', color: '#444', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center', padding: '0.35rem', fontWeight: 'bold', fontSize: '0.95rem', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{t.dayLabel}</th>
              <th style={{ textAlign: 'center', padding: '0.35rem', fontWeight: 'bold', fontSize: '0.95rem', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{t.morning}</th>
              <th style={{ textAlign: 'center', padding: '0.35rem', fontWeight: 'bold', fontSize: '0.95rem', borderBottom: '1px solid #ddd' }}>{t.evening}</th>
            </tr>
          </thead>
          <tbody>
            {times[season].map((row: TimeRow, idx: number) => {
              // For Greek, replace AM/PM with π.μ./μ.μ.
              const formatTime = (time: string) => {
                if (lang !== 'gr') return time;
                return time.replace(/AM/g, 'π.μ.').replace(/PM/g, 'μ.μ.');
              };
              return (
                <tr key={row.day} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ textAlign: 'center', fontWeight: 'bold', padding: '0.35rem', borderRight: '1px solid #eee' }}>{lang === 'gr' ? t.days[idx] : row.day}</td>
                  <td style={{ textAlign: 'center', padding: '0.35rem', borderRight: '1px solid #eee' }}>{row.morning === 'Closed' && lang === 'gr' ? t.closed : formatTime(row.morning)}</td>
                  <td style={{ textAlign: 'center', padding: '0.35rem' }}>{row.evening === 'Closed' && lang === 'gr' ? t.closed : formatTime(row.evening)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
          marginTop: '2.5rem',
          textAlign: 'center',
          position: 'relative',
        }}>
          {t.title}
          <span style={{
            display: 'block',
            width: '50px',
            height: '4px',
            background: '#b6c2d1',
            borderRadius: '2px',
            margin: '12px auto 0',
          }}></span>
        </h2>
        <div style={{
          fontSize: '1.55rem',
          color: '#444',
          lineHeight: 1.8,
          fontFamily: 'Times, Times New Roman, times-roman, georgia, serif',
        }}>
          {t.body.split('\n').map((line, i) => <span key={i}>{line}<br /><br /></span>)}
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