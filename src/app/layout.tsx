import type { Metadata } from 'next';
import './globals.css';
import './enhancements.css';
export const metadata: Metadata = { title: 'Marcus Vinicius — Gerente de Vendas | Estratégia e liderança comercial', description: 'Liderança comercial, desenvolvimento de equipes e processos de vendas. Conheça a proposta profissional de Marcus Vinicius e inicie uma conversa.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
