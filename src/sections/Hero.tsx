import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { content } from "@/data/content";
import heroBg from "@/assets/hero-bg.jpg";
import { cvFiles } from "@/lib/cv";

export function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;
  const cv = cvFiles[lang];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 px-4 sm:px-6"
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-xs font-mono text-emerald mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald animate-ping opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-emerald" />
            </span>
            {t.available}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground font-mono text-sm mb-3"
          >
            {t.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1] mb-6 break-words"
          >
            Bernardo
            <br />
            <span className="text-gradient">Rodrigues</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-2xl text-foreground/90 font-display mb-2"
          >
            {t.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm text-muted-foreground font-mono mb-6"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 sm:mb-10 leading-relaxed"
          >
            {t.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary text-primary-foreground px-5 sm:px-6 py-3 min-h-[44px] font-medium shadow-glow transition-transform hover:scale-[1.02] flex-1 sm:flex-initial"
            >
              {t.cta1}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 sm:px-6 py-3 min-h-[44px] font-medium hover:border-emerald hover:text-emerald transition-colors flex-1 sm:flex-initial"
            >
              <Mail className="h-4 w-4" />
              {t.cta2}
            </a>
            <a
              href={cv.url}
              download={cv.filename}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald/40 text-emerald px-5 sm:px-6 py-3 min-h-[44px] font-medium hover:bg-emerald/10 transition-colors w-full sm:w-auto"
            >
              <Download className="h-4 w-4" />
              {t.cv}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 mt-10 text-muted-foreground"
          >
            <a
              href="https://github.com/bernardofsrodrigues"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-emerald transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bernardo-rodrigues-214446260/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-emerald transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rodriguesfsbernardo@gmail.com"
              aria-label="Email"
              className="hover:text-emerald transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block lg:col-span-4"
        >
          <div className="relative aspect-square rounded-2xl border border-border bg-surface/50 backdrop-blur p-6 shadow-elevated">
            <div className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-20 blur-xl -z-10" />
            <pre className="font-mono text-xs text-muted-foreground leading-relaxed">
              {`const bernardo = {
  role: "Software Dev",
  location: "BH, Brasil",
  stack: [
    ".NET", "Python",
    "Laravel", "React", "Typescript"
  ],
  coding: true,
  available: true,
  passion: "build & ship"
};`}
            </pre>
            <div className="absolute bottom-6 right-6 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span
                className="h-2 w-2 rounded-full bg-cyan animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
