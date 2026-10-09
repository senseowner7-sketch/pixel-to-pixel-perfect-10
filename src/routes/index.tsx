import { createFileRoute, Link } from "@tanstack/react-router";
import { getAIWork, getFeaturedProject, getPublishedProjects } from "@/lib/projects";
import { ProjectMedia, Placeholder, Reveal } from "@/components/site/Media";
import { SectionLabel } from "@/components/site/Chrome";
import { WorkGrid } from "@/components/site/WorkGrid";
import { PolicySection, PoliticalSection } from "@/components/site/Sections";
import { ContactBlock } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rushikesh Dhoran — AI Creative Strategist" },
      { name: "description", content: "AI creative strategy, generative video, visual storytelling, public policy and political communication by Rushikesh Dhoran." },
      { property: "og:title", content: "Rushikesh Dhoran — AI Creative Strategist" },
      { property: "og:description", content: "I turn ideas into things people want to watch. AI Creative Strategy × Storytelling × Public Affairs." },
    ],
  }),
  component: Home,
});

const steps = ["Strategy", "Idea", "Story", "AI Production", "Distribution"];

function Home() {
  const featured = getFeaturedProject();
  const work = getAIWork();
  const series = getPublishedProjects().find((p) => p.gallery.length >= 4 && p.id !== featured?.id);

  return (
    <>
      {/* HERO */}
      <section className="container-x flex min-h-[calc(100svh-4rem)] flex-col justify-between pb-10 pt-10 md:pt-16">
        <p className="label animate-rise text-muted-foreground">Independent Creative Strategist / India</p>
        <h1 className="display my-10 text-[clamp(3.4rem,13.5vw,15rem)]">
          {["I turn ideas", "into things", "people want", "to watch."].map((l, i) => (
            <span key={l} className="block animate-rise" style={{ animationDelay: `${120 + i * 110}ms` }}>
              {i === 3 ? <>to watch<span className="text-accent">.</span></> : l}
            </span>
          ))}
        </h1>
        <div className="grid animate-rise gap-8 border-t border-foreground pt-6 md:grid-cols-12" style={{ animationDelay: "600ms" }}>
          <p className="font-display text-lg font-bold md:col-span-4">AI Creative Strategy × Storytelling × Public Affairs</p>
          <p className="max-w-md text-muted-foreground md:col-span-5">I create AI films, visual campaigns, explainers and digital narratives — combining creative strategy with a background in public policy and political communication.</p>
          <div className="label flex flex-col gap-3 md:col-span-3 md:items-end">
            <a href="#work" className="text-foreground hover:text-accent">View selected work ↓</a>
            <Link to="/about" className="text-muted-foreground hover:text-accent">About me →</Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="bg-ink py-20 text-ink-foreground md:py-28" aria-labelledby="feat-h">
          <div className="container-x">
            <p className="label text-ink-muted"><span className="text-accent">02</span> · Featured — {featured.label}</p>
            <Reveal className="mt-8">
              <Link to="/work/$slug" params={{ slug: featured.slug }} className="group relative block aspect-video overflow-hidden">
                <div className="h-full w-full transition-transform duration-1000 group-hover:scale-[1.02]"><ProjectMedia project={featured} autoPlay /></div>
                <span className="label absolute right-5 top-5 bg-ink px-3 py-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Watch film →</span>
              </Link>
            </Reveal>
            <div className="mt-10 grid gap-10 md:grid-cols-12">
              <h2 id="feat-h" className="display text-5xl md:col-span-5 md:text-7xl">{featured.title}<br /><span className="text-ink-muted">{featured.subtitle}</span></h2>
              <div className="md:col-span-4">
                <p className="text-lg">{featured.description}</p>
                <Link to="/work/$slug" params={{ slug: featured.slug }} className="label mt-8 inline-block border-b border-accent pb-1 text-accent">View case study →</Link>
              </div>
              <dl className="label grid grid-cols-2 gap-6 text-ink-muted md:col-span-3 md:grid-cols-1">
                <div><dt className="text-accent">Role</dt><dd className="mt-2 space-y-1 text-ink-foreground">{featured.roles.map((r) => <div key={r}>{r}</div>)}</dd></div>
                <div><dt className="text-accent">Tools</dt><dd className="mt-2 space-y-1">{featured.tools.map((r) => <div key={r}>{r}</div>)}</dd></div>
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* SELECTED AI WORK */}
      <section id="work" className="container-x scroll-mt-16 py-24 md:py-32">
        <div className="mb-14 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel n="03">Index of work</SectionLabel>
            <h2 className="display mt-6 text-6xl md:text-8xl">Selected<br />AI Work</h2>
          </div>
          <p className="max-w-sm self-end text-muted-foreground md:col-span-5">Experiments, campaigns and stories built with generative tools — where the idea comes before the technology.</p>
        </div>
        <WorkGrid projects={work} />
      </section>

      {/* PROCESS */}
      <section className="container-x border-y border-foreground py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel n="04">How I work</SectionLabel>
            <h2 className="display mt-6 text-5xl md:text-6xl">From an idea<br />to something<br />people remember.</h2>
          </div>
          <div className="md:col-span-7">
            <ol className="grid grid-cols-2 gap-y-8 sm:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s} className="border-l border-border pl-4">
                  <span className="label text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-6 font-display text-lg font-extrabold uppercase leading-tight">{s}</p>
                </li>
              ))}
            </ol>
            <p className="mt-12 max-w-lg font-serif text-2xl italic leading-snug">AI is part of the production stack, not the idea itself. I start with the problem, find the narrative, then choose the tools that make it possible.</p>
          </div>
        </div>
      </section>

      {/* BREAK — horizontal series */}
      {series && (
        <section className="py-24 md:py-32" aria-labelledby="series-h">
          <div className="container-x mb-10 flex items-end justify-between gap-6">
            <div>
              <SectionLabel n="05">Experiment</SectionLabel>
              <h2 id="series-h" className="display mt-6 text-5xl md:text-7xl">{series.title}<br /><span className="text-muted-foreground">{series.subtitle}</span></h2>
            </div>
            <p className="label hidden text-muted-foreground md:block">Scroll →</p>
          </div>
          <div className="container-x flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {series.gallery.map((g, i) => (
              <figure key={g.alt} className="w-[78vw] shrink-0 snap-start md:w-[38vw]">
                <div className="aspect-[3/4]">
                  {g.src ? <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" /> : <Placeholder tone={i % 2 ? "ink" : series.tone} title={g.alt} />}
                </div>
                <figcaption className="label mt-3 flex justify-between text-muted-foreground"><span>{g.alt}</span><span className="text-accent">{String(i + 1).padStart(2, "0")}/{String(series.gallery.length).padStart(2, "0")}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* TRANSITION */}
      <section className="container-x bg-foreground py-28 text-background md:py-44">
        <p className="label text-accent">06 · Interlude</p>
        <Reveal>
          <h2 className="display mt-8 text-[clamp(3rem,10vw,10rem)]">Not everything<br />I do starts<br />with AI.</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <p className="max-w-xl font-serif text-2xl italic leading-snug md:col-span-7 md:col-start-6">Before generative AI became part of my creative toolkit, I spent years studying institutions, governance, politics and public policy. That background still shapes how I think about every story.</p>
          <Link to="/policy" className="label md:col-span-7 md:col-start-6 hover:text-accent">Explore public policy →</Link>
        </div>
      </section>

      <PolicySection />
      <PoliticalSection />

      {/* ABOUT PREVIEW */}
      <section className="container-x border-t border-border py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="aspect-[4/5] md:col-span-4"><Placeholder tone="paper" title="Portrait" /></div>
          <div className="md:col-span-7 md:col-start-6">
            <SectionLabel n="09">About</SectionLabel>
            <h2 className="display mt-6 text-5xl md:text-7xl">Researcher's brain.<br />Creative's toolkit.</h2>
            <div className="mt-8 max-w-lg space-y-4 text-muted-foreground">
              <p className="text-foreground">I work at the intersection of AI, storytelling and public affairs.</p>
              <p>My background in competitive-exam preparation and public policy trained me to break down difficult subjects, identify patterns and communicate them clearly.</p>
              <p>I'm particularly interested in AI Creative Strategy: finding ideas where technology isn't the gimmick, but the tool that makes the idea possible.</p>
            </div>
            <Link to="/about" className="label mt-8 inline-block border-b border-accent pb-1 text-accent">More about me →</Link>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
