import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { content } from "@/data/content";
import { ContactForm } from "@/components/ContactForm";
import { cvFiles } from "@/lib/cv";

export function Contact() {
  const { lang } = useLang();
  const t = content[lang].contact;
  const f = content[lang].footer;
  const cv = cvFiles[lang];

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 h-[400px] w-[90vw] max-w-[600px] rounded-full bg-emerald/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-emerald mb-4"
        >
          / {t.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 sm:mb-6 leading-tight"
        >
          {t.title.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="text-gradient">{t.title.split(" ").slice(-2).join(" ")}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        <div className="mb-10">
          <ContactForm />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <a
            href="mailto:rodriguesfsbernardo@gmail.com"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface text-foreground px-6 py-3 font-medium hover:border-emerald hover:text-emerald transition-colors"
          >
            <Mail className="h-4 w-4" />
            {t.email}
          </a>
          <a
            href={cv.url}
            download={cv.filename}
            className="inline-flex items-center gap-2 rounded-lg border border-emerald/40 text-emerald px-6 py-3 font-medium hover:bg-emerald/10 transition-colors"
          >
            <Download className="h-4 w-4" />
            {content[lang].hero.cv}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: "rodriguesfsbernardo@gmail.com",
              href: "mailto:rodriguesfsbernardo@gmail.com",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "bernardofsrodrigues",
              href: "https://github.com/bernardofsrodrigues",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "bernardo-rodrigues",
              href: "https://www.linkedin.com/in/bernardo-rodrigues-214446260/",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-card p-5 text-left hover:border-emerald/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <item.icon className="h-5 w-5 text-emerald" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald transition-colors" />
              </div>
              <p className="text-xs font-mono uppercase text-muted-foreground">{item.label}</p>
              <p className="text-sm text-foreground truncate">{item.value}</p>
            </a>
          ))}
        </motion.div>

        <footer className="mt-24 pt-8 border-t border-border text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>{f.built}</p>
          <p>
            © {new Date().getFullYear()} — {f.rights}
          </p>
        </footer>
      </div>
    </section>
  );
}
