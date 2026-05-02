import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useLang } from "@/hooks/useLang";
import { content } from "@/data/content";

type Status = "idle" | "sending" | "success" | "error";

// EmailJS public credentials (safe to expose in client code — public key is meant for browser use).
const SERVICE_ID = "service_txap7mh";
const TEMPLATE_ID = "template_oyw8hif";
const PUBLIC_KEY = "W4Zegf7lea5-16Tkg";

export function ContactForm() {
  const { lang } = useLang();
  const t = content[lang].contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const schema = z.object({
    name: z.string().trim().min(2, t.errors.nameMin).max(100, t.errors.nameMax),
    email: z.string().trim().email(t.errors.emailInvalid).max(255),
    message: z.string().trim().min(10, t.errors.messageMin).max(2000, t.errors.messageMax),
  });

  const configured = true;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    if (!configured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: result.data.name,
          from_email: result.data.email,
          message: result.data.message,
          reply_to: result.data.email,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="text-left rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5"
      noValidate
    >
      <h3 className="font-display font-semibold text-xl mb-1">{t.title}</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label={t.name}
          id="name"
          value={values.name}
          onChange={(v) => setValues({ ...values, name: v })}
          placeholder={t.namePh}
          error={errors.name}
          maxLength={100}
        />
        <Field
          label={t.emailLabel}
          id="email"
          type="email"
          value={values.email}
          onChange={(v) => setValues({ ...values, email: v })}
          placeholder={t.emailPh}
          error={errors.email}
          maxLength={255}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
          {t.message}
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder={t.messagePh}
          maxLength={2000}
          className={`w-full rounded-lg border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-emerald/40 transition resize-none ${
            errors.message ? "border-destructive" : "border-border focus:border-emerald/50"
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:scale-[1.02] active:scale-100 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {t.sending}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              {t.send}
            </>
          )}
        </button>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-1.5 text-sm text-emerald"
          >
            <CheckCircle2 className="h-4 w-4" /> {t.success}
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-1.5 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4" />
            {configured ? t.error : t.configMissing}
          </motion.p>
        )}
      </div>
    </motion.form>
  );
}

function Field({
  label, id, value, onChange, placeholder, error, type = "text", maxLength,
}: {
  label: string; id: string; value: string; onChange: (v: string) => void;
  placeholder?: string; error?: string; type?: string; maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full rounded-lg border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-emerald/40 transition ${
          error ? "border-destructive" : "border-border focus:border-emerald/50"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
