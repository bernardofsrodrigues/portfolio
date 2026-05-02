import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  TrendingUp,
  Layers,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { content, projectsData } from "@/data/content";
import { Navbar } from "@/components/Navbar";
import imgManagement from "@/assets/project-management.jpg";
import imgAutomation from "@/assets/project-automation.jpg";
import imgEcommerce from "@/assets/project-ecommerce.jpg";
import imgEco from "@/assets/project-eco.jpg";
import imgFgts from "@/assets/project-fgts.jpg";
import imgRecipes from "@/assets/project-recipes.jpg";

const GITHUB = "https://github.com/bernardofsrodrigues";

const meta: Record<string, { image: string; tech: string[]; github: string; demo?: string }> = {
  "so-limpeza-backend": {
    image: imgEcommerce,
    tech: ["NestJS", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Docker", "Swagger"],
    github: GITHUB,
  },
  appsupergestao: {
    image: imgManagement,
    tech: ["Laravel", "PHP", "Blade", "MySQL", "JavaScript", "Eloquent ORM"],
    github: GITHUB,
  },
  meulivroreceitas: {
    image: imgRecipes,
    tech: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "JWT", "Clean Architecture"],
    github: GITHUB,
  },
  "facta-api": {
    image: imgFgts,
    tech: ["Node.js", "Express", "Axios", "REST"],
    github: GITHUB,
  },
  amilbot: {
    image: imgAutomation,
    tech: ["Python", "Selenium", "Pandas", "Excel"],
    github: GITHUB,
  },
  ecoestrutura: {
    image: imgEco,
    tech: ["Web", "ESG", "ODS", "Sustentabilidade"],
    github: GITHUB,
  },
};

const slugs = [
  "so-limpeza-backend",
  "appsupergestao",
  "meulivroreceitas",
  "facta-api",
  "amilbot",
  "ecoestrutura",
];

export const Route = createFileRoute("/projects/$slug")({
  beforeLoad: ({ params }) => {
    if (!slugs.includes(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const slug = params.slug;
    const fallbackTitle = "Project — Bernardo Rodrigues";
    return {
      meta: [
        { title: `${slug} — Bernardo Rodrigues` },
        {
          name: "description",
          content: `Detalhes técnicos do projeto ${slug} de Bernardo Rodrigues.`,
        },
        { property: "og:title", content: fallbackTitle },
      ],
    };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-muted-foreground mb-4">Projeto não encontrado.</p>
        <Link to="/" className="text-emerald underline">
          Voltar
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const t = content[lang].projects;
  const projects = projectsData(lang);
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];
  if (!project) return null;
  const m = meta[slug];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-emerald transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> {t.back}
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald mb-3">
              / {t.label}
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 sm:mb-6 leading-tight break-words">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {m.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-md border border-emerald/30 text-emerald bg-emerald/5"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={m.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm hover:border-emerald hover:text-emerald transition-colors"
              >
                <Github className="h-4 w-4" /> {t.code}
              </a>
              {m.demo && (
                <a
                  href={m.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4" /> {t.demo}
                </a>
              )}
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border mb-12"
          >
            <img src={m.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            <Card icon={<Lightbulb className="h-4 w-4" />} label={t.problem} accent="emerald">
              <p>{project.problem}</p>
            </Card>
            <Card icon={<Target className="h-4 w-4" />} label={t.solution} accent="cyan">
              <p>{project.solution}</p>
            </Card>
            <Card icon={<Layers className="h-4 w-4" />} label={t.context} accent="emerald">
              <p>{project.context}</p>
            </Card>
          </div>

          <Section title={t.architecture} icon={<Layers className="h-5 w-5" />}>
            <p className="text-foreground/80 leading-relaxed">{project.architecture}</p>
          </Section>

          <Section title={t.decisions} icon={<Wrench className="h-5 w-5" />}>
            <ul className="space-y-2">
              {project.decisions.map((d) => (
                <li key={d} className="flex gap-3 text-foreground/80">
                  <span className="text-emerald shrink-0 mt-1">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.features} icon={<Target className="h-5 w-5" />}>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="rounded-lg border border-border bg-surface/50 px-3 py-2 text-sm"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.challenges} icon={<Lightbulb className="h-5 w-5" />}>
            <ul className="space-y-2">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-foreground/80">
                  <span className="text-cyan shrink-0 mt-1">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.results} icon={<TrendingUp className="h-5 w-5" />}>
            <div className="grid sm:grid-cols-3 gap-3">
              {project.results.map((r) => (
                <div
                  key={r}
                  className="rounded-xl border border-emerald/30 bg-emerald/5 p-4 text-sm text-foreground/90"
                >
                  {r}
                </div>
              ))}
            </div>
          </Section>

          <div className="rounded-2xl border border-emerald/30 bg-gradient-to-br from-emerald/10 to-cyan/5 p-6 mb-12">
            <p className="font-mono text-[10px] uppercase tracking-wider text-emerald mb-3 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> {t.impact}
            </p>
            <ul className="grid sm:grid-cols-3 gap-3">
              {project.impact.map((i) => (
                <li key={i} className="text-sm text-foreground/90 flex gap-2">
                  <span className="text-emerald shrink-0">→</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation between projects */}
          <nav className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-border">
            <Link
              to="/projects/$slug"
              params={{ slug: prev.slug }}
              className="group rounded-xl border border-border bg-card p-5 hover:border-emerald/40 transition-colors"
            >
              <p className="text-xs font-mono uppercase text-muted-foreground mb-1 flex items-center gap-1">
                <ArrowLeft className="h-3 w-3" /> {t.prev}
              </p>
              <p className="font-display font-semibold group-hover:text-emerald transition-colors">
                {prev.title}
              </p>
            </Link>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group rounded-xl border border-border bg-card p-5 hover:border-emerald/40 transition-colors text-right"
            >
              <p className="text-xs font-mono uppercase text-muted-foreground mb-1 flex items-center justify-end gap-1">
                {t.next} <ArrowRight className="h-3 w-3" />
              </p>
              <p className="font-display font-semibold group-hover:text-emerald transition-colors">
                {next.title}
              </p>
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}

function Card({
  icon,
  label,
  accent,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  accent: "emerald" | "cyan";
  children: React.ReactNode;
}) {
  const accentClass = accent === "emerald" ? "text-emerald" : "text-cyan";
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p
        className={`font-mono text-[10px] uppercase tracking-wider mb-2 flex items-center gap-1 ${accentClass}`}
      >
        {icon} {label}
      </p>
      <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="flex items-center gap-2 text-xl font-display font-semibold mb-4">
        <span className="text-emerald">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
