import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, CheckCircle2, Send } from "lucide-react";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const CONTACT_EMAIL = "chirayulokhande02@gmail.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialErrors = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState(initialErrors);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = { ...initialErrors };
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return !next.name && !next.email && !next.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  const field = (key) => ({
    value: form[key],
    onChange: (e) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: "" }));
    },
  });

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-soft">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Let's Build <span className="text-gradient">Something.</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-cursor-hover
              className="glow-border flex items-center gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-violet-soft/40"
            >
              <Mail size={18} className="text-violet-soft" />
              <span className="break-all text-sm text-ink-muted">{CONTACT_EMAIL}</span>
            </a>
            <a
              href="https://linkedin.com/in/chirayulokhande07"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="glow-border flex items-center gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-violet-soft/40"
            >
              <Linkedin size={18} className="text-violet-soft" />
              <span className="text-sm text-ink-muted">linkedin.com/in/chirayulokhande07</span>
            </a>
            <a
              href="https://github.com/Chirayu0703"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="glow-border flex items-center gap-3 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-violet-soft/40"
            >
              <Github size={18} className="text-violet-soft" />
              <span className="text-sm text-ink-muted">github.com/Chirayu0703</span>
            </a>
          </Reveal>

          <Reveal delay={0.18}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-surface p-10 text-center"
                >
                  <CheckCircle2 className="text-cyan" size={36} />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Your email app should be open now.
                  </h3>
                  <p className="max-w-xs text-sm text-ink-muted">
                    Finish sending from there, or email {CONTACT_EMAIL} directly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-2 text-sm text-violet-soft hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-4 rounded-3xl border border-line bg-surface p-6 md:p-8"
                >
                  <FieldWrap label="Name" error={errors.name}>
                    <input
                      {...field("name")}
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-soft"
                    />
                  </FieldWrap>

                  <FieldWrap label="Email" error={errors.email}>
                    <input
                      {...field("email")}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-soft"
                    />
                  </FieldWrap>

                  <FieldWrap label="Message" error={errors.message}>
                    <textarea
                      {...field("message")}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full resize-none rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-soft"
                    />
                  </FieldWrap>

                  <MagneticButton
                    as="button"
                    type="submit"
                    data-cursor-hover
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg"
                  >
                    Send Message <Send size={15} />
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FieldWrap({ label, error, children }) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-ink-dim">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-rose-400">{error}</span>}
    </label>
  );
}
