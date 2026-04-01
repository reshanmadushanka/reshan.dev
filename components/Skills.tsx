"use client";

import { IconCode } from "@tabler/icons-react";
import { skillSections } from "@/data";

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 lg:justify-items-center">
          <div className="space-y-5 text-center">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-cyan-300/80">
              <IconCode className="h-4 w-4" />
              Skills
            </div>
            <h2 className="heading text-white">
              Technical depth with the people skills to ship real products
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white-200 md:text-base">
              My experience spans backend architecture, modern frontend
              development, databases, cloud deployment, integrations, AI tools,
              and the soft skills needed to work well with product, design, and
              engineering teams.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              "Backend + API work",
              "Frontend delivery",
              "Cloud + deployment",
              "Mentoring + collaboration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm text-white/80 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillSections.map((section) => (
            <article
              key={section.title}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#070B1F] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-60" />
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {section.description}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-cyan-300/80">
                  {section.items.length}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 transition group-hover:border-cyan-400/25 group-hover:bg-cyan-400/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
