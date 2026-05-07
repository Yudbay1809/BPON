'use client';

import { motion } from 'framer-motion';

type BusinessIntegrationFlowProps = {
  tag: string;
  title: string;
  desc: string;
  steps: ReadonlyArray<{ readonly step: string; readonly label: string; readonly desc: string }>;
};

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const flowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

export function BusinessIntegrationFlow({ tag, title, desc, steps }: BusinessIntegrationFlowProps) {
  return (
    <div className="text-center">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">{tag}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{desc}</p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-5xl mx-auto"
        variants={flowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, index) => (
          <div key={step.step} className="flex flex-col md:flex-row items-center group">
            <motion.div
              variants={stepVariants}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="relative bg-white rounded-3xl p-8 text-center border border-border/40 min-w-[180px] shadow-sm group-hover:shadow-xl group-hover:border-primary/30 transition-shadow"
            >
              <motion.div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.3em] text-white shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              >
                {step.step}
              </motion.div>

              <motion.div
                className="relative w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
              >
                <div className="w-2 h-2 rounded-full bg-accent absolute -right-0.5 -top-0.5 shadow-[0_0_0_8px_rgba(201,162,39,0.15)]" />
                <span className="text-primary text-xl font-black group-hover:text-white transition-colors">
                  {index + 1}
                </span>
              </motion.div>

              <p className="font-bold text-foreground text-lg mb-1">{step.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>

            {index < steps.length - 1 && (
              <>
                <div className="relative w-12 h-0.5 bg-primary/20 hidden md:block shrink-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, delay: 0.25 + index * 0.08 }}
                  />
                </div>
                <div className="relative w-0.5 h-10 bg-primary/20 md:hidden overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-primary origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, delay: 0.25 + index * 0.08 }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
