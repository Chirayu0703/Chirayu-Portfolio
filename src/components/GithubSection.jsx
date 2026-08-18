import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const GITHUB_USERNAME = "Chirayu0703";
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

// Optional: set VITE_GITHUB_TOKEN in a local .env file to raise the
// unauthenticated GitHub API rate limit. Never hardcode a token here.
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export default function GithubSection() {
  const [repos, setRepos] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          {
            headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
          }
        );
        if (!res.ok) throw new Error("GitHub API request failed");
        const data = await res.json();
        if (!cancelled) {
          setRepos(data);
          setStatus("ok");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-soft">
              GitHub
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              Code. Build. <span className="text-gradient">Repeat.</span>
            </h2>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink transition-colors hover:border-violet-soft"
          >
            <Github size={16} /> View Profile
          </a>
        </Reveal>

        <div className="mt-12">
          {status === "loading" && (
            <div className="grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-32 animate-pulse rounded-2xl border border-line bg-surface"
                />
              ))}
            </div>
          )}

          {status === "error" && (
            <div className="rounded-2xl border border-line bg-surface p-8 text-center">
              <p className="text-sm text-ink-muted">
                Live repository data couldn't be loaded right now.
              </p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-violet-soft hover:underline"
              >
                Browse the GitHub profile directly <ExternalLink size={14} />
              </a>
            </div>
          )}

          {status === "ok" && (
            <div className="grid gap-4 md:grid-cols-3">
              {repos.slice(0, 6).map((repo, i) => (
                <Reveal
                  key={repo.id}
                  delay={i * 0.06}
                  className="glow-border group flex flex-col justify-between rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-violet-soft/40"
                >
                  <div>
                    <h3 className="font-display text-sm font-semibold text-ink group-hover:text-gradient">
                      {repo.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs text-ink-muted">
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-ink-dim">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
