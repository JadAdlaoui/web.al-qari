'use client';

import { useState, useRef } from 'react';

type State = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm({ onSuccess }: { onSuccess?: (total: number) => void }) {
  const [state, setState] = useState<State>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});

  const nameRef  = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const name  = nameRef.current?.value.trim() ?? '';
    const email = emailRef.current?.value.trim() ?? '';
    const phone = phoneRef.current?.value.trim() ?? '';

    const errs: typeof fieldErrors = {};
    if (!name) errs.name = 'Vul je naam in.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Vul een geldig e-mailadres in.';
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }
    setFieldErrors({});

    setState('loading');
    setErrorMsg('');

    try {
      const res  = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
      const body = await res.json();

      if (res.ok) {
        setState('success');
        onSuccess?.(body.total);
      } else if (res.status === 409) {
        setFieldErrors({ email: body.error });
        setState('idle');
      } else {
        setErrorMsg(body.error ?? 'Er is iets misgegaan. Probeer het opnieuw.');
        setState('error');
      }
    } catch {
      setErrorMsg('Geen verbinding. Controleer je internet en probeer het opnieuw.');
      setState('error');
    }
  }

  const inputClass = (err?: string) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all text-white placeholder-white/30 bg-white/8 border ${
      err ? 'border-red-400 shadow-[0_0_0_3px_rgba(239,68,68,0.2)]' : 'border-white/15 focus:border-emerald-400 focus:shadow-[0_0_0_3px_rgba(27,138,107,0.25)]'
    }`;

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-8 gap-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(27,138,107,0.15)' }}>
          <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
            <path d="M8 20l8 8 16-16" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold" style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }} lang="ar" dir="rtl">
          جَزَاكَ اللَّهُ خَيْرًا
        </h3>
        <p className="font-semibold text-white">Je bent toegevoegd aan de wachtrij.</p>
        <p className="text-sm opacity-60 text-white max-w-xs">
          We sturen je een e-mail zodra Al-Qari beschikbaar is. Moge Allah jouw intentie rijkelijk belonen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5 text-white/70">
            Naam <span style={{ color: 'var(--gold)' }}>*</span>
          </label>
          <input ref={nameRef} type="text" placeholder="Jouw naam" autoComplete="given-name"
            className={inputClass(fieldErrors.name)}
            onChange={() => setFieldErrors((p) => ({ ...p, name: undefined }))} />
          {fieldErrors.name && <p className="text-xs mt-1" style={{ color: '#fca5a5' }}>{fieldErrors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5 text-white/70">
            E-mailadres <span style={{ color: 'var(--gold)' }}>*</span>
          </label>
          <input ref={emailRef} type="email" placeholder="jouw@email.com" autoComplete="email"
            className={inputClass(fieldErrors.email)}
            onChange={() => setFieldErrors((p) => ({ ...p, email: undefined }))} />
          {fieldErrors.email && <p className="text-xs mt-1" style={{ color: '#fca5a5' }}>{fieldErrors.email}</p>}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-semibold mb-1.5 text-white/70">
          Telefoonnummer{' '}
          <span className="font-normal opacity-50">(optioneel)</span>
        </label>
        <input ref={phoneRef} type="tel" placeholder="+31 6 12345678" autoComplete="tel"
          className={inputClass()} />
      </div>

      {/* Error banner */}
      {state === 'error' && (
        <div className="px-4 py-3 rounded-xl text-sm" style={{ background: 'rgba(239,68,68,0.15)', color: '#fca5a5' }}>
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold text-sm transition-all mt-1"
        style={{
          background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
          color: 'white',
          opacity: state === 'loading' ? 0.8 : 1,
        }}
      >
        {state === 'loading' ? (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <path d="M9 2a7 7 0 017 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Aanmelden...
          </>
        ) : (
          'Aanmeld voor wachtrij'
        )}
      </button>

      <p className="text-xs text-center opacity-40 text-white">
        We respecteren je privacy. Geen spam, alleen essentiële updates over Al-Qari.
      </p>
    </form>
  );
}
