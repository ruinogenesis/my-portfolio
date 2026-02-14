export default function Home() {
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
    "C#",
    "C",
    "Tableau",
  ];

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight">
            Hein Htet Aung
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/Hein_Htet_Aung-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-4 py-2 text-sm font-medium hover:border-white/40 hover:bg-white/5 transition"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        <div className="mx-auto flex min-h-[82vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300">
            Bangkok, Thailand • Open to entry-level roles
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Hein Htet Aung
          </h1>

          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            Aspiring Data Analyst
          </p>

          <p className="mt-6 max-w-2xl text-gray-400 leading-relaxed">
            ICT student at Rangsit University (Expected Graduation 2027) focused on data analysis,
            statistics, and predictive modeling. I enjoy turning datasets into clear insights and
            practical recommendations.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:opacity-90 transition"
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
              href="tel:0654462833"
              className="rounded-lg border border-white/25 px-6 py-3 font-medium hover:bg-white/5 transition"
            >
              Call
            </a>
          </div>

          <div className="mt-10 text-sm text-gray-400">
            <p>heinhtet.a67@rsu.ac.th • 0654462833</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
            <p className="mt-2 text-gray-400">
              Quick summary of what I do and what I’m aiming for.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-300 leading-relaxed">
              I’m an ICT student at Rangsit University (expected graduation 2027) with a strong interest in
              data analysis, statistics, and building predictive models. I enjoy working with datasets to
              extract insights and support data-driven decisions.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Focus</p>
                <p className="mt-1 font-semibold">Data Analysis & Modeling</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Tools</p>
                <p className="mt-1 font-semibold">Python, R, SQL, Tableau</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-gray-400">Interested in</p>
                <p className="mt-1 font-semibold">Entry-level Analyst Roles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            <p className="mt-2 text-gray-400">Academic background and relevant coursework.</p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">
                  B.Sc. Information and Communications Technology (ICT)
                </h3>
                <p className="text-sm text-gray-400">Expected 2027</p>
              </div>
              <p className="mt-2 text-gray-300">Rangsit University — Third Year</p>
              <p className="mt-4 text-gray-400">
                Relevant Coursework: Data Structures, Algorithms, Statistics, Database Management,
                Programming in Python and R
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">B.C.Sc. (Incomplete)</h3>
                <p className="text-sm text-gray-400">2017 – 2020</p>
              </div>
              <p className="mt-2 text-gray-300">
                University of Computer Studies, Mandalay (UCSM)
              </p>
              <p className="mt-4 text-gray-400">
                Relevant Coursework: Software Development Fundamentals, Calculus, Digital Logic,
                Information Management, Operating Systems, Computer Architecture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            <p className="mt-2 text-gray-400">Core tools and technologies I work with.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-gray-200 hover:border-white/30 transition"
                >
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

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="mt-2 text-gray-400">Selected work and coursework projects.</p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">Predictive Modeling Assignment</h3>
                <p className="text-sm text-gray-400">Sep 2024 – Dec 2024</p>
              </div>

              <p className="mt-3 text-gray-300">
                Built predictive models to forecast student performance using academic datasets.
              </p>

              <ul className="mt-5 space-y-2 text-gray-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                  <span>
                    Developed regression-based models in <span className="text-gray-200">R</span> and evaluated results to
                    improve forecasting quality.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                  <span>
                    Used <span className="text-gray-200">Python</span> for data preprocessing and generated insights using
                    <span className="text-gray-200"> Tableau</span> dashboards / reports.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["R", "Python", "Regression", "Tableau"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Add more projects by duplicating the card above */}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-3 text-gray-400">
            Open to entry-level Data Analyst opportunities and collaborations.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:heinhtet.a67@rsu.ac.th"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:opacity-90 transition"
            >
              heinhtet.a67@rsu.ac.th
            </a>

            <a
              href="tel:0654462833"
              className="rounded-lg border border-white/25 px-6 py-3 font-medium hover:bg-white/5 transition"
            >
              0654462833
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Hein Htet Aung
          </p>
        </div>
      </section>
    </main>
  );
}
