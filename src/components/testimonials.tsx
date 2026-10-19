import { MessagesSquare, Quote } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Testimonials() {
  const authorized = profile.testimonials.filter(item => item.authorized);
  if (authorized.length === 0) return <div className="testimonial-placeholder testimony-empty"><MessagesSquare size={30} strokeWidth={1} /><span className="tiny-label">ESPAÇO RESERVADO / VOZES REAIS</span><h3>Histórias reais merecem palavras reais.</h3><p>Aqui serão apresentados depoimentos autorizados de clientes ou colegas, com nome e contexto profissional.</p><div className="testimony-slots" aria-hidden="true"><span>01 / RELATO</span><span>02 / CONTEXTO</span><span>03 / AUTORIZAÇÃO</span></div><span className="inline-note">Nenhum depoimento publicado nesta prévia.</span></div>;
  return <div className="testimony-list">{authorized.map(item => <figure className="testimony-card" key={`${item.name}-${item.quote}`}><Quote size={24} aria-hidden="true" /><blockquote>{item.quote}</blockquote><figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption></figure>)}</div>;
}
