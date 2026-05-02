import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { useLang } from "@/hooks/useLang";
import { content, type Lang } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  "home",
  "about",
  "tech",
  "projects",
  "experience",
  "certifications",
  "contact",
] as const;

export function Navbar() {
  const { lang, setLang } = useLang();
  const t = content[lang].nav;
  const location = useLocation();
  const onHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const link = (s: string) => (onHome ? `#${s}` : `/#${s}`);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!onHome) return;
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 120) current = s;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const langs: Lang[] = ["pt", "en", "es"];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
        <a href={link("home")} className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Code2 className="h-5 w-5" />
          </span>
          <span>
            Bernardo<span className="text-emerald">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={link(s)}
                className={`relative transition-colors hover:text-emerald ${
                  active === s ? "text-emerald" : "text-muted-foreground"
                }`}
              >
                {t[s as keyof typeof t]}
                {active === s && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 rounded-full border border-border bg-surface p-1">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs font-mono uppercase rounded-full transition-colors ${
                  lang === l
                    ? "bg-emerald text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`Change language to ${l}`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-border active:scale-95 transition-transform"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <ul className="px-4 sm:px-6 py-4 space-y-1">
              {sections.map((s) => (
                <li key={s}>
                  <a
                    href={link(s)}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-2 text-base text-foreground hover:text-emerald active:bg-surface rounded-md min-h-[44px] flex items-center"
                  >
                    {t[s as keyof typeof t]}
                  </a>
                </li>
              ))}
              <li className="flex gap-2 pt-3 mt-2 border-t border-border">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex-1 px-3 py-2.5 text-xs font-mono uppercase rounded-md min-h-[44px] ${
                      lang === l
                        ? "bg-emerald text-primary-foreground"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
