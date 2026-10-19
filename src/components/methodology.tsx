'use client';

import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Compass } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Methodology() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = profile.methodology[active];

  function select(index: number) {
    const next = (index + profile.methodology.length) % profile.methodology.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return <div className="method-workspace">
    <div className="method-tabs" role="tablist" aria-label="Etapas da metodologia">
      {profile.methodology.map((item, index) => <button key={item.title} ref={el => { tabs.current[index] = el; }} role="tab" id={`method-tab-${index}`} data-complete={index < active} aria-selected={active === index} aria-controls="method-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
        if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
          event.preventDefault();
          select(event.key === 'Home' ? 0 : event.key === 'End' ? profile.methodology.length - 1 : active + (['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1));
        }
      }}><span>0{index + 1}</span>{item.title}<ArrowUpRight size={16} /></button>)}
    </div>
    <div className="method-panel" role="tabpanel" id="method-panel" aria-labelledby={`method-tab-${active}`} tabIndex={0}>
      <div className="method-copy" key={step.title}>
        <span className="tiny-label">DA VISÃO À PRÁTICA / 0{active + 1}</span>
        <h3>{step.title}<em>.</em></h3><p>{step.description}</p>
        <ul>{step.actions.map(action => <li key={action}><Check size={16} />{action}</li>)}</ul>
        <div className="method-deliverable"><span>FOCO DA ETAPA</span><strong>{step.output}</strong></div>
      </div>
      <div className="method-object" aria-hidden="true"><div className="strategy-rings"><i /><i /><i /><Compass size={46} strokeWidth={1} /></div><span>VISÃO + AÇÃO</span></div>
    </div>
    <div className="method-navigation"><button onClick={() => select(active - 1)} disabled={active === 0}><ArrowLeft size={16} /> Etapa anterior</button><span aria-live="polite">ETAPA 0{active + 1} / 0{profile.methodology.length}</span><button onClick={() => select(active + 1)} disabled={active === profile.methodology.length - 1}>Próxima etapa <ArrowRight size={16} /></button></div><p className="method-disclaimer">Metodologia proposta · escopo e entregas a alinhar em cada projeto.</p>
  </div>;
}
