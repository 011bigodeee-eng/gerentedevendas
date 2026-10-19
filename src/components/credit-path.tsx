'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import Reveal from '@/components/reveal';

export default function CreditPath({ onChoose }: { onChoose: (topic: string) => void }) {
  return <div className="credit-path">
    <div className="credit-path-copy">{profile.specialties.map((item, index) => <article className="credit-path-row" key={item.title}>
      <span className="credit-path-number">0{index + 1}</span><div><span className="tiny-label">{item.focus}</span><h3>{item.title}<em>.</em></h3><p>{item.text}</p><a className="text-link" href="#contato" onClick={() => onChoose(item.title)}>Começar por aqui <ArrowUpRight size={18} /></a></div>
    </article>)}</div>
    <Reveal className="credit-path-photo"><figure><Image src={profile.gallery[0].src} alt={profile.gallery[0].alt} width={958} height={1608} quality={90} sizes="(max-width: 760px) 88vw, 480px" /><figcaption><span>MARCUS VINICIUS</span><strong>Uma conversa.<br />O seu próximo passo.</strong></figcaption></figure></Reveal>
  </div>;
}
