import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rushikesh Dhoran" },
      { name: "description", content: "Have an idea worth building? Get in touch with Rushikesh Dhoran." },
      { property: "og:title", content: "Contact — Rushikesh Dhoran" },
      { property: "og:description", content: "Let's make something interesting." },
    ],
  }),
  component: ContactBlock,
});
