
import { useEffect, useRef, useState } from "react";
import type { PlaceholderTone, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const toneVar: Record<PlaceholderTone, string> = {
  coffee: "var(--ph-coffee)",
  music: "var(--ph-music)",
  air: "var(--ph-air)",
  field: "var(--ph-field)",
  sport: "var(--ph-sport)",
  flower: "var(--ph-flower)",
  paper: "var(--ph-paper)",
  ink: "var(--ph-ink)",
};

const darkTones: PlaceholderTone[] = [
  "coffee", "music", "sport", "ink",
  "field", "flower", "air",
];

function InstagramMedia({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const match = url.match(
    /instagram\.com\/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/
  );

  if (!match) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex h-full w-full items-center justify-center bg-neutral-900 p-6 text-center text-white",
          className
        )}
      >
        Watch {title} on Instagram ↗
      </a>
    );
  }

  const embedUrl =
    `https://www.instagram.com/p/${match[1]}/embed/captioned/`;

  return (
    <div
      className={cn(
        "relative flex h-full w-full min-h-[500px] flex-col items-center justify-center overflow-hidden bg-neutral-950",
        className
      )}
    >
      <iframe
        src={embedUrl}
        title={`${title} — Instagram Reel`}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="min-h-[480px] w-full max-w-[540px] flex-1 border-0"
      />

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full shrink-0 items-center justify-center gap-2 border-t border-white/10 bg-neutral-950 px-4 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:text-orange-400"
      >
        Watch on Instagram ↗
      </a>
    </div>
  );
}

/** Renders the primary visual for each project. */
export function ProjectMedia({
  project,
  className,
  label,
  autoPlay = false,
}: {
  project: Project;
  className?: string | undefined;
  label?: string | undefined;
  autoPlay?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !autoPlay) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        setInView(e.isIntersecting);

        if (e.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [autoPlay]);

  
  // Instagram projects: clickable thumbnail
  if (project.mediaType === "instagram" && project.instagramUrl) {
    return (
      <a
        href={project.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${project.title} on Instagram`}
        className={cn(
          "group relative block h-full w-full overflow-hidden bg-neutral-950",
          className
        )}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.thumbnailAlt ?? project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Placeholder
            tone={project.tone}
            title={label ?? project.title}
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-black/50 text-3xl text-white backdrop-blur-sm transition-transform group-hover:scale-110">
            ▶
          </span>
        </div>

        <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-white drop-shadow-lg">
          Watch on Instagram ↗
        </span>
      </a>
    );
  }


  // Direct video files
  if (project.videoUrl) {
    return (
      <video
        ref={ref}
        className={cn("h-full w-full object-cover", className)}
        src={
          inView || !autoPlay
            ? project.videoUrl
            : undefined
        }
        poster={project.thumbnail}
        muted
        loop
        playsInline
        preload="none"
        aria-label={project.thumbnailAlt ?? project.title}
      />
    );
  }

  // Project images
  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail}
        alt={project.thumbnailAlt ?? project.title}
        loading="lazy"
        className={cn(
          "h-full w-full object-cover",
          className
        )}
      />
    );
  }

  // Fallback artwork
  return (
    <Placeholder
      tone={project.tone}
      title={label ?? project.title}
      className={className}
    />
  );
}

export function Placeholder({
  tone,
  title,
  className,
}: {
  tone: PlaceholderTone;
  title: string;
  className?: string | undefined;
}) {
  const dark = darkTones.includes(tone);

  return (
    <div
      role="img"
      aria-label={`${title} — artwork coming soon`}
      style={{ backgroundImage: toneVar[tone] }}
      className={cn(
        "grain flex h-full w-full items-end p-4 md:p-6",
        dark ? "text-ink-foreground" : "text-foreground",
        className
      )}
    >
      <span className="label opacity-60">
        {title} — Media placeholder
      </span>
    </div>
  );
}

export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
