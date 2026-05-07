'use client';

import { motion } from 'framer-motion';

type BusinessMetricsBandProps = {
  items: ReadonlyArray<{ readonly label: string; readonly value: string }>;
};

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const metricVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.08 + index * 0.08,
      ease: smoothEase,
    },
  }),
};

export function BusinessMetricsBand({ items }: BusinessMetricsBandProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(201,162,39,0.16),_transparent_24%)]"
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-white/30"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute inset-y-0 left-1/2 w-px bg-white/12 hidden md:block"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative py-6 px-5 md:px-6 text-center border-r border-white/16 last:border-0 overflow-hidden"
              variants={metricVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <motion.div
                className="absolute inset-x-6 top-0 h-px bg-accent/80 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, delay: 0.18 + index * 0.08 }}
              />
              <motion.p
                className="text-2xl md:text-3xl font-bold text-accent"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: 0.16 + index * 0.08 }}
              >
                {item.value}
              </motion.p>
              <motion.p
                className="text-white/70 text-sm mt-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: 0.24 + index * 0.08 }}
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
