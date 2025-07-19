export default function TeamSection() {
  return (
    <section id="team" className="team-section">
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
      }}>Our Team</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        maxWidth: '700px',
        margin: '2rem auto 0',
        padding: '0 1.5rem',
      }}>
        {[
          { name: 'Gabriela' },
          { name: 'Kalliopi' },
          { name: 'Philippos' },
          { name: 'Elena' },
        ].map((member, idx) => (
          <div
            key={member.name}
            style={{
              display: 'flex',
              flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              background: '#e0e7ef',
              borderRadius: '18px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              padding: '1.5rem',
              minHeight: '140px',
              gap: '2rem',
              animation: `slidein${idx % 2 === 0 ? 'Left' : 'Right'} 1.5s`,
            }}
          >
            <div style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: '#6b7280',
              border: '2px dashed #b6c2d1',
              flexShrink: 0,
            }}>
              <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>👤</span>
            </div>
            <div style={{
              fontFamily: 'Gill Sans, Verdana',
              color: '#444',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              textAlign: 'center',
              flex: 1,
            }}>{member.name}</div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes slideinLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideinRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
} 