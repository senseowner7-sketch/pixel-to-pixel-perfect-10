import { createFileRoute } from "@tanstack/react-router";
import { getAIWork } from "@/lib/projects";
import { WorkGrid } from "@/components/site/WorkGrid";
import { PoliticalSection } from "@/components/site/Sections";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Rushikesh Dhoran" },
      { name: "description", content: "AI films, visual campaigns, editorials and explainers by Rushikesh Dhoran." },
      { property: "og:title", content: "Work — Rushikesh Dhoran" },
      { property: "og:description", content: "AI films, visual campaigns, editorials and explainers." },
    ],
  }),
  component: () => (
    <>
      <section className="container-x py-16 md:py-24">
        <p className="label text-muted-foreground">Index — {getAIWork().length} projects</p>
        <h1 className="display mb-16 mt-6 text-[clamp(4rem,14vw,14rem)]">Work<span className="text-accent">.</span></h1>
        <WorkGrid projects={getAIWork()} />
      </section>
      <PoliticalSection n="—" />
    </>
  ),
});
