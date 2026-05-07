'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/hooks/use-scroll-animation';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  customDelay?: number;
  variants?: typeof fadeUp;
};

export function AnimatedSection({ 
  children, 
  className, 
  delay = 0, 
  customDelay,
  variants = fadeUp 
}: AnimatedSectionProps) {
  const finalDelay = customDelay !== undefined ? customDelay : delay;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as any, delay: finalDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
