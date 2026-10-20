import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Equipe Lions | Marcus Vinicius',
  description: 'Conheça a identidade da equipe Lions em um espaço exclusivo no site de Marcus Vinicius.',
};

export default function LionsPage() {
  return <div className="lions-page">
    <a className="skip" href="#equipe-lions">Pular para o conteúdo</a>
    <header className="lions-page-header">
      <Link href="/" className="lions-home">MARCUS VINICIUS<span>GERENTE DE VENDAS</span></Link>
      <nav aria-label="Navegação da equipe Lions"><Link href="/" className="text-link"><ArrowLeft size={17} aria-hidden="true" /> Voltar ao início</Link></nav>
    </header>
    <main id="equipe-lions" className="section lions-detail">
      <div className="lions-copy">
        <div className="eyebrow"><span />IDENTIDADE & EQUIPE</div>
        <p className="lions-wordmark" aria-hidden="true">LIONS</p>
        <h1>Conheça a<br /><em>equipe Lions.</em></h1>
        <p className="lions-lead">Uma equipe. Uma identidade em comum.</p>
        <p>A Lions ganha um espaço próprio no site de Marcus Vinicius. O leão e os tons de dourado e azul-marinho marcam sua identidade, presente na bandeira e no dia a dia do ambiente de trabalho.</p>
        <p>Na fotografia, essa identidade aparece em dois detalhes: a bandeira da equipe e a tela do notebook.</p>
        <Link href="/#contato" className="button primary">Converse com Marcus <ArrowUpRight size={18} aria-hidden="true" /></Link>
        <div className="lions-signature"><span>EQUIPE LIONS</span><span>MARCUS VINICIUS</span></div>
      </div>
      <figure className="lions-full-photo">
        <div className="lions-photo-circle"><Image src="/images/lions/equipe-lions.jpeg" alt="Bandeira da equipe Lions no ambiente de trabalho, com o emblema do leão dourado também exibido na tela de um MacBook" width={720} height={1280} priority sizes="(max-width: 760px) 88vw, (max-width: 1200px) 44vw, 520px" /></div>
        <figcaption>Equipe Lions · Identidade no ambiente de trabalho.</figcaption>
      </figure>
    </main>
    <footer className="lions-footer"><span>Equipe Lions · Marcus Vinicius</span><Link href="/">Explorar o site <ArrowUpRight size={16} aria-hidden="true" /></Link></footer>
  </div>;
}
