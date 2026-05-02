import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { content, type Lang } from "@/data/content";
import { cvFiles } from "@/lib/cv";

export function CvModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang } = useLang();
  const t = content[lang].cvModal;
  const [docLang, setDocLang] = useState<Lang>(lang);
  const file = cvFiles[docLang];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl h-[85vh] rounded-2xl border border-border bg-card shadow-elevated flex flex-col overflow-hidden"
          >
            <header className="flex items-center justify-between gap-4 px-6 py-4 border-b border-border bg-surface/50">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display font-semibold">{t.title}</h2>
                  <p className="text-xs text-muted-foreground">{t.preview}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 rounded-full border border-border bg-surface p-1">
                  {(["pt", "en", "es"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setDocLang(l)}
                      className={`px-2.5 py-1 text-xs font-mono uppercase rounded-full transition-colors ${
                        docLang === l ? "bg-emerald text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <a
                  href={file.url}
                  download={file.filename}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary text-primary-foreground px-3 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">{t.download}</span>
                </a>
                <button
                  onClick={onClose}
                  aria-label={t.close}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-surface transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            <div className="flex-1 bg-surface/30">
              <object
                data={file.url}
                type="application/pdf"
                className="w-full h-full"
                aria-label={t.preview}
              >
                <div className="flex flex-col items-center justify-center h-full text-center p-8 gap-4">
                  <FileText className="h-12 w-12 text-muted-foreground" />
                  <p className="text-muted-foreground">{t.preview}</p>
                  <a
                    href={file.url}
                    download={file.filename}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium"
                  >
                    <Download className="h-4 w-4" />
                    {t.download}
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
