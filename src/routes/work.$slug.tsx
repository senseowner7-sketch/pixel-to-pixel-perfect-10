import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getAdjacent, getProjectBySlug, getRelated } from "@/lib/projects";
import { Placeholder, ProjectMedia, Reveal } from "@/components/site/Media";
import { ProjectCard } from "@/components/site/WorkGrid";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project || !project.caseStudyEnabled) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const t = p ? `${p.title}${p.subtitle ? ` — ${p.subtitle}` : ""} · Rushikesh Dhoran` : "Project — Rushikesh Dhoran";
    return { meta: [{ title: t }, { name: "description", content: p?.description ?? "" }, { property: "og:title", content: t }, { property: "og:description", content: p?.description ?? "" }, { property: "og:type", content: "article" }] };
  },
  notFoundComponent: () => (
    <div className="container-x py-40"><h1 className="display text-6xl">Project not found</h1><Link to="/work" className="label mt-6 inline-block text-accent">← All work</Link></div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const { prev, next } = getAdjacent(p.slug);
  const related = getRelated(p);
  return (
    <article>
      <header className="container-x pb-10 pt-12 md:pt-20">
        <Link to="/work" className="label text-muted-foreground hover:text-accent">← Work</Link>
        <h1 className="display mt-8 text-[clamp(3rem,10vw,10rem)]">{p.title}</h1>
        {p.subtitle && <p className="mt-4 font-serif text-3xl italic md:text-4xl">{p.subtitle}</p>}
        <dl className="label mt-10 grid grid-cols-2 gap-6 border-t border-foreground pt-6 md:grid-cols-4">
          {[["Client", "Spec project"], ["Year", String(p.year)], ["Category", p.label], ["Role", p.roles.slice(0, 2).join(", ")]].map(([k, v]) => (
            <div key={k}><dt className="text-accent">{k}</dt><dd className="mt-2">{v}</dd></div>
          ))}
        </dl>
      </header>
      <div className="container-x"><div className="aspect-video"><ProjectMedia project={p} autoPlay /></div></div>

      {p.brief && (
        <section className="container-x grid gap-6 py-24 md:grid-cols-12">
          <h2 className="label text-muted-foreground md:col-span-3">The brief</h2>
          <p className="text-xl leading-relaxed md:col-span-7">{p.brief}</p>
        </section>
      )}
      {p.idea && (
        <section className="container-x bg-ink py-28 text-ink-foreground md:py-40">
          <p className="label text-accent">The idea</p>
          <Reveal><p className="display mt-8 text-[clamp(2.8rem,8vw,8rem)]">{p.idea}</p></Reveal>
        </section>
      )}
      {p.gallery.length > 0 && (
        <section className="container-x py-24">
          <h2 className="label mb-8 text-muted-foreground">The execution</h2>
          <div className="grid gap-4 md:grid-cols-12">
            {p.gallery.map((g, i) => (
              <figure key={g.alt} className={i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5 md:mt-24" : "md:col-span-8 md:col-start-3"}>
                <div className="aspect-[4/3]">{g.src ? <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" /> : <Placeholder tone={p.tone} title={g.alt} />}</div>
                <figcaption className="label mt-2 text-muted-foreground">{g.caption ?? g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      {p.process && (
        <section className="container-x border-t border-border py-20">
          <h2 className="label mb-8 text-muted-foreground">Creative process</h2>
          <ol className="flex flex-wrap gap-x-8 gap-y-4">
            {p.process.map((s, i) => <li key={s} className="font-display text-2xl font-extrabold uppercase"><span className="label mr-2 align-top text-accent">{String(i + 1).padStart(2, "0")}</span>{s}</li>)}
          </ol>
        </section>
      )}
      <section className="container-x grid gap-10 border-t border-border py-20 md:grid-cols-12">
        <div className="md:col-span-6">
          <h2 className="label mb-4 text-muted-foreground">My role</h2>
          <ul className="label flex flex-wrap gap-2">{p.roles.map((r) => <li key={r} className="border border-foreground px-3 py-2">{r}</li>)}</ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="label mb-4 text-muted-foreground">Tools</h2>
          <ul className="space-y-1 text-muted-foreground">{p.tools.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
        {p.learned && <div className="md:col-span-3"><h2 className="label mb-4 text-muted-foreground">What I learned</h2><p className="font-serif text-lg italic">{p.learned}</p></div>}
      </section>
      {(prev || next) && (
        <nav className="container-x grid border-y border-foreground md:grid-cols-2" aria-label="Project navigation">
          {prev && <Link to="/work/$slug" params={{ slug: prev.slug }} className="py-8 hover:text-accent"><span className="label text-muted-foreground">← Previous</span><p className="font-display text-2xl font-extrabold uppercase">{prev.title}</p></Link>}
          {next && <Link to="/work/$slug" params={{ slug: next.slug }} className="py-8 text-right hover:text-accent"><span className="label text-muted-foreground">Next →</span><p className="font-display text-2xl font-extrabold uppercase">{next.title}</p></Link>}
        </nav>
      )}
      {related.length > 0 && (
        <section className="container-x py-20">
          <h2 className="label mb-8 text-muted-foreground">More work</h2>
          <div className="grid gap-6 md:grid-cols-6">{related.map((r, i) => <ProjectCard key={r.id} p={{ ...r, orientation: "square" }} index={i} />)}</div>
        </section>
      )}
    </article>
  );
}
