export default function ResumePage() {
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
        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        <p className="mt-3 text-gray-400">
          Quick view + download the full PDF.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-400">PDF</p>
              <p className="text-lg font-semibold">Hein_Htet_Aung-CV.pdf</p>
            </div>
            <a
              href="/Hein_Htet_Aung-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="glow-btn rounded-lg bg-white px-6 py-3 font-medium text-black hover:opacity-90 transition w-fit"
            >
              Open / Download
            </a>
          </div>

          <p className="mt-4 text-gray-400 text-sm">
            Tip: If you want the PDF embedded on this page later, we can do that too.
          </p>
        </div>
      </section>
    </main>
  );
}
