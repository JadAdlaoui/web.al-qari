import { NextRequest, NextResponse } from 'next/server';
import { appendEntry, emailExists, getCount } from '@/lib/sheets';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const count = await getCount();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Naam en e-mailadres zijn verplicht.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres.' },
        { status: 400 }
      );
    }

    if (await emailExists(email.trim())) {
      return NextResponse.json(
        { error: 'Dit e-mailadres staat al op de wachtrij.' },
        { status: 409 }
      );
    }

    await appendEntry(name.trim(), email.trim(), phone?.trim() ?? '');

    const total = await getCount();
    console.log(`[Al-Qari] Nieuwe aanmelding: ${name.trim()} <${email.trim()}>`);
    return NextResponse.json({ ok: true, total });
  } catch (err) {
    console.error('[Al-Qari] Fout bij opslaan:', err);
    return NextResponse.json(
      { error: 'Er is een serverfout opgetreden.' },
      { status: 500 }
    );
  }
}
