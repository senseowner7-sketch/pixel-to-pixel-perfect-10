import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import { AI_FILTERS } from "@/lib/projects";
import { ProjectMedia } from "./Media";
import { cn } from "@/lib/utils";

/** Editorial grid — span pattern derived from orientation, so it reflows at any project count. */
const spanFor: Record<Project["orientation"], string> = {
  wide: "md:col-span-4 aspect-video",
  landscape: "md:col-span-3 aspect-[4/3]",
  portrait: "md:col-span-2 aspect-[4/5]",
  square: "md:col-span-2 aspect-square",
};

export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const external = p.instagramUrl ?? p.twitterUrl ?? p.youtubeUrl;
  const inner = (
    <>
      <div className={cn("overflow-hidden bg-muted", spanFor[p.orientation].split(" ").find((c) => c.startsWith("aspect")))}>
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ProjectMedia project={p} label={p.label} />
        </div>
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <p className="label text-muted-foreground"><span className="text-accent">{String(index + 1).padStart(2, "0")}</span> · {p.label} · {p.year}</p>
          <h3 className="mt-1 font-display text-lg font-extrabold uppercase leading-tight tracking-tight md:text-xl">
            {p.title}{p.subtitle && <span className="text-muted-foreground"> — {p.subtitle}</span>}
          </h3>
          <p className="mt-1 hidden max-w-md text-sm text-muted-foreground md:block">{p.description}</p>
        </div>
        <span aria-hidden className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">↗</span>
      </div>
    </>
  );
  const cls = cn("group block focus-visible:outline-2 focus-visible:outline-accent", spanFor[p.orientation].split(" ").filter((c) => !c.startsWith("aspect")).join(" "));
  
  // Instagram media already has its own clickable link.
  // Avoid placing an anchor inside another anchor.
 

  if (p.caseStudyEnabled) {
    return (
      <Link
        to="/work/$slug"
        params={{ slug: p.slug }}
        className={cls}
      >
        {inner}
      </Link>
    );
  }

  if (external) {
    return (
      <a
        href={external}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {inner}
      </a>
    );
  }

  return <div className={cls}>{inner}</div>;

}

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof AI_FILTERS)[number]>("All");
  const list = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter, projects]);
  const available = AI_FILTERS.filter((f) => f === "All" || projects.some((p) => p.category === f));
  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2" role="tablist" aria-label="Filter projects">
        {available.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
            className={cn("label border-b pb-1 transition-colors", filter === f ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground")}>
            {f}
          </button>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="label text-muted-foreground">Nothing here yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-6">
          {list.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
        </div>
      )}
    </div>
  );
}
