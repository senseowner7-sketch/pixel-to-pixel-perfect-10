import { Link } from "@tanstack/react-router";
import { getPolicyWork } from "@/lib/projects";
import { SectionLabel } from "./Chrome";
import { Reveal } from "./Media";

export const policyTopics = [
  "Evidence-Based Policymaking", "Theory of Change", "Monitoring & Evaluation",
  "Constitutional Institutions", "Governance", "Political Economy",
];

export function PolicySection({ n = "07" }: { n?: string }) {
  const work = getPolicyWork();
  return (
    <section className="container-x py-24 md:py-36" aria-labelledby="policy-h">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel n={n}>Public Policy</SectionLabel>
          <h2 id="policy-h" className="display mt-6 text-6xl md:text-8xl">Public<br />Policy</h2>
          <p className="mt-6 font-display text-xl font-bold">Institutions. Governance. Ideas made understandable.</p>
          <p className="mt-3 max-w-sm text-muted-foreground">Research and communication around public institutions, governance and policy — translated into accessible digital formats.</p>
        </div>
        <div className="md:col-span-7">
          {work.map((p) => (
            <Reveal key={p.id}>
              <Link to="/work/$slug" params={{ slug: p.slug }} className="group block border-t border-foreground py-8">
                <p className="label text-muted-foreground">Case file · {p.year}</p>
                <h3 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none tracking-tight md:text-5xl group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 font-serif text-lg italic">{p.subtitle}</p>
                <p className="mt-4 max-w-xl text-muted-foreground">{p.description}</p>
                <div className="label mt-5 flex flex-wrap gap-3">
                  {p.label.split(" / ").map((t) => <span key={t} className="border border-border px-2 py-1">{t}</span>)}
                </div>
              </Link>
            </Reveal>
          ))}
          <div className="border-t border-foreground pt-8">
            <p className="label text-muted-foreground">Explainer index</p>
            <ol className="mt-4 divide-y divide-border">
              {policyTopics.map((t, i) => (
                <li key={t} className="flex items-baseline gap-6 py-3">
                  <span className="label text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl font-bold">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

const caps = [
  ["Political Research", "Issue research, policy analysis, constituency research and institutional analysis."],
  ["Narrative Strategy", "Turning complicated political questions into clear narratives."],
  ["Digital Communication", "Reels, visual explainers, campaign creatives, carousels and rapid-response content."],
  ["Content Strategy", "Finding issues, framing angles and translating them into platform-native communication."],
];

export function PoliticalSection({ n = "08" }: { n?: string }) {
  return (
    <section id="political-communication" className="container-x border-t border-border py-24 md:py-32" aria-labelledby="pc-h">
      <SectionLabel n={n}>Political Communication</SectionLabel>
      <div className="mt-6 grid gap-6 md:grid-cols-12">
        <h2 id="pc-h" className="display text-5xl md:col-span-7 md:text-7xl">Political<br />Communication</h2>
        <p className="max-w-sm self-end text-muted-foreground md:col-span-5">Research, narrative development and digital communication for politics and public affairs.</p>
      </div>
      <div className="mt-14 grid gap-px bg-border md:grid-cols-4">
        {caps.map(([t, d], i) => (
          <div key={t} className="bg-background p-6 md:pr-10">
            <p className="label text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-8 font-display text-xl font-extrabold uppercase">{t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

