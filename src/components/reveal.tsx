'use client';

import { motion, useReducedMotion } from 'motion/react';

/** Content stays visible in server HTML; entries replay when it returns to view. */
export default function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div
    className={className}
    initial={false}
    whileInView={reduced ? undefined : { opacity: [.6, 1], y: [18, 0] }}
    viewport={{ once: true, amount: .12, margin: '0px 0px -24px 0px' }}
    transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}
  >{children}</motion.div>;
}
