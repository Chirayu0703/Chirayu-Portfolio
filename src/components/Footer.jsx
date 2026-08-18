import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-line py-12">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            CHIRAYU LOKHANDE
          </h3>
          <p className="mt-1 font-mono text-xs text-ink-dim">
            Building with data. Thinking with AI.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Chirayu0703"
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-violet-soft hover:text-ink"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/chirayulokhande07"
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-violet-soft hover:text-ink"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:chirayulokhande02@gmail.com"
            data-cursor-hover
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-violet-soft hover:text-ink"
          >
            <Mail size={16} />
          </a>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <p className="font-mono text-xs text-ink-dim">© 2026 Chirayu Lokhande</p>
          <button
            onClick={scrollTop}
            data-cursor-hover
            className="inline-flex items-center gap-1.5 text-xs text-ink-muted transition-colors hover:text-ink"
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
