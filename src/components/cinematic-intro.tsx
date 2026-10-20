'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
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
    const timer = window.setTimeout(finish, 7200);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish();
      if (event.key === 'Tab') { event.preventDefault(); skipRef.current?.focus({ preventScroll: true }); }
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
      <div className="mv-film" aria-hidden="true">
        <div className="mv-film-shot mv-film-shot-one">
          <Image src="/images/marcos/trabalho-tablet-alta.jpg" alt="" fill priority sizes="100vw" />
          <span className="mv-shot-caption">01 / PERSPECTIVA</span>
        </div>
        <div className="mv-film-shot mv-film-shot-two">
          <Image src="/images/marcos/retrato-profissional-alta.jpg" alt="" fill sizes="100vw" />
          <span className="mv-shot-caption">02 / PRESENÇA</span>
        </div>
        <div className="mv-film-shot mv-film-shot-three">
          <Image src={profile.photo} alt="" fill sizes="(max-width: 760px) 100vw, 65vw" />
        </div>
        <div className="mv-film-shade" />
        <div className="mv-film-grain" />
        <div className="mv-film-beam" />
        <div className="mv-film-prologue"><span>TODO OBJETIVO TEM UM COMEÇO.</span><p>Toda conquista começa<br />com uma <em>decisão.</em></p><i /></div>
        <div className="mv-film-intertitle"><span>UM OLHAR À FRENTE.</span><p>Clareza.<br /><em>Direção.</em></p></div>
        <div className="mv-film-title">
          <div className="mv-film-credit"><i />UMA NOVA PERSPECTIVA SOBRE CRÉDITO</div>
          <div className="mv-film-name"><span>Marcus</span><span>Vinicius<span className="mv-film-period">.</span></span></div>
          <div className="mv-film-role">{profile.role}<span />SOLUÇÕES DE CRÉDITO</div>
          <p>O seu próximo capítulo<br />começa com uma conversa.</p>
        </div>
        <div className="mv-film-seal">MV<span>EST. / CLAREZA & DIREÇÃO</span></div>
        <div className="mv-film-topline"><span>MV PICTURES <i /> APRESENTA</span><span>UM NOVO CAPÍTULO</span></div>
        <div className="mv-film-bottomline"><span>MARCUS VINICIUS / EDIÇÃO ORIGINAL</span><span className="mv-film-count"><span>01 — O COMEÇO</span><span>02 — A DIREÇÃO</span><span>03 — O PRÓXIMO PASSO</span></span></div>
        <div className="mv-film-letterbox mv-film-letterbox-top" />
        <div className="mv-film-letterbox mv-film-letterbox-bottom" />
      </div>
      <button ref={skipRef} className="intro-skip" onClick={finish}>Entrar no site <ArrowRight size={15} aria-hidden="true" /></button>
      <div className="intro-timer" aria-hidden="true" />
    </div>}
  </>;
}
