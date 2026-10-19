'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { profile } from '@/data/profile';

import { INTRO_SESSION_KEY } from '@/lib/intro';

export default function CinematicIntro() {
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const skipRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const finish = useCallback(() => {
    setPlaying(false);
    document.documentElement.setAttribute('data-intro-state', 'skip');
    try { sessionStorage.setItem(INTRO_SESSION_KEY, '1'); } catch { /* Storage may be unavailable. */ }
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { setReduced(preference.matches); if (preference.matches) { setPlaying(false); document.documentElement.setAttribute('data-intro-state', 'skip'); } };
    update();
    let seen = false;
    try { seen = sessionStorage.getItem(INTRO_SESSION_KEY) === '1'; } catch { /* Continue without persistence. */ }
    const shouldPlay = !preference.matches && !seen;
    setPlaying(shouldPlay);
    setReady(true);
    document.documentElement.setAttribute('data-intro-state', shouldPlay ? 'playing' : 'skip');
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!playing || !ready) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    skipRef.current?.focus({ preventScroll: true });
    const timer = window.setTimeout(finish, 3900);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish();
      if (event.key === 'Tab') { event.preventDefault(); skipRef.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus({ preventScroll: true });
    };
  }, [playing, ready, finish]);

  return <>
    {!reduced && <button className="replay-intro" onClick={() => { document.documentElement.setAttribute('data-intro-state', 'playing'); setPlaying(true); }}><Play size={12} /> Rever abertura</button>}
    {playing && <div className={`cinematic-intro${ready ? ' is-playing' : ''}`} role="dialog" aria-modal="true" aria-label={`Abertura de ${profile.name}`}>
      <div className="intro-grain" aria-hidden="true" />
      <div className="intro-lightfield" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ '--i': i } as React.CSSProperties} />)}</div>
      <div className="intro-stage" aria-hidden="true">
        <div className="intro-overline">UMA VISÃO. UM NOVO MOVIMENTO.</div>
        <div className="intro-monogram"><span>M</span><span>V</span><i /></div>
        <div className="intro-identity"><strong>{profile.name}</strong><span>{profile.role}</span></div>
        <div className="intro-rule" />
        <p>ESTRATÉGIA QUE MOVE RESULTADOS.</p>
      </div>
      <span className="intro-edition" aria-hidden="true">MV / APRESENTA</span>
      <button ref={skipRef} className="intro-skip" onClick={finish}>Pular abertura <ArrowRight size={15} /><X size={13} /></button>
      <div className="intro-timer" aria-hidden="true" />
    </div>}
  </>;
}
