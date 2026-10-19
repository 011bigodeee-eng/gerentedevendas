'use client';

import { motion, useReducedMotion } from 'motion/react';

/** Content stays visible in server HTML; entries replay when it returns to view. */
export default function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div
    className={className}
    initial={false}
    whileInView={reduced ? undefined : { opacity: [.15, 1], y: [32, 0], scale: [.985, 1] }}
    viewport={{ once: false, amount: .12, margin: '0px 0px -24px 0px' }}
    transition={{ duration: .8, delay, ease: [.22, 1, .36, 1] }}
  >{children}</motion.div>;
}
