import FadeIn from './FadeIn';

const features = [
  {
    iconBg: 'var(--accent-light)',
    iconColor: 'var(--emerald)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="9" y="2" width="8" height="13" rx="4" fill="var(--emerald)" />
        <path d="M4 13C4 18 8 21.5 13 21.5C18 21.5 22 18 22 13" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="13" y1="21.5" x2="13" y2="25" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="25" x2="17" y2="25" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Recitation Mode',
    desc: 'Reciteer een gekozen ayah of bereik uit het hoofd. Na afloop analyseert de app je opname en geeft feedback op uitspraak en tajweed.',
    pills: ['Reciteer uit hoofd', 'Feedback achteraf', 'Tajweed analyse'],
    accent: false,
  },
  {
    iconBg: 'var(--gold-light)',
    iconColor: 'var(--gold)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke="var(--gold)" strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="13" cy="13" r="5.5" stroke="var(--gold)" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="13" cy="13" r="2.5" fill="var(--gold)" />
        <path d="M21 7C24 9 24 17 21 19" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M5 7C2 9 2 17 5 19" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    title: 'Quran Shazam',
    desc: 'Neem een recitatie op en de app herkent automatisch welke soerah en ayah worden gereciteerd.',
    pills: ['Soerah herkenning', 'Ayah identificatie', 'Qari detectie'],
    accent: false,
  },
  {
    iconBg: 'var(--accent-light)',
    iconColor: 'var(--emerald)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M5 7C5 5.9 5.9 5 7 5L12 5C13.1 5 14 5.9 14 7L14 20C14 20 11 18.5 8 19C5 19.5 5 20 5 20Z" fill="var(--emerald)" opacity="0.9" />
        <path d="M21 7C21 5.9 20.1 5 19 5L14 5C12.9 5 12 5.9 12 7L12 20C12 20 15 18.5 18 19C21 19.5 21 20 21 20Z" fill="var(--emerald)" opacity="0.9" />
        <rect x="11.5" y="4.5" width="3" height="16" rx="1.5" fill="var(--gold)" />
      </svg>
    ),
    title: 'Read Quran',
    desc: 'Blader door alle soerahs, zoek op naam of nummer en luister per ayah of volledige soerah.',
    pills: ['Alle soerahs', 'Zoeken', 'Luisteren per ayah'],
    accent: false,
  },
  {
    iconBg: 'var(--accent-light)',
    iconColor: 'var(--emerald)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="15" width="4" height="8" rx="1.5" fill="var(--emerald)" opacity="0.5" />
        <rect x="9" y="10" width="4" height="13" rx="1.5" fill="var(--emerald)" opacity="0.7" />
        <rect x="15" y="6" width="4" height="17" rx="1.5" fill="var(--emerald)" />
        <rect x="21" y="12" width="4" height="11" rx="1.5" fill="var(--emerald)" opacity="0.6" />
        <path d="M3 4l5 4 5-3 5 3 5-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: 'Progress Tracking',
    desc: 'Overzicht van al je oefensessies met statistieken zoals scores, aantal sessies en je voortgang door de tijd.',
    pills: ['Sessie scores', 'Statistieken', 'Voortgang'],
    accent: false,
  },
  {
    iconBg: 'var(--gold-light)',
    iconColor: 'var(--gold)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="var(--gold)" strokeWidth="1.5" fill="none" />
        <path d="M13 8v6l4 2" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="13" r="2" fill="var(--gold)" opacity="0.3" />
      </svg>
    ),
    title: 'Detailed Feedback',
    desc: 'Na elke sessie krijg je een analyse met tajweed-regels, fouten, sterke punten en concrete tips om te verbeteren.',
    pills: ['Tajweed regels', 'Fouten analyse', 'Verbeterpunten'],
    accent: false,
  },
];

export default function Features() {
  return (
    <section className="py-20 px-5 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: 'var(--accent-light)', color: 'var(--emerald)' }}>
            Functionaliteiten
          </span>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Alles voor je Qur'an-recitatie<br />in één app
          </h2>
        </FadeIn>
        <FadeIn delay={160}>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Van oefenen en feedback ontvangen tot soerahs herkennen en je voortgang bijhouden.
          </p>
        </FadeIn>
      </div>

      {/* Top row: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        {features.slice(0, 3).map((f, i) => (
          <FadeIn key={f.title} delay={i * 80}>
            <FeatureCard f={f} />
          </FadeIn>
        ))}
      </div>

      {/* Bottom row: 2 cards centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-2xl md:mx-auto">
        {features.slice(3).map((f, i) => (
          <FadeIn key={f.title} delay={i * 80}>
            <FeatureCard f={f} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ f }: { f: typeof features[0] }) {
  return (
    <div
      className="rounded-2xl p-7 h-full flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: f.accent ? 'var(--primary)' : '#fff',
        border: f.accent ? 'none' : '1px solid var(--border)',
        boxShadow: f.accent
          ? '0 8px 32px rgba(12,59,46,0.25)'
          : '0 2px 12px rgba(12,59,46,0.06)',
      }}
    >
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ background: f.accent ? 'rgba(255,255,255,0.1)' : f.iconBg }}>
        {f.icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2"
          style={{ color: f.accent ? 'white' : 'var(--text)' }}>
          {f.title}
        </h3>
        <p className="text-sm leading-relaxed"
          style={{ color: f.accent ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)' }}>
          {f.desc}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {f.pills.map((p) => (
          <span key={p} className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: f.accent ? 'rgba(255,255,255,0.1)' : 'var(--accent-light)',
              color: f.accent ? 'rgba(255,255,255,0.85)' : 'var(--emerald)',
            }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
