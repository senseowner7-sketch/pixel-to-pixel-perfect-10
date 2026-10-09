import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/site/Media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rushikesh Dhoran" },
      { name: "description", content: "Researcher's brain, creative's toolkit. Rushikesh Dhoran works at the intersection of AI, storytelling and public affairs." },
      { property: "og:title", content: "About — Rushikesh Dhoran" },
      { property: "og:description", content: "Researcher's brain. Creative's toolkit." },
    ],
  }),
  component: () => (
    <section className="container-x py-16 md:py-24">
      <p className="label text-muted-foreground">About</p>
      <h1 className="display mt-6 text-[clamp(3rem,10vw,10rem)]">Researcher's brain.<br /><span className="text-muted-foreground">Creative's toolkit.</span></h1>
      <div className="mt-16 grid gap-10 md:grid-cols-12">
        <div className="aspect-[4/5] md:col-span-5"><Placeholder tone="paper" title="Editorial portrait" /></div>
        <div className="space-y-6 text-lg md:col-span-6 md:col-start-7">
          <p className="font-serif text-3xl italic leading-snug">I work at the intersection of AI, storytelling and public affairs.</p>
          <p className="text-muted-foreground">My background in competitive-exam preparation and public policy trained me to break down difficult subjects, identify patterns and communicate them clearly. Generative tools let me turn that clarity into films, campaigns and explainers.</p>
          <p className="text-muted-foreground">I'm particularly interested in AI Creative Strategy: finding ideas where technology isn't the gimmick, but the tool that makes the idea possible.</p>
        </div>
      </div>
    </section>
  ),
});
