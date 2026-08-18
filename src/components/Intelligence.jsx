import Reveal from "./Reveal";
import RAGPipeline from "./RAGPipeline";

export default function Intelligence() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/30 py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-line to-transparent" />

      <div className="container-px relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-soft">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Built With <span className="text-gradient">Intelligence.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
            A look at the retrieval-augmented generation pipeline behind my
            Apple Product RAG Chatbot — from a raw question to a grounded,
            model-generated answer.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <RAGPipeline variant="full" />
        </Reveal>
      </div>
    </section>
  );
}
