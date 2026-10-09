import { projects, type Project, type ProjectCategory } from "@/data/projects";

/** Data access layer — swap internals for a database/CMS later without touching UI. */
const byOrder = (a: Project, b: Project) => a.displayOrder - b.displayOrder;

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.status === "published").sort(byOrder);
}
export function getAIWork(): Project[] {
  return getPublishedProjects().filter((p) => p.category !== "Public Policy");
}
export function getPolicyWork(): Project[] {
  return getPublishedProjects().filter((p) => p.category === "Public Policy");
}
export function getFeaturedProject(): Project | undefined {
  return getAIWork().find((p) => p.featured) ?? getAIWork()[0];
}
export function getProjectBySlug(slug: string): Project | undefined {
  return getPublishedProjects().find((p) => p.slug === slug);
}
export function getAdjacent(slug: string) {
  const list = getPublishedProjects();
  const i = list.findIndex((p) => p.slug === slug);
  if (i < 0 || list.length < 2) return { prev: undefined, next: undefined };
  return { prev: list[(i - 1 + list.length) % list.length], next: list[(i + 1) % list.length] };
}
export function getRelated(p: Project, n = 3): Project[] {
  const rest = getPublishedProjects().filter((x) => x.id !== p.id);
  return [...rest.filter((x) => x.category === p.category), ...rest.filter((x) => x.category !== p.category)].slice(0, n);
}
export const AI_FILTERS: ("All" | ProjectCategory)[] = ["All", "AI Films", "Visual Campaigns", "Editorial", "Explainers", "Brand Concepts"];
export function projectHref(p: Project) {
  return p.caseStudyEnabled ? { internal: true as const, slug: p.slug } : { internal: false as const, url: p.instagramUrl ?? p.twitterUrl ?? p.youtubeUrl };
}
