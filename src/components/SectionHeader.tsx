import { motion } from "framer-motion";

export function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 sm:mb-16 max-w-2xl"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald mb-3 sm:mb-4">/ {label}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight">{title}</h2>
      {subtitle && <p className="text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
