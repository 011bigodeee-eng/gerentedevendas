import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function LionsFeature() {
  return <section className="section lions-feature" aria-labelledby="lions-heading">
    <div className="lions-copy">
      <div className="eyebrow"><span />CONHEÇA A EQUIPE</div>
      <h2 id="lions-heading">Uma identidade.<br /><em>Equipe Lions.</em></h2>
      <p>Um espaço dedicado à equipe Lions no site de Marcus Vinicius. Conheça a identidade que faz parte desse ambiente de trabalho.</p>
      <Link href="/equipe-lions" className="button primary">Conhecer a equipe Lions <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </div>
    <Link href="/equipe-lions" className="lions-feature-photo" aria-label="Conhecer a equipe Lions e ver a fotografia completa">
      <Image src="/images/lions/equipe-lions.jpeg" alt="Identidade da equipe Lions com um leão dourado na bandeira e na tela de um notebook" width={720} height={1280} sizes="(max-width: 760px) 88vw, 420px" />
    </Link>
  </section>;
}
