import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Al-Qari — القارئ ',
  description:
    'Al-Qari is een AI-gestuurde Quran recitatie app die je helpt je tajweed en uitspraak te verbeteren. Word als eerste uitgenodigd.',
  icons: {
    icon: '/logo white.png',
  },
  openGraph: {
    title: 'Al-Qari — القارئ ',
    description: 'AI-gestuurde Quran recitatie met real-time tajweed feedback.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
