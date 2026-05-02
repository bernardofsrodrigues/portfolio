import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { content, certificationsData, type Certification } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Carousel } from "@/components/Carousel";

const platformColors: Record<string, { bg: string; text: string; border: string }> = {
  Udemy: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/30" },
  Alura: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/30" },
  Rocketseat: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  "Cultura Inglesa": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
  },
};

const PAGE_SIZE = 6;

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function CertCard({ cert, viewLabel }: { cert: Certification; viewLabel: string }) {
  const platform = platformColors[cert.platform] ?? {
    bg: "bg-emerald/10",
    text: "text-emerald",
    border: "border-emerald/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-emerald/40 hover:bg-surface-elevated"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: "0 0 32px -8px oklch(0.78 0.18 158 / 0.15)" }}
      />

      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
          <Award className="h-5 w-5" />
        </div>
        <span
          className={`text-xs font-mono px-2.5 py-1 rounded-full border ${platform.bg} ${platform.text} ${platform.border}`}
        >
          {cert.platform}
        </span>
      </div>

      <h3 className="font-display font-semibold text-base text-foreground mb-2 leading-snug">
        {cert.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
        {cert.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {cert.tech.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface border border-border text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {cert.certificateUrl && (
        <a
          href={cert.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-emerald hover:text-emerald/80 transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          {viewLabel}
        </a>
      )}
    </motion.div>
  );
}

export function Certifications() {
  const { lang } = useLang();
  const t = content[lang].certifications;
  const items = certificationsData(lang);
  const pages = chunk(items, PAGE_SIZE);

  return (
    <section
      id="certifications"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader label={t.label} title={t.title} subtitle={t.subtitle} />

        <Carousel slideClassName="basis-full" ariaLabel={t.title}>
          {pages.map((page, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.map((cert) => (
                <CertCard key={cert.name} cert={cert} viewLabel={t.viewCertificate} />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
