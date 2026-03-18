import FadeIn from './FadeIn';

const steps = [
  {
    num: '01',
    title: 'Kies een modus',
    desc: 'Selecteer Recitation Mode om uit het hoofd te reciteren, of gebruik Quran Shazam om een recitatie te herkennen.',
  },
  {
    num: '02',
    title: 'Reciteer & neem op',
    desc: 'Neem je recitatie op via de microfoon. De app analyseert je opname na afloop.',
  },
  {
    num: '03',
    title: 'Ontvang feedback & groei',
    desc: 'Bekijk je gedetailleerde analyse: tajweed-regels, fouten, sterke punten en tips. Volg je voortgang over tijd.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-5" style={{ background: 'var(--accent-light)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: 'white', color: 'var(--emerald)' }}>
              Hoe het werkt
            </span>
          </FadeIn>
          <FadeIn delay={80}>
            <h2 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>
              In drie stappen aan de slag
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 120}>
              <div className="p-7 rounded-2xl h-full flex flex-col gap-4"
                style={{ background: 'white', boxShadow: '0 2px 12px rgba(12,59,46,0.06)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white"
                  style={{ background: 'var(--primary)' }}>
                  {step.num}
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--text)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
