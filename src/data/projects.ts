/**
 * SINGLE SOURCE OF TRUTH for every project on the site.
 * One record controls that project everywhere. To remove a project, delete its record.
 * To hide it, set status to "hidden" or "archived". Order with displayOrder.
 */
export type ProjectStatus = "published" | "hidden" | "archived";
export type ProjectCategory =
  | "AI Films"
  | "Visual Campaigns"
  | "Editorial"
  | "Explainers"
  | "Brand Concepts"
  | "Public Policy";
export type Orientation = "landscape" | "portrait" | "square" | "wide";
export type MediaType = "video" | "youtube" | "instagram" | "twitter" | "image" | "gallery" | "placeholder";
export type PlaceholderTone = "coffee" | "music" | "air" | "field" | "sport" | "flower" | "paper" | "ink";

export interface GalleryItem {
  src?: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  year: number;
  category: ProjectCategory;
  label: string;
  featured: boolean;
  displayOrder: number;
  status: ProjectStatus;
  thumbnail?: string;
  thumbnailAlt?: string;
  tone: PlaceholderTone;
  orientation: Orientation;
  mediaType: MediaType;
  videoUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  description: string;
  brief?: string;
  idea?: string;
  roles: string[];
  tools: string[];
  process?: string[];
  gallery: GalleryItem[];
  learned?: string;
  caseStudyEnabled: boolean;
}

