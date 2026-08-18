const ROW_1 = [
  "AI/ML",
  "DATA SCIENCE",
  "MACHINE LEARNING",
  "RAG",
  "PYTHON",
  "SQL",
  "POWER BI",
  "REACT",
  "GENERATIVE AI",
];

const ROW_2 = [
  "EMBEDDINGS",
  "LANGCHAIN",
  "VECTOR DB",
  "XGBOOST",
  "EDA",
  "STREAMLIT",
  "PANDAS",
  "PROMPT ENGINEERING",
];

function Row({ items, reverse, dim }) {
  const doubled = [...items, ...items];
  return (
    <div className="no-scrollbar flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`font-display text-2xl font-medium tracking-tight md:text-4xl ${
              dim ? "text-ink-dim" : "text-ink-muted"
            }`}
          >
            {item}
            <span className="mx-8 text-violet">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Technology ticker"
      className="relative border-y border-line bg-surface/40 py-8"
    >
      <Row items={ROW_1} />
      <div className="h-4" />
      <Row items={ROW_2} reverse dim />
    </section>
  );
}
