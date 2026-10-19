'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Plus } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { profile, type PortfolioProject } from '@/data/profile';

export default function Portfolio() {
  const [category, setCategory] = useState('Todos');
  const reduced = useReducedMotion();
  const projects: PortfolioProject[] = profile.cases;
  const categories = ['Todos', ...new Set(projects.map(project => project.category))];
  const visible = projects.filter(project => category === 'Todos' || category === project.category);

  return <div className="portfolio-workspace">
    <div className="portfolio-toolbar"><div className="portfolio-filters" role="group" aria-label="Filtrar projetos por área">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><p role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'projeto' : 'projetos'}</p></div>
    <div className="project-grid">{visible.map(project => <motion.article className="project" key={project.title} initial={false} whileInView={reduced ? undefined : { opacity: [.15, 1], y: [30, 0] }} viewport={{ once: false, amount: .12 }} transition={{ duration: .8 }}>
      <div className={`project-visual visual-${projects.indexOf(project) % 2}`}>
        {project.image ? <Image quality={90} src={project.image} alt={`Projeto: ${project.title}`} fill sizes="(max-width: 760px) 88vw, 43vw" style={{ objectFit: 'cover' }} /> : <div aria-hidden="true">{projects.indexOf(project) % 2 === 0 ? <div className="diagram"><i /><i /><i /><i /><i /></div> : <div className="circles"><i /><i /><i /></div>}</div>}
        <span className="demo-badge">{project.demo ? 'DEMONSTRAÇÃO DE LAYOUT' : 'PROJETO PROFISSIONAL'}</span><span className="project-index">0{projects.indexOf(project) + 1}</span>
      </div>
      <div className="project-info"><span className="tiny-label">{project.category}</span><h3>{project.title}</h3><p>{project.text}</p><details className="project-details"><summary>{project.demo ? 'Explorar estrutura do projeto' : 'Conhecer o projeto'}<Plus size={17} /></summary><dl>{project.structure.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>{project.demo && <p className="inline-note">Estrutura demonstrativa · nenhum resultado atribuído a Marcus.</p>}<a href="#contato" className="text-link">Conversar sobre um projeto <ArrowUpRight size={16} /></a></details></div>
    </motion.article>)}</div>
  </div>;
}
