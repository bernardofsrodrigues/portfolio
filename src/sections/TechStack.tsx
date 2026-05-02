import { motion } from "framer-motion";
import { Server, Layout, Database, Wrench, FlaskConical } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { content } from "@/data/content";
import { techStack } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";

const iconMap = {
  backend: Server,
  frontend: Layout,
  database: Database,
  testing: FlaskConical,
  tools: Wrench,
};

const levelColor = (lvl: string) => {
  if (lvl.startsWith("Av")) return "text-emerald border-emerald/40 bg-emerald/10";
  if (lvl.startsWith("Int")) return "text-cyan border-cyan/40 bg-cyan/10";
  return "text-muted-foreground border-border bg-surface";
};

export function TechStack() {
  const { lang } = useLang();
  const t = content[lang].tech;

  const cats = [
    { key: "backend" as const, items: techStack.backend, span: "lg:col-span-3" },
    { key: "frontend" as const, items: techStack.frontend, span: "lg:col-span-3" },
    { key: "database" as const, items: techStack.database, span: "lg:col-span-2" },
    { key: "testing" as const, items: techStack.testing, span: "lg:col-span-2" },
    { key: "tools" as const, items: techStack.tools, span: "lg:col-span-2" },
  ];

  return (
    <section
      id="tech"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 overflow-x-hidden bg-surface/30"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader label={t.label} title={t.title} subtitle={t.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-fr">
          {cats.map((cat, idx) => {
            const Icon = iconMap[cat.key];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-2xl border border-border bg-card p-6 hover:border-emerald/40 transition-colors ${cat.span}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display font-semibold text-lg">{t.categories[cat.key]}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between gap-2">
                        <span className="text-foreground/90">{item.name}</span>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${levelColor(item.level)}`}
                        >
                          {item.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
