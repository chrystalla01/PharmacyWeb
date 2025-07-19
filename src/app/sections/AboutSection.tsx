'use client';
import { useState } from 'react';

export default function AboutSection() {
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
          About Us
          <span style={{
            display: 'block',
            width: '60px',
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
          Established in 2012, Jomelita Pharmacy has been proudly serving the Dromolaxia community with trusted, professional care. Our team of licensed pharmacists brings over 30 years of experience to ensure you receive safe, informed, and friendly support every time you visit.<br /><br />
          We focus on creating a welcoming environment where you can get the advice and attention you need—whether you're managing prescriptions or simply looking for guidance.<br /><br />
          As a locally owned pharmacy, we’re committed to putting the health of our community first.
        </div>
        <h3 style={{ fontFamily: 'Gill Sans, Verdana', fontSize: '1.5rem',color: '#444',lineHeight: '16px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', margin: 0, marginBottom: '0.5rem', marginTop: '2.5rem' }}>Opening Times</h3>
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
            <option value="may-october" style={{ color: '#fff', background: '#bdbdbd' }}>May–October</option>
            <option value="october-may" style={{ color: '#fff', background: '#bdbdbd' }}>October–May</option>
          </select>
        </div>
        <table style={{ width: '100%', maxWidth: '420px', borderCollapse: 'collapse', margin: '0 auto', fontFamily: 'Times, Times New Roman, times-roman, georgia, serif', fontSize: '0.98rem', color: '#444', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center', padding: '0.35rem', fontWeight: 'bold', fontSize: '0.95rem', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>Day</th>
              <th style={{ textAlign: 'center', padding: '0.35rem', fontWeight: 'bold', fontSize: '0.95rem', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>Morning</th>
              <th style={{ textAlign: 'center', padding: '0.35rem', fontWeight: 'bold', fontSize: '0.95rem', borderBottom: '1px solid #ddd' }}>Evening</th>
            </tr>
          </thead>
          <tbody>
            {times[season].map((row: TimeRow, idx: number) => (
              <tr key={row.day} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ textAlign: 'center', fontWeight: 'bold', padding: '0.35rem', borderRight: '1px solid #eee' }}>{row.day}</td>
                <td style={{ textAlign: 'center', padding: '0.35rem', borderRight: '1px solid #eee' }}>{row.morning}</td>
                <td style={{ textAlign: 'center', padding: '0.35rem' }}>{row.evening}</td>
              </tr>
            ))}
          </tbody>
        </table>
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