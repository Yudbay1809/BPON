'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/hooks/use-scroll-animation';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: typeof fadeUp;
};

export function AnimatedSection({ children, className, delay = 0, variants = fadeUp }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
