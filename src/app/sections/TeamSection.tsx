
export default function TeamSection({ lang = 'en' }: { lang?: 'en' | 'gr' }) {
  const text = {
    en: {
      title: 'Our Team',
      members: [
        { name: 'Gabriela', img: 'imgs/gaby.jpg' },
        { name: 'Kalliopi' },
        { name: 'Philippos' },
        { name: 'Elena' },
      ],
    },
    gr: {
      title: 'Η Ομάδα μας',
      members: [
        { name: 'Γαβριέλλα', img: 'imgs/gaby.jpg' },
        { name: 'Καλλιόπη' },
        { name: 'Φίλιππος' },
        { name: 'Έλενα' },
      ],
    },
  };
  const t = text[lang];

  return (
    <section id="team" className="team-section" style={{ padding: '0 0 0.5rem 0' }}>
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
            width: '50px',
            height: '4px',
            background: '#b6c2d1',
            borderRadius: '2px',
            margin: '12px auto 0',
          }}></span>
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          maxWidth: '700px',
          margin: '2rem auto 0',
          padding: '0 1.5rem',
          alignItems: 'center',
        }}>
          {t.members.map((member, idx) => (
            <div
              key={member.name}
              style={{
                display: 'flex',
                flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
                background: '#f5f7fa',
                padding: '1.2rem',
                minHeight: '110px',
                width: '320px',
                maxWidth: '320px',
                gap: '0.7rem',
                animation: `slidein${idx % 2 === 0 ? 'Left' : 'Right'} 1.5s`,
                marginLeft: 0,
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
                overflow: 'hidden',
              }}>
                {member.img ? (
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                ) : (
                  <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>👤</span>
                )}
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