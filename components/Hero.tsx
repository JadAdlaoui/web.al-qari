import Image from 'next/image';
import FadeIn from './FadeIn';
import Counter from './Counter';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-5 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div className="flex flex-col items-start gap-5">
          <FadeIn>
            <p
              className="text-xl tracking-wide"
              style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif', direction: 'rtl' }}
              lang="ar" dir="rtl"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
          </FadeIn>

          <FadeIn delay={50}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: 'var(--accent-light)', color: 'var(--emerald)' }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', background: 'var(--emerald)',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              Binnenkort beschikbaar — iOS & Android
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-5xl font-bold leading-tight tracking-tight" style={{ color: 'var(--text)' }}>
              Oefen je<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--gold) 0%, var(--primary-mid) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Quran recitatie
              </span><br />
              met AI
            </h1>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)', maxWidth: 420 }}>
              Al-Qari helpt moslims bij het oefenen, begrijpen en verbeteren van hun Qur'an-recitatie.
              Reciteer, ontvang feedback, herken soerahs en volg je voortgang allemaal in één app.
            </p>
          </FadeIn>

          {/* Social proof */}
          <FadeIn delay={200}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#1B8A6B', '#C5942A', '#0C3B2E', '#1A5C47'].map((bg, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white" style={{ background: bg }} />
                ))}
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                <Counter />+ mensen al aangemeld
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%)' }}
            >
              Word als eerste uitgenodigd
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </FadeIn>
        </div>

        {/* Right — app screenshot */}
        <FadeIn delay={200} className="flex justify-center md:justify-end">
          <div className="phone-float relative" style={{ width: 260 }}>
            {/* Glow behind phone */}
            <div className="absolute inset-0 rounded-[48px] blur-3xl opacity-20"
              style={{ background: 'var(--primary)', transform: 'scale(0.85) translateY(8%)' }} />

            {/* iPhone frame */}
            <div className="relative" style={{
              width: 260,
              height: 530,
              borderRadius: 44,
              background: '#1a1a1e',
              boxShadow: '0 0 0 1.5px #3a3a3c, 0 0 0 3px #1a1a1e, inset 0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.35)',
              padding: 10,
              overflow: 'hidden',
            }}>
              {/* Side buttons left */}
              <div style={{ position: 'absolute', left: -3, top: 90, width: 3, height: 32, borderRadius: '2px 0 0 2px', background: '#3a3a3c' }} />
              <div style={{ position: 'absolute', left: -3, top: 134, width: 3, height: 52, borderRadius: '2px 0 0 2px', background: '#3a3a3c' }} />
              <div style={{ position: 'absolute', left: -3, top: 198, width: 3, height: 52, borderRadius: '2px 0 0 2px', background: '#3a3a3c' }} />
              {/* Side button right */}
              <div style={{ position: 'absolute', right: -3, top: 148, width: 3, height: 72, borderRadius: '0 2px 2px 0', background: '#3a3a3c' }} />

              {/* Screen */}
              <div style={{ width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden', background: '#fff', position: 'relative' }}>
                {/* Dynamic island */}
                <div style={{
                  position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
                  width: 88, height: 26, borderRadius: 20, background: '#000', zIndex: 10,
                }} />
                <Image
                  src="/mockup.png"
                  alt="Al-Qari app screenshot"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
