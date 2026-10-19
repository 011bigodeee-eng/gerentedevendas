import Image from 'next/image';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { profile } from '@/data/profile';
import Reveal from '@/components/reveal';

export default function RecognitionFeature() {
  return <section className="section recognition recognition-editorial" id="reconhecimento">
    <Reveal className="recognition-story"><div className="eyebrow"><span />RECONHECIMENTO / ABR—JUN 2026</div><BadgeCheck size={36} strokeWidth={1.2} aria-hidden="true" /><h2>Reconhecimento<br /><em>em vendas.</em></h2><p className="recognition-award">Melhor vendedor em produção do trimestre.</p><p>Registro de Marcus Vinicius referente a abril a junho de 2026, conforme a placa fornecida. Uma conquista apresentada com seu período e contexto.</p><div className="recognition-dateline"><span>PERÍODO DO RECONHECIMENTO</span><strong>Abril — Junho / 2026</strong></div><a href="#contato" className="text-link">Conheça Marcus em uma conversa <ArrowUpRight size={18} /></a></Reveal>
    <Reveal className="recognition-art"><figure><div className="recognition-art-label"><span>REGISTRO PROFISSIONAL</span><span>MV / 01</span></div><Image src={profile.recognitionPhoto} alt="Placa de Marcus Vinicius: melhor vendedor em produção do trimestre, abril a junho de 2026" width={1202} height={1216} quality={95} sizes="(max-width: 760px) 88vw, 720px" /><figcaption>Fotografia fornecida e autorizada por Marcus Vinicius.</figcaption></figure></Reveal>
  </section>;
}
