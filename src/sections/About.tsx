import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { content } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { JSX } from "react";

// Minimal SVG flag components — 3 countries used in portfolio
function FlagBR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
      <rect width="20" height="14" fill="#009c3b" />
      <polygon points="10,1.5 19,7 10,12.5 1,7" fill="#fedf00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
      <path d="M7.2 6.4 Q10 5.2 12.8 6.4" stroke="white" strokeWidth="0.5" fill="none" />
    </svg>
  );
}

function FlagUS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
      <rect width="20" height="14" fill="#B22234" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} x="0" y={y} width="20" height="1" fill="#fff" />
      ))}
      <rect width="8" height="7.5" fill="#3C3B6E" />
    </svg>
  );
}

function FlagES({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
      <rect width="20" height="14" fill="#c60b1e" />
      <rect y="3.5" width="20" height="7" fill="#ffc400" />
    </svg>
  );
}

const FlagMap: Record<string, (p: { className?: string }) => JSX.Element> = {
  BR: FlagBR,
  US: FlagUS,
  ES: FlagES,
};

export function About() {
  const { lang } = useLang();
  const t = content[lang].about;
  const langs = content[lang].languages;

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label={t.label} title={t.title} />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-4 sm:space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed break-words">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, label: "Belo Horizonte, MG" },
              { icon: GraduationCap, label: "PUC Minas — Eng. Software" },
              {
                icon: Briefcase,
                label:
                  lang === "pt"
                    ? "Aberto a oportunidades"
                    : lang === "es"
                      ? "Abierto a oportunidades"
                      : "Open to opportunities",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-foreground">{item.label}</span>
              </motion.div>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {t.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <div className="text-2xl font-bold text-gradient font-display">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-border bg-card p-5 space-y-3"
            >
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-cyan mb-3">
                / {langs.label}
              </p>
              {langs.items.map((item, i) => {
                const Flag = FlagMap[item.flag];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="shrink-0 w-7 h-5 rounded-sm overflow-hidden shadow-sm">
                      {Flag && <Flag className="w-full h-full" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{item.name}</span>
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-muted-foreground">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground break-words">{item.context}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
