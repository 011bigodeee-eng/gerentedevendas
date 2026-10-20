import type { Metadata } from 'next';
import './globals.css';
import './enhancements.css';
import './sections.css';
import './desktop.css';
import './polish.css';
import './intro-loading.css';
import './theme.css';
import './navigation.css';
import './editorial.css';
import './lions.css';
import { introBootstrap } from '@/lib/intro';
export const metadata: Metadata = { title: 'Marcus Vinicius — Gerente de Vendas | Estratégia e liderança comercial', description: 'Marcus Vinicius, gerente de vendas com atuação em soluções de crédito. Conheça sua apresentação profissional e solicite uma simulação pelo WhatsApp.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" suppressHydrationWarning><head><script id="intro-bootstrap" dangerouslySetInnerHTML={{ __html: introBootstrap }} /><noscript><style>{'.cinematic-intro,.replay-intro{display:none!important}'}</style></noscript></head><body>{children}</body></html>; }
