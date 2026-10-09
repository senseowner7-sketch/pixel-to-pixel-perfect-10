import { site } from "@/data/site";

export function ContactBlock() {
  return (
    <section className="container-x bg-ink py-24 text-ink-foreground md:py-40" aria-labelledby="contact-h">
      <p className="label text-ink-muted"><span className="text-accent">10</span> · Contact</p>
      <h2 id="contact-h" className="display mt-6 text-[clamp(3rem,11vw,11rem)]">Have an idea<br />worth building?</h2>
      <p className="mt-6 font-serif text-2xl italic text-ink-muted md:text-3xl">Let's make something interesting.</p>
      <div className="mt-14 grid gap-px bg-ink-foreground/15 sm:grid-cols-2 md:grid-cols-5">
        {[...site.links, { label: "Download Resume", href: site.resumeUrl }].map((l) => (
          <a key={l.label} href={l.href} className="group flex items-center justify-between bg-ink p-5 font-display font-bold uppercase transition-colors hover:text-accent">
            {l.label} <span aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
