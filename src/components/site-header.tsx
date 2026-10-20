'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';

const links = [
  ['Sobre', 'sobre'], ['Seu objetivo', 'especialidades'],
  ['Metodologia', 'metodologia'], ['Informações', 'projetos'], ['Galeria', 'galeria'],
];

export default function SiteHeader({ onSimulation }: { onSimulation: () => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    const observeSections = () => {
      observer?.disconnect();
      const top = Math.min(150, Math.round(window.innerHeight * .2));
      const bottom = Math.max(0, window.innerHeight - top - 140);
      observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      }, { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0 });
      ['inicio', ...links.map(([, id]) => id), 'contato'].forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    };
    observeSections();
    window.addEventListener('resize', observeSections);
    return () => { observer.disconnect(); window.removeEventListener('resize', observeSections); };
  }, []);

  useEffect(() => {
    if (!open) return;
    header.current?.querySelector<HTMLAnchorElement>('.executive-link')?.focus({ preventScroll: true });
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open]);

  return <header className="executive-header" ref={header} onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <a className="executive-brand" href="#inicio" aria-label={`${profile.name}, início`} onClick={() => setOpen(false)}>
      <span className="executive-monogram" aria-hidden="true">MV<span /></span>
      <span className="executive-identity"><strong>{profile.name}</strong><span>CRÉDITO COM DIREÇÃO</span></span>
    </a>
    <nav id="main-navigation" aria-label="Navegação principal" className={`executive-nav${open ? ' is-open' : ''}`}>
      <div className="nav-introduction"><span>EXPLORE A VISÃO</span><span>MV / ÍNDICE</span></div>
      {links.map(([label, id], index) => <a key={id} href={`#${id}`} className="executive-link" aria-current={active === id ? 'location' : undefined} onClick={() => { setActive(id); setOpen(false); }}>
        <span className="executive-index" aria-hidden="true">0{index + 1}</span><span>{label}</span><ArrowUpRight size={16} className="nav-mobile-arrow" aria-hidden="true" />
      </a>)}
      <a href="/equipe-lions" className="executive-link"><span className="executive-index" aria-hidden="true">06</span><span>Equipe Lions</span><ArrowUpRight size={16} className="nav-mobile-arrow" aria-hidden="true" /></a>
      <a href="#contato" className="executive-cta" onClick={() => { onSimulation(); setOpen(false); }}><span><small>SEU PRÓXIMO PASSO</small><strong>Simular crédito</strong></span><span className="executive-cta-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span></a>
    </nav>
    <button ref={toggle} className="executive-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><span>{open ? 'Fechar' : 'Menu'}</span>{open ? <X size={20} /> : <Menu size={20} />}</button>
  </header>;
}
