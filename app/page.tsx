import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';

/* Islamic geometric background SVG (fixed, behind everything) */
function GeoBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="islamicPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#1A5C47" strokeWidth="0.5" opacity="0.12">
              <polygon points="50,10 61,35 88,35 67,52 75,77 50,62 25,77 33,52 12,35 39,35" />
              <polygon points="50,20 58,38 78,38 63,50 69,70 50,58 31,70 37,50 22,38 42,38" transform="rotate(22.5, 50, 50)" />
              <line x1="0" y1="50" x2="100" y2="50" />
              <line x1="50" y1="0" x2="50" y2="100" />
              <line x1="0" y1="0" x2="100" y2="100" />
              <line x1="100" y1="0" x2="0" y2="100" />
              <circle cx="50" cy="50" r="30" />
              <circle cx="50" cy="50" r="20" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamicPattern)" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <GeoBg />
      <div className="relative z-10">
        <Header />
        <main>
          <WaitlistSection />
          <Hero />
          <Features />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </>
  );
}
