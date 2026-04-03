const CvPreview = () => {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#070b18] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(203,172,249,0.18),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(77,87,255,0.16),_transparent_38%)]" />

        <div className="relative border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/[0.55]">
                Curriculum Vitae
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                Reshan Wijerathna
              </h2>
            </div>
            <a
              href="/documents/ReshanWijerathnaCV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.08] px-4 py-2 text-xs font-medium text-white transition hover:border-purple/60 hover:bg-purple/10"
            >
              Open full CV
            </a>
          </div>
        </div>

        <div className="relative p-5 sm:p-6">
          <div className="rounded-[28px] border border-white/10 bg-black/[0.35] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/50">
                Preview
              </span>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <iframe
                src="/documents/ReshanWijerathnaCV.pdf#view=FitH&toolbar=0&navpanes=0"
                title="Reshan Wijerathna CV preview"
                className="h-[460px] w-full bg-white"
              />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-6 text-white/70">
            Open the full PDF, download a copy, or start a conversation from the
            buttons below.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/documents/ReshanWijerathnaCV.pdf"
              download="Reshan Wijerathna.pdf"
              className="inline-flex items-center justify-center rounded-lg bg-purple px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Download CV
            </a>
            <a
              href="mailto:reshanmadushanka@gmail.com"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Discuss a role
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvPreview;
