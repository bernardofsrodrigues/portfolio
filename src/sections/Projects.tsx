import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Github, ArrowRight, TrendingUp } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { content, projectsData } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Carousel } from "@/components/Carousel";
import imgManagement from "@/assets/project-management.jpg";
import imgAutomation from "@/assets/project-automation.jpg";
import imgEcommerce from "@/assets/project-ecommerce.jpg";
import imgEco from "@/assets/project-eco.jpg";
import imgFgts from "@/assets/project-fgts.jpg";
import imgRecipes from "@/assets/project-recipes.jpg";

const GITHUB = "https://github.com/bernardofsrodrigues";

const meta: Record<string, { image: string; tech: string[]; github: string }> = {
  "so-limpeza-backend": {
    image: imgEcommerce,
    tech: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    github: GITHUB,
  },
  appsupergestao: {
    image: imgManagement,
    tech: ["Laravel", "PHP", "Blade", "MySQL", "JavaScript"],
    github: GITHUB,
  },
  meulivroreceitas: {
    image: imgRecipes,
    tech: ["C#", ".NET", "EF Core", "JWT"],
    github: GITHUB,
  },
  "facta-api": {
    image: imgFgts,
    tech: ["Node.js", "Express", "Axios"],
    github: GITHUB,
  },
  amilbot: {
    image: imgAutomation,
    tech: ["Python", "Selenium", "Pandas"],
    github: GITHUB,
  },
  ecoestrutura: {
    image: imgEco,
    tech: ["ESG", "Sustentabilidade", "Web"],
    github: GITHUB,
  },
};

export function Projects() {
  const { lang } = useLang();
  const t = content[lang].projects;
  const order = [
    "ecoestrutura",
    "amilbot",
    "so-limpeza-backend",
    "facta-api",
    "meulivroreceitas",
    "appsupergestao",
  ];
  const all = projectsData(lang);
  const projects = order
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader label={t.label} title={t.title} subtitle={t.subtitle} />

        <Carousel slideClassName="basis-full md:basis-1/2" ariaLabel={t.title}>
          {projects.map((p, i) => {
            const m = meta[p.slug];
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-emerald/40 transition-all duration-300 hover:shadow-glow flex flex-col"
              >
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="relative aspect-[16/10] overflow-hidden bg-surface block"
                >
                  <img
                    src={m.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </Link>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold">{p.title}</h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-emerald mb-1">
                        {t.problem}
                      </p>
                      <p className="text-muted-foreground">{p.problem}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-cyan mb-1">
                        {t.solution}
                      </p>
                      <p className="text-muted-foreground">{p.solution}</p>
                    </div>
                  </div>

                  {/* Impact metrics */}
                  <div className="rounded-lg border border-emerald/20 bg-emerald/5 p-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-emerald mb-2 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" /> {t.impact}
                    </p>
                    <ul className="space-y-1">
                      {p.impact.map((it) => (
                        <li key={it} className="text-xs text-foreground/80 flex gap-2">
                          <span className="text-emerald shrink-0">→</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                    {m.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded-md border border-emerald/30 text-emerald"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2 mt-auto">
                    <a
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-emerald transition-colors"
                    >
                      <Github className="h-4 w-4" /> {t.code}
                    </a>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-emerald hover:gap-2 transition-all"
                    >
                      {t.details}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
