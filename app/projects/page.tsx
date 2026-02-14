const projects = [
  {
    title: "Predictive Modeling Assignment",
    period: "Sep 2024 – Dec 2024",
    summary:
      "Built predictive models to forecast student performance using academic datasets.",
    bullets: [
      "Regression modeling in R with evaluation and iteration.",
      "Python preprocessing and Tableau reporting/visuals.",
    ],
    tags: ["R", "Python", "Regression", "Tableau"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="premium-bg min-h-screen text-white">
      <div className="pointer-events-none fixed inset-0 grid-overlay" />

      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="font-semibold tracking-tight">← Home</a>
          <a
            href="/Hein_Htet_Aung-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium hover:border-white/40 hover:bg-white/5 transition"
          >
            Download CV
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-gray-400">
          Full list of projects. Add more by duplicating a card.
        </p>

        <div className="mt-10 grid gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-white/20 transition">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm text-gray-400">{p.period}</p>
              </div>

              <p className="mt-3 text-gray-300">{p.summary}</p>

              <ul className="mt-5 space-y-2 text-gray-400">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
