import { createFileRoute } from "@tanstack/react-router";
import { PolicySection, PoliticalSection } from "@/components/site/Sections";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Public Policy & Political Communication — Rushikesh Dhoran" },
      { name: "description", content: "Research and communication on institutions, governance and public affairs." },
      { property: "og:title", content: "Public Policy — Rushikesh Dhoran" },
      { property: "og:description", content: "Institutions. Governance. Ideas made understandable." },
    ],
  }),
  component: () => (
    <>
      <PolicySection n="01" />
      <PoliticalSection n="02" />
    </>
  ),
});
