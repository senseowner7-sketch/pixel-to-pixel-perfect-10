import { useEffect, useRef, useState } from "react";
import type { PlaceholderTone, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const toneVar: Record<PlaceholderTone, string> = {
  coffee: "var(--ph-coffee)", music: "var(--ph-music)", air: "var(--ph-air)", field: "var(--ph-field)",
  sport: "var(--ph-sport)", flower: "var(--ph-flower)", paper: "var(--ph-paper)", ink: "var(--ph-ink)",
};
const darkTones: PlaceholderTone[] = ["coffee", "music", "sport", "ink", "field", "flower", "air"];

/** Renders a project's primary visual: video > image > tasteful placeholder. Never a broken embed. */
export function ProjectMedia({
  project, className, label, autoPlay = false,
}: { project: Project; className?: string; label?: string; autoPlay?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !autoPlay) return;
    const io = new IntersectionObserver(([e]) => {
      setInView(e.isIntersecting);
      if (e.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [autoPlay]);

  if (project.videoUrl) {
    return (
      <video ref={ref} className={cn("h-full w-full object-cover", className)} src={inView || !autoPlay ? project.videoUrl : undefined}
        poster={project.thumbnail} muted loop playsInline preload="none" aria-label={project.thumbnailAlt ?? project.title} />
    );
  }
  if (project.thumbnail) {
    return <img src={project.thumbnail} alt={project.thumbnailAlt ?? project.title} loading="lazy" className={cn("h-full w-full object-cover", className)} />;
  }
  return <Placeholder tone={project.tone} title={label ?? project.title} className={className} />;
}

export function Placeholder({ tone, title, className }: { tone: PlaceholderTone; title: string; className?: string }) {
  const dark = darkTones.includes(tone);
  return (
    <div role="img" aria-label={`${title} — artwork coming soon`} style={{ backgroundImage: toneVar[tone] }}
      className={cn("grain flex h-full w-full items-end p-4 md:p-6", dark ? "text-ink-foreground" : "text-foreground", className)}>
      <span className="label opacity-60">{title} — Media placeholder</span>
    </div>
  );
}

export function Reveal({ children, className, as: Tag = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "section" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={cn("reveal", className)}>{children}</Tag>;
}
