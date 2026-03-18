export default function Footer() {
  return (
    <footer className="py-12 px-5 text-center" style={{ background: 'var(--primary)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
        <div className="flex flex-col leading-none items-center">
          <span className="text-base font-bold" style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }} lang="ar">القارئ</span>
          <span className="text-xs font-semibold tracking-widest uppercase text-white opacity-60">Al-Qari</span>
        </div>

        <div>
          <p className="text-xl mb-1" style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }} lang="ar" dir="rtl">
            اِقۡرَاۡ بِاسۡمِ رَبِّكَ الَّذِىۡ خَلَقَ
          </p>
          <p className="text-xs opacity-40 text-white">
            Reciteer in de naam van jouw Heer die geschapen heeft — Al-&lsquo;Alaq 96:1
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs text-white opacity-40">
          <a href="mailto:info@adl-it.nl" className="hover:opacity-80 transition-opacity">Contact</a>
        </div>

        <p className="text-xs opacity-30 text-white">
          © {new Date().getFullYear()} Al-Qari. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
