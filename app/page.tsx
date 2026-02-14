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

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hein Htet Aung</h1>
        <p className="text-xl text-gray-400 mb-6">Aspiring Data Analyst</p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-80 transition"
          >
            View Projects
          </a>
          <a
            href="/Hein_Htet_Aung-CV.pdf"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>


          <a
            href="mailto:heinhtet.a67@rsu.ac.th"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Email Me
          </a>
        </div>

        <div className="mt-8 text-gray-400 space-y-1">
          <p>Bangkok, Thailand</p>
          <p>heinhtet.a67@rsu.ac.th • 0654462833</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-gray-400 leading-relaxed">
          I’m an ICT student at Rangsit University (expected graduation 2027) with a strong interest in data
          analysis, statistics, and building predictive models. I enjoy working with datasets to extract insights
          and support data-driven decisions.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Education</h2>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Information and Communications Technology (ICT)
              </h3>
              <p className="text-gray-400 mt-1">Rangsit University — Third Year (Expected Graduation: 2027)</p>
              <p className="text-gray-500 mt-2">
                Relevant Coursework: Data Structures, Algorithms, Statistics, Database Management, Programming in
                Python and R
              </p>
            </div>

            <div className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Bachelor of Computer Science (B.C.Sc.)</h3>
              <p className="text-gray-400 mt-1">
                University of Computer Studies, Mandalay (UCSM) — Attended 2017–2020 (Incomplete)
              </p>
              <p className="text-gray-500 mt-2">
                Relevant Coursework: Software Development Fundamentals, Calculus, Digital Logic, Information
                Management, Operating Systems, Computer Architecture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s} className="border border-gray-700 p-4 rounded-lg text-gray-100">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Predictive Modeling Assignment</h3>
              <p className="text-gray-400 mt-1">University Coursework (Sep 2024 – Dec 2024)</p>
              <ul className="list-disc pl-6 mt-3 text-gray-400 space-y-2">
                <li>
                  Built predictive models in R to forecast student performance using academic datasets (regression
                  techniques).
                </li>
                <li>Used Python for data preprocessing and created visualizations / reports with Tableau.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400 mb-6">Open to entry-level Data Analyst opportunities and collaborations.</p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="mailto:heinhtet.a67@rsu.ac.th"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-80 transition"
          >
            heinhtet.a67@rsu.ac.th
          </a>

          <a
            href="tel:0654462833"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            0654462833
          </a>
        </div>

        <p className="text-gray-500 mt-10">© {new Date().getFullYear()} Hein Htet Aung</p>
      </section>
    </main>
  );
}
