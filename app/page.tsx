const skills = [
  "Python",
  "R",
  "SQL",
  "Pandas",
  "NumPy",
  "Statistical Modeling",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Tableau",
];

const metrics = [
  { label: "Focus", value: "Data Analysis" },
  { label: "Core Stack", value: "Python / R / SQL" },
  { label: "Graduation", value: "Expected 2027" },
];

const projects = [
  {
    title: "Predictive Modeling Assignment",
    period: "Sep 2024 – Dec 2024",
    summary:
      "Built predictive models to forecast student performance using academic datasets.",
    bullets: [
      "Developed regression-based models in R and evaluated results to improve forecasting quality.",
      "Used Python for preprocessing and produced insights/visuals with Tableau.",
    ],
    tags: ["R", "Python", "Regression", "Tableau"],
  },
];

function MiniChart() {
  // A tiny “analytics vibe” chart (SVG). No libs.
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-gray-400">Analytics Snapshot</p>
          <h3 className="mt-1 text-lg font-semibold">Modeling Workflow</h3>
          <p className="mt-2 text-sm text-gray-400">
            Clean → Explore → Model → Evaluate → Report
          </p>
        </div>
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 hover:bg-blue-500/20 transition">
          Sample
        </span>
      </div>

      <div className="mt-6">
        <svg viewBox="0 0 520 140" className="h-28 w-full">
          <path
            d="M20 110 C 90 20, 160 125, 220 70 C 270 30, 330 110, 390 55 C 430 25, 470 60, 500 35"
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="3"
          />
          <path
            d="M20 110 C 90 20, 160 125, 220 70 C 270 30, 330 110, 390 55 C 430 25, 470 60, 500 35"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="10"
          />
          {[20, 140, 260, 380, 500].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={[110, 60, 78, 58, 35][i]} r="4" fill="rgba(255,255,255,0.85)" />
            </g>
          ))}
        </svg>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-300">
          {["Cleaning", "EDA", "Regression", "Validation", "Dashboard"].map((t) => (
            <span key={t} className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 hover:bg-blue-500/20 transition">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="premium-bg text-white">
      {/* Background grid overlay */}
      <div className="pointer-events-none fixed inset-0 grid-overlay" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="font-semibold tracking-tight">
            Hein Htet Aung
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-blue-300 transition">About</a>
            <a href="#skills" className="hover:text-blue-300 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-300 transition">Projects</a>
            <a href="/resume" className="hover:text-blue-300 transition">Resume</a>
            <a
              href="https://twitter.com/charanko404"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              Twitter
            </a>

          </nav>

          <a
            href="/Hein_Htet_Aung-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="accent-btn rounded-lg px-6 py-3 font-medium"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto flex min-h-[82vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300">
            Bangkok, Thailand • Open to entry-level roles
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl gradient-text">
            Hein Htet Aung
          </h1>

          <p className="fade-up delay-2 mt-4 text-lg text-gray-300 sm:text-xl">
            Aspiring Data Analyst
          </p>

          <p className="fade-up delay-3 mt-6 max-w-2xl text-gray-400 leading-relaxed">
            ICT student at Rangsit University (Expected Graduation 2027) focused on data analysis,
            statistics, and predictive modeling. I enjoy turning datasets into clear insights and
            practical recommendations.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="accent-btn rounded-lg px-6 py-3 font-medium"
            >
              View Projects
            </a>

            <a
              href="mailto:heinhtet.a67@rsu.ac.th"
              className="rounded-lg border border-white/25 px-6 py-3 font-medium hover:bg-white/5 transition"
            >
              Email Me
            </a>

            <a
              href="/projects"
              className="rounded-lg border border-white/25 px-6 py-3 font-medium hover:bg-white/5 transition"
            >
              All Projects
            </a>
          </div>

          <div className="mt-10 text-sm text-gray-400">
            <p>heinhtet.a67@rsu.ac.th • 0654462833</p>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-gray-400">{m.label}</p>
                <p className="mt-1 text-lg font-semibold">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + CHART */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-bold tracking-tight">About</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                I’m an ICT student at Rangsit University (expected graduation 2027) with a strong interest in
                data analysis, statistics, and building predictive models. I enjoy working with datasets to
                extract insights and support data-driven decisions.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-gray-400">Strengths</p>
                  <p className="mt-1 font-semibold">Cleaning, EDA, Modeling</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-gray-400">Reporting</p>
                  <p className="mt-1 font-semibold">Tableau / Clear writeups</p>
                </div>
              </div>
            </div>

            <MiniChart />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="mt-2 text-gray-400">Core tools and technologies I work with.</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 hover:bg-blue-500/20 transition">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Data</p>
                <p className="mt-1 font-semibold">Pandas, NumPy, SQL</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Modeling</p>
                <p className="mt-1 font-semibold">Regression, Statistics</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Visualization</p>
                <p className="mt-1 font-semibold">Tableau</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WEB3 EXPERIENCE */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight gradient-text">
            Web3 Experience
          </h2>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-300 leading-relaxed">
              Active contributor in Web3 and DeFi communities with a focus on data,
              analytics, and content strategy. Experienced in on-chain analysis,
              liquidity strategies, and protocol research.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Focus</p>
                <p className="mt-1 font-semibold">On-chain Analytics</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Ecosystem</p>
                <p className="mt-1 font-semibold">DeFi / Solana</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Content</p>
                <p className="mt-1 font-semibold">Educational Threads</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight gradient-text">Projects</h2>
              <p className="mt-2 text-gray-400">Selected work and coursework projects.</p>
            </div>

            <a
              href="/projects"
              className="inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-medium hover:bg-white/5 transition w-fit"
            >
              View all
            </a>
          </div>

          <div className="mt-8 grid gap-6">
            {projects.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 color-card transition color-card transition color-card transition color-card transition color-card transition color-card transition hover:border-white/20 transition">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
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
                    <span
                      key={tag}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 hover:bg-blue-500/20 transition">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-3 text-gray-400">
            Open to entry-level Data Analyst opportunities and collaborations.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:heinhtet.a67@rsu.ac.th"
              className="accent-btn rounded-lg px-6 py-3 font-medium"
            >
              heinhtet.a67@rsu.ac.th
            </a>

            <a
              href="tel:0654462833"
              className="rounded-lg border border-white/25 px-6 py-3 font-medium hover:bg-white/5 transition"
            >
              0654462833
            </a>
            <a
              href="https://twitter.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-blue-500/40 px-6 py-3 font-medium text-blue-300 hover:bg-blue-500/10 transition"
            >
              Twitter (Web3)
            </a>

          </div>

          <p className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} Hein Htet Aung</p>
        </div>
      </section>
    </main>
  );
}
