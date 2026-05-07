'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Factory, Leaf, Truck, type LucideIcon } from 'lucide-react';

type BusinessUnitCardProps = {
  title: string;
  areas: ReadonlyArray<string>;
  area: string;
  output: string;
  highlights: ReadonlyArray<string>;
  imgSrc: string;
  iconKey: 'leaf' | 'factory' | 'truck';
  reverse?: boolean;
};

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const iconMap: Record<BusinessUnitCardProps['iconKey'], LucideIcon> = {
  leaf: Leaf,
  factory: Factory,
  truck: Truck,
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function BusinessUnitCard({
  title,
  areas,
  area,
  output,
  highlights,
  imgSrc,
  iconKey,
  reverse = false,
}: BusinessUnitCardProps) {
  const Icon = iconMap[iconKey];

  return (
    <motion.article
      className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${reverse ? 'lg:order-last' : ''}`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Image src={imgSrc} alt={title} fill className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.14)_50%,transparent_70%)]"
          animate={{ x: ['-18%', '18%'] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-6 left-6 right-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={cardVariants}
        >
          <motion.div
            variants={textItemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center"
          >
            <p className="text-primary font-bold text-lg">{area}</p>
            <p className="text-xs text-muted-foreground">Capacity</p>
          </motion.div>
          <motion.div
            variants={textItemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center"
          >
            <p className="text-primary font-bold text-sm leading-tight">{output}</p>
            <p className="text-xs text-muted-foreground">Output</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div variants={cardVariants} className="space-y-6">
        <motion.div
          className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center"
          variants={textItemVariants}
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>
        <motion.h3 variants={textItemVariants} className="text-3xl font-bold text-foreground">
          {title}
        </motion.h3>
        <motion.div variants={textItemVariants} className="flex flex-wrap gap-2">
          {areas.map((areaLabel) => (
            <span
              key={areaLabel}
              className="text-xs font-semibold bg-primary/8 text-primary px-3 py-1.5 rounded-full border border-primary/20"
            >
              {areaLabel}
            </span>
          ))}
        </motion.div>
        <motion.ul variants={cardVariants} className="space-y-3">
          {highlights.map((highlight, index) => (
            <motion.li
              key={highlight}
              variants={textItemVariants}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <motion.div
                className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.2 }}
              />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.article>
  );
}
