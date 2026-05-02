import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { content, experienceData } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export function Experience() {
  const { lang } = useLang();
  const t = content[lang].experience;
  const edu = content[lang].education;
  const items = experienceData(lang);

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 overflow-x-hidden bg-surface/30"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader label={t.label} title={t.title} subtitle={t.subtitle} />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="relative pl-8 border-l-2 border-border space-y-10">
              {items.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-emerald">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                  </span>
                  <p className="font-mono text-xs text-emerald mb-1">{exp.date}</p>
                  <h3 className="text-xl font-display font-semibold mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-emerald mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> {edu.label}
              </p>
              <h3 className="text-xl font-display font-bold mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground mb-1">{edu.school}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-2">
                <Calendar className="h-3.5 w-3.5" /> {edu.period}
              </p>
              <span className="inline-block text-xs font-mono px-2 py-0.5 rounded-md bg-emerald/10 text-emerald border border-emerald/30">
                {edu.semester}
              </span>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> {edu.currently}
              </p>
              <ul className="space-y-2">
                {edu.currentTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
