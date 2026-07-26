export type Service = {
  title: string;
  classification: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Kitchen Design & Remodeling",
    classification: "Interior · 01",
    description:
      "Custom layouts, cabinetry, lighting, and material selections resolved as one cohesive room.",
  },
  {
    title: "Bathroom Renovation",
    classification: "Interior · 02",
    description:
      "Quiet, durable spaces shaped around water, light, storage, and the rhythm of your day.",
  },
  {
    title: "Additions & Guest Spaces",
    classification: "Architecture · 03",
    description:
      "Seamless new square footage that respects the character and proportion of your existing home.",
  },
  {
    title: "Ground-Up Construction",
    classification: "Design-Build · 04",
    description:
      "One integrated process from site planning and architecture through construction and handover.",
  },
  {
    title: "Heating & Cooling",
    classification: "Home Systems · 05",
    description:
      "Comfort-first mechanical solutions thoughtfully coordinated with the architecture around them.",
  },
  {
    title: "Indoor Air & Restoration",
    classification: "Home Care · 06",
    description:
      "Measured interventions that restore healthier interiors while protecting the home you value.",
  },
];
