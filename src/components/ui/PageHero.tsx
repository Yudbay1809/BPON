'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type PageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  overlayColor?: string;
  tag: string;
  title: string;
};

export function PageHero({ imageSrc, imageAlt, overlayColor = 'bg-[#0d2e10]/80', tag, title }: PageHeroProps) {
  return (
    <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
        <div className={`absolute inset-0 ${overlayColor}`} />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.p
          className="text-accent text-sm font-bold tracking-widest uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tag}
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