export const projects: Project[] = [
  
  // PORTFOLIO VISUAL PROJECTS

  {
    id: "p14", slug: "date-bites", title: "Date Bites",
    year: 2026, category: "Brand Concepts", label: "Brand Visual",
    featured: false, displayOrder: 3, status: "published",
    thumbnail: "/Date%20Bites.jpg",
    thumbnailAlt: "Date Bites visual design",
    tone: "paper", orientation: "portrait", mediaType: "image",
    description: "A creative brand visual for Date Bites.",
    roles: ["Visual Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p15", slug: "virat-prophecy", title: "Virat Kohli",
    subtitle: "A Name Becomes a Prophecy",
    year: 2026, category: "Editorial", label: "Sports Editorial",
    featured: false, displayOrder: 4, status: "published",
    thumbnail: "/Virat.jpg",
    thumbnailAlt: "Virat Kohli conceptual sports poster",
    tone: "sport", orientation: "portrait", mediaType: "image",
    description: "A conceptual sports poster exploring the meaning of Virat.",
    roles: ["Concept", "Visual Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p16", slug: "sukhoi-su30", title: "Sukhoi Su-30MKI",
    year: 2026, category: "Visual Campaigns", label: "Aviation Editorial",
    featured: false, displayOrder: 5, status: "published",
    thumbnail: "/Sukhoi.jpg",
    thumbnailAlt: "Sukhoi Su-30MKI aircraft editorial poster",
    tone: "air", orientation: "portrait", mediaType: "image",
    description: "A cinematic editorial poster featuring the Sukhoi Su-30MKI.",
    roles: ["Visual Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p17", slug: "kirana-hills", title: "Kirana Hills",
    subtitle: "Indian Air Force Day",
    year: 2026, category: "Visual Campaigns", label: "Editorial Graphic",
    featured: false, displayOrder: 6, status: "published",
    thumbnail: "/Kirana%20Hills.jpg",
    thumbnailAlt: "Indian Air Force Day Kirana Hills visual",
    tone: "air", orientation: "portrait", mediaType: "image",
    description: "An Indian Air Force Day editorial visual built around the Kirana Hills statement.",
    roles: ["Concept", "Visual Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p18", slug: "smriti-mandhana-captain", title: "Smriti Mandhana",
    subtitle: "Maharashtra's Daughter",
    year: 2026, category: "Editorial", label: "Sports Editorial",
    featured: false, displayOrder: 7, status: "published",
    thumbnail: "/Smriti%20Cap.jpg",
    thumbnailAlt: "Smriti Mandhana sports editorial poster",
    tone: "sport", orientation: "portrait", mediaType: "image",
    description: "A sports editorial celebrating Smriti Mandhana and Maharashtrian pride.",
    roles: ["Concept", "Visual Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p19", slug: "instinct-ai-explainer", title: "Instinct AI",
    subtitle: "How It Works",
    year: 2026, category: "Explainers", label: "Technology Explainer",
    featured: false, displayOrder: 8, status: "published",
    thumbnail: "/Instinct%20work.jpg",
    thumbnailAlt: "Instinct AI product explainer graphic",
    tone: "paper", orientation: "landscape", mediaType: "image",
    description: "A visual explanation of an AI assistant that can coordinate digital tasks.",
    roles: ["Visual Storytelling"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p20", slug: "ubuntu-i-am-because-we-are", title: "Ubuntu",
    subtitle: "I Am Because We Are",
    year: 2026, category: "Editorial", label: "Conceptual Visual",
    featured: false, displayOrder: 9, status: "published",
    thumbnail: "/Ubuntu%20I%20am%20because%20we%20are.jpg",
    thumbnailAlt: "Ubuntu I Am Because We Are graphic",
    tone: "paper", orientation: "landscape", mediaType: "image",
    description: "A conceptual visual exploring community, connection and shared growth.",
    roles: ["Concept", "Visual Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p21", slug: "mr-nobody-poster", title: "Mr. Nobody",
    subtitle: "Movie Poster",
    year: 2026, category: "Editorial", label: "Movie Poster",
    featured: false, displayOrder: 10, status: "published",
    thumbnail: "/Mr%20Nobody.jpeg",
    thumbnailAlt: "Mr. Nobody movie poster",
    tone: "ink", orientation: "portrait", mediaType: "image",
    description: "A creative movie poster inspired by Mr. Nobody.",
    roles: ["Poster Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p22", slug: "punjab-groundwater", title: "Punjab Groundwater",
    subtitle: "The Decline",
    year: 2026, category: "Explainers", label: "Environmental Infographic",
    featured: false, displayOrder: 11, status: "published",
    thumbnail: "/Punjab%20Groundwater.jpg",
    thumbnailAlt: "Punjab groundwater decline infographic",
    tone: "field", orientation: "landscape", mediaType: "image",
    description: "A visual explainer on Punjab's declining groundwater resources.",
    roles: ["Visual Storytelling"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p23", slug: "c17-globemaster", title: "C-17 Globemaster III",
    year: 2026, category: "Visual Campaigns", label: "Aviation Editorial",
    featured: false, displayOrder: 12, status: "published",
    thumbnail: "/C17.jpg",
    thumbnailAlt: "C-17 Globemaster III aircraft poster",
    tone: "air", orientation: "portrait", mediaType: "image",
    description: "A cinematic editorial poster featuring the C-17 Globemaster III.",
    roles: ["Visual Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p24", slug: "anvay-brand", title: "ANVAY",
    subtitle: "Brand Identity",
    year: 2026, category: "Brand Concepts", label: "Brand Design",
    featured: false, displayOrder: 13, status: "published",
    thumbnail: "/Anvay.jpg",
    thumbnailAlt: "ANVAY brand identity visual",
    tone: "paper", orientation: "landscape", mediaType: "image",
    description: "A visual identity for ANVAY, an exam-preparation brand.",
    roles: ["Brand Concept"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p25", slug: "public-policy-tools", title: "Public Policy Tools",
    year: 2026, category: "Explainers", label: "Educational Graphic",
    featured: false, displayOrder: 14, status: "published",
    thumbnail: "/Pub%20Policy%20Tools.jpg",
    thumbnailAlt: "Public policy tools visual explainer",
    tone: "paper", orientation: "landscape", mediaType: "image",
    description: "A visual explainer simplifying public policy concepts.",
    roles: ["Visual Storytelling"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },
  {
    id: "p26", slug: "hindi-city-still", title: "Hindi City Still",
    year: 2026, category: "Editorial", label: "Visual Experiment",
    featured: false, displayOrder: 15, status: "published",
    thumbnail: "/Hindi%20City%20Still.png",
    thumbnailAlt: "Hindi City Still visual artwork",
    tone: "ink", orientation: "landscape", mediaType: "image",
    description: "A visual storytelling experiment.",
    roles: ["Visual Design"], tools: [], gallery: [],
    caseStudyEnabled: false,
  },

  
  {
    id: "p13",
    slug: "waiting-to-feel-ready",
    title: "Waiting to Feel Ready Is a Trap",
    subtitle: "An 8-Slide Psychology Carousel",
    year: 2026,
    category: "Editorial",
    label: "Instagram Carousel",
    featured: false,
    displayOrder: 2,
    status: "published",
    thumbnail: "/waiting-to-feel-ready.jpg.jpeg",
    thumbnailAlt: "Waiting to Feel Ready Is a Trap — carousel cover",
    tone: "paper",
    orientation: "portrait",
    mediaType: "instagram",
    instagramUrl: "https://www.instagram.com/p/DcvBzyTDWsg/",
    description: "An eight-slide visual story exploring why waiting to feel ready can prevent us from taking action.",
    roles: ["Concept", "Copywriting", "Visual Storytelling"],
    tools: [],
    gallery: [],
    caseStudyEnabled: false,
  },


  
{
  id: "p12",
  slug: "abhishek-traders",
  title: "Abhishek Traders",
  subtitle: "AI Video Advertisement",
  year: 2026,
  category: "AI Films",
  label: "AI Advertisement",
  featured: true,
  displayOrder: 1,
  status: "published",
  thumbnail: "/abhishek-traders-thumbnail.jpeg",
  thumbnailAlt: "Abhishek Traders AI advertisement",
  tone: "field",
  orientation: "portrait",
  mediaType: "instagram",
  videoUrl: "",
  instagramUrl: "https://www.instagram.com/reel/DeMi6nCy0zo/",
  twitterUrl: "",
  youtubeUrl: "",
  description: "An AI-generated video advertisement for Abhishek Traders.",
  brief: "",
  idea: "",
  roles: ["AI Video Production"],
  tools: [],
  process: [],
  gallery: [],
  learned: "",
  caseStudyEnabled: false,
},

  
  {
    id: "p01", slug: "tata-coffee-wake-up-the-world", title: "Tata Coffee", subtitle: "Wake Up the World",
    year: 2026, category: "AI Films", label: "AI Film / Spec Campaign / Creative Direction",
    featured: false, displayOrder: 1, status: "hidden", tone: "coffee", orientation: "wide", mediaType: "placeholder",
    description: "A speculative 30-second Tata Coffee campaign built around a simple thought: what if the entire city waited for your first cup of coffee before waking up?",
    brief: "Coffee advertising tends to sell aroma and beans. The challenge was to find an emotional, ownable idea for a 30-second film — and to produce it end-to-end with generative tools without it looking like an AI demo.",
    idea: "What if the city waited for your first sip?",
    roles: ["Concept", "Creative Direction", "Screenplay", "Generative Video", "Prompt Design", "AI Production"],
    tools: ["Google Flow", "Veo", "ChatGPT", "ElevenLabs"],
    process: ["Research", "Concept", "Screenplay", "Visual Development", "Prompt Development", "Generation", "Continuity", "Sound", "Editing"],
    gallery: [{ alt: "Storyboard frame — the sleeping city" }, { alt: "Frame — first pour" }, { alt: "Frame — the city wakes" }],
    learned: "Continuity is the real craft in generative film. The idea has to be simple enough to survive dozens of generations.",
    caseStudyEnabled: true,
  },
  {
    id: "p02", slug: "youtube-music-discover", title: "YouTube Music", subtitle: "Discover What You Don't Know Exists",
    year: 2026, category: "AI Films", label: "AI Spec Campaign", featured: false, displayOrder: 2, status: "published",
    tone: "music", orientation: "portrait", mediaType: "placeholder",
    description: "A spec campaign about the songs you'd love but haven't found yet.",
    idea: "Your next favourite song already exists.",
    roles: ["Concept", "Creative Direction", "Generative Video"], tools: ["Veo", "ChatGPT"], gallery: [], caseStudyEnabled: true,
  },
  {
    id: "p03", slug: "indian-air-force-aircraft-editorial", title: "Indian Air Force", subtitle: "Aircraft Editorial Series",
    year: 2025, category: "Visual Campaigns", label: "Visual Campaign", featured: false, displayOrder: 3, status: "published",
    tone: "air", orientation: "landscape", mediaType: "placeholder",
    description: "An editorial image series treating each aircraft like a cover star.",
    roles: ["Art Direction", "Prompt Design", "Editorial Layout"], tools: ["Midjourney", "Photoshop"],
    gallery: [{ alt: "Sukhoi Su-30MKI" }, { alt: "Rafale" }, { alt: "Tejas" }, { alt: "C-17 Globemaster" }, { alt: "Chinook" }, { alt: "Apache" }],
    caseStudyEnabled: true,
  },
  {
    id: "p04", slug: "rhythm-irrigation", title: "Rhythm Irrigation", year: 2025, category: "Brand Concepts",
    label: "AI Advertisement", featured: false, displayOrder: 4, status: "published", tone: "field", orientation: "square", mediaType: "placeholder",
    description: "An AI-produced advertisement for an irrigation brand, told from the farmer's side of the field.",
    roles: ["Script", "Generative Video", "Editing"], tools: ["Veo", "ElevenLabs"], gallery: [], caseStudyEnabled: false,
  },
  {
    id: "p05", slug: "virat-kohli-a-name-he-grew-into", title: "Virat Kohli", subtitle: "A Name He Grew Into",
    year: 2025, category: "Editorial", label: "Conceptual Sports Editorial", featured: false, displayOrder: 5, status: "published",
    tone: "sport", orientation: "portrait", mediaType: "placeholder",
    description: "A conceptual editorial on a name that came before the legend.",
    roles: ["Concept", "Art Direction"], tools: ["Midjourney"], gallery: [], caseStudyEnabled: false,
  },
  {
    id: "p06", slug: "ab-de-villiers", title: "AB de Villiers", subtitle: "Audacity. Brilliance. Destruction.",
    year: 2025, category: "Editorial", label: "Sports Editorial", featured: false, displayOrder: 6, status: "published",
    tone: "ink", orientation: "landscape", mediaType: "placeholder",
    description: "Three words, three frames, one impossible batter.",
    roles: ["Art Direction", "Copy"], tools: ["Midjourney", "Photoshop"], gallery: [], caseStudyEnabled: false,
  },
  {
    id: "p07", slug: "instinct-ai", title: "Instinct AI", subtitle: "Product Explainer",
    year: 2025, category: "Explainers", label: "Product Explainer / Visual Storytelling", featured: false, displayOrder: 7,
    status: "published", tone: "paper", orientation: "wide", mediaType: "placeholder",
    description: "Making a complex AI product understandable in under a minute.",
    roles: ["Script", "Visual Storytelling"], tools: ["ChatGPT", "Premiere Pro"], gallery: [], caseStudyEnabled: false,
  },
  {
    id: "p08", slug: "smriti-mandhana", title: "Smriti Mandhana", year: 2025, category: "Editorial",
    label: "Sports Editorial", featured: false, displayOrder: 8, status: "published", tone: "sport", orientation: "portrait", mediaType: "placeholder",
    description: "An editorial portrait series on elegance at the crease.",
    roles: ["Art Direction"], tools: ["Midjourney"], gallery: [], caseStudyEnabled: false,
  },
  {
    id: "p09", slug: "neelakurinji", title: "Neelakurinji", year: 2024, category: "Explainers",
    label: "Educational Visual", featured: false, displayOrder: 9, status: "published", tone: "flower", orientation: "square", mediaType: "placeholder",
    description: "The flower that blooms once every twelve years, explained visually.",
    roles: ["Research", "Visual Explainer"], tools: ["ChatGPT", "Photoshop"], gallery: [], caseStudyEnabled: false,
  },
  {
    id: "p10", slug: "cse-planb-ai-creator-fellowship", title: "CSE PlanB", subtitle: "AI Creator Fellowship",
    year: 2025, category: "Brand Concepts", label: "Campaign / Content Strategy", featured: false, displayOrder: 10,
    status: "published", tone: "paper", orientation: "landscape", mediaType: "placeholder",
    description: "Campaign and content strategy for an AI creator fellowship.",
    roles: ["Content Strategy", "Campaign"], tools: ["ChatGPT"], gallery: [], caseStudyEnabled: false,
  },
  {
    id: "p11", slug: "election-commission-of-india", title: "Election Commission of India",
    subtitle: "Appointment & Institutional Independence", year: 2025, category: "Public Policy",
    label: "Constitution / Institutions / Political Communication", featured: false, displayOrder: 11, status: "published",
    tone: "paper", orientation: "landscape", mediaType: "placeholder",
    description: "Who appoints the referee? An explainer on how India's election commissioners are chosen — and why it matters for institutional independence.",
    brief: "A constitutional question with major democratic stakes, usually discussed only in legal language.",
    idea: "Who appoints the referee?",
    roles: ["Research", "Script", "Visual Explainer"], tools: ["ChatGPT", "Premiere Pro"], gallery: [], caseStudyEnabled: true,
  },
];
