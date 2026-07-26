export type ResidencePanel = {
  number: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  focalPoint: string;
  alignment?: "left" | "right";
  cta?: boolean;
};

export const residencePanels: ResidencePanel[] = [
  {
    number: 1,
    eyebrow: "Austin · Design-Build · Whole-Home",
    title: "Atelier North",
    description:
      "Homes shaped by thoughtful architecture, enduring materials, and one accountable team.",
    image: "/media/residence-01.webp",
    alt: "Warm contemporary limestone residence surrounding a planted courtyard at dusk",
    focalPoint: "57% 52%",
    cta: true,
  },
  {
    number: 2,
    eyebrow: "Living",
    title: "Room to gather. Space to breathe.",
    description:
      "Open, connected spaces are balanced with quiet edges, natural light, and an honest material palette.",
    image: "/media/residence-02.webp",
    alt: "Open living room with limestone fireplace and sliding glass walls to a courtyard",
    focalPoint: "58% 50%",
  },
  {
    number: 3,
    eyebrow: "Kitchen",
    title: "The heart of the home, considered completely.",
    description:
      "Custom millwork and hard-working details turn daily rituals into something beautifully effortless.",
    image: "/media/residence-03.webp",
    alt: "Oak and limestone kitchen with a monolithic stone island and garden view",
    focalPoint: "58% 50%",
    alignment: "right",
  },
  {
    number: 4,
    eyebrow: "Primary Suite",
    title: "Private spaces with a quieter rhythm.",
    description:
      "Soft daylight, tactile materials, and garden connections create a retreat grounded in calm.",
    image: "/media/residence-04.webp",
    alt: "Serene primary bedroom with oak ceiling, limestone hearth, and private courtyard",
    focalPoint: "54% 50%",
  },
  {
    number: 5,
    eyebrow: "Bath",
    title: "Everyday rituals, made restorative.",
    description:
      "Natural stone, warm timber, and precise light bring the ease of a private spa into the everyday.",
    image: "/media/residence-05.webp",
    alt: "Spa bathroom with carved stone tub, walk-in shower, and planted light court",
    focalPoint: "63% 52%",
    alignment: "right",
  },
  {
    number: 6,
    eyebrow: "Guest Spaces",
    title: "A little more room for what comes next.",
    description:
      "Flexible additions feel inevitable—not added on—giving family, work, and guests space to evolve.",
    image: "/media/residence-06.webp",
    alt: "Detached guest studio glowing beyond a covered garden passage after rain",
    focalPoint: "61% 50%",
  },
  {
    number: 7,
    eyebrow: "Built for Your Next Chapter",
    title: "Let’s make your home feel entirely your own.",
    description:
      "Begin with a conversation about the place you have—and the life you want it to hold.",
    image: "/media/residence-07.webp",
    alt: "Contemporary limestone home and reflecting pool glowing at deep twilight",
    focalPoint: "64% 50%",
    cta: true,
  },
];
