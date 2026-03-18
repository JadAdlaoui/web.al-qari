import FadeIn from './FadeIn';
import WaitlistForm from './WaitlistForm';

const perks = [
  'Gratis toegang tijdens de testfase',
  'Exclusieve early adopter badge',
  'Jouw feedback bepaalt de richting van de app',
];

const GeoOrnament = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" width="320" height="320"
    className="absolute -right-16 -top-16 pointer-events-none opacity-100" aria-hidden="true">
    <g stroke="#C5942A" strokeWidth="0.6" opacity="0.2">
      <polygon points="100,5 118,60 175,60 129,93 147,148 100,115 53,148 71,93 25,60 82,60" />
      <polygon points="100,20 114,62 158,62 122,87 136,129 100,104 64,129 78,87 42,62 86,62" />
      <circle cx="100" cy="100" r="80" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="40" />
      <line x1="100" y1="5" x2="100" y2="195" />
      <line x1="5" y1="100" x2="195" y2="100" />
      <line x1="29" y1="29" x2="171" y2="171" />
      <line x1="171" y1="29" x2="29" y2="171" />
    </g>
  </svg>
);

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-14"
          style={{ background: 'var(--primary)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <GeoOrnament />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <FadeIn>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
                  style={{ background: 'rgba(197,148,42,0.15)', color: 'var(--gold)' }}>
                  Vroege toegang
                </span>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Wees er vroeg bij
                </h2>
              </FadeIn>
              <FadeIn delay={120}>
                <p className="text-sm leading-relaxed mb-8 opacity-60 text-white">
                  Schrijf je in voor de wachtrij en word als eerste uitgenodigd voor de testfase van Al-Qari. Jouw naam en e-mailadres zijn voldoende — we nemen contact op wanneer de app klaar is.
                </p>
              </FadeIn>
              <FadeIn delay={160}>
                <div className="flex flex-col gap-3">
                  {perks.map((p) => (
                    <div key={p} className="flex items-center gap-3 text-sm text-white opacity-80">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(197,148,42,0.2)' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {p}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right column — form */}
            <FadeIn delay={100}>
              <WaitlistForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
