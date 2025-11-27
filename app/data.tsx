import {
  Braces,
  PencilRuler,
  Palette,
  UserRoundCheck,
  ListChecks,
  PackageSearch,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import { ReactElement } from "react";
import { contactInfoTypes } from "./types";

const iconsSize = 42;

export const skillData: {
  id: string;
  icon: ReactElement;
  title: string;
  type: string;
  tags: string[];
}[] = [
  {
    id: "1",
    icon: <PackageSearch size={iconsSize} />,
    title: "Product Development",
    type: "Product skills",
    tags: [
      "Product vision",
      "Roadmap",
      "Market research",
      "Product market fit",
    ],
  },
  {
    id: "2",
    icon: <ListChecks size={iconsSize} />,
    title: "Product Delivery",
    type: "Product skills",
    tags: [
      "User stories",
      "Release planning",
      "Sprint planning",
      "Agile methodologies",
    ],
  },
  {
    id: "3",
    icon: <UserRoundCheck size={iconsSize} />,
    title: "Cross-functional leadership",
    type: "Product skills",
    tags: [
      "Stakeholder management",
      "Product requirement documents",
      "Workshops",
    ],
  },
  {
    id: "4",
    icon: <Braces size={iconsSize} />,
    title: "Javascript",
    type: "Technical skills",
    tags: ["React", "Next.js", "GraphQL", "Typescript", "ES6+", "Jest"],
  },
  {
    id: "5",
    icon: <PencilRuler size={iconsSize} />,
    title: "HTML / CSS",
    type: "Technical skills",
    tags: ["Chakra UI", "Tailwind CSS", "Styled components", "SASS"],
  },
  {
    id: "6",
    icon: <Palette size={iconsSize} />,
    title: "UI / UX",
    type: "Design skills",
    tags: [
      "Responsive design",
      "Storybook",
      "UX principles",
      "Accesibility",
      "Figma",
      "Prototyping",
      "Wireframing",
    ],
  },
];

export const projectData: {
  id: string;
  logo: any;
  title: string;
  description: string;
  url: string;
}[] = [
  {
    id: "1",
    logo: "/seismio-logo-512.png",
    title: "Seismio",
    description: "Explore recent earthquakes on an interactive map",
    url: "https://seismio.com",
  },
];

export const contactData: {
  [key: string]: contactInfoTypes;
} = {
  linkedin: {
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/stavroskampanakis/",
    name: "Linkedin",
  },
  github: {
    icon: <Github size={20} />,
    url: "https://github.com/stavroskamp",
    name: "Github",
  },
  instagram: {
    icon: <Instagram size={20} />,
    url: "https://github.com/stavroskamp",
    name: "Instagram",
  },
};
