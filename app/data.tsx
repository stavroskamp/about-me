import {
  Braces,
  PencilRuler,
  Palette,
  Figma,
  SquareKanban,
  Linkedin,
  Github,
  Instagram,
  UserRoundCheck,
  ListChecks,
  PackageSearch,
} from "lucide-react";
import { ReactElement } from "react";
import { contactInfoTypes } from "./types";

const iconsSize = 42;

export const skillData: {
  icon: ReactElement;
  title: string;
  type: string;
  tags: string[];
}[] = [
  {
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
    icon: <ListChecks size={iconsSize} />,
    title: "Product Delivery",
    type: "Product skills",
    tags: [
      "User stories",
      "Release planning",
      "Sprint plannning",
      "Agile methodologies",
    ],
  },
  {
    icon: <UserRoundCheck size={iconsSize} />,
    title: "Cross-functional leadership",
    type: "Product skills",
    tags: [
      "Stakeholder management",
      "Product requirement documents",
      "Sprint plannning",
      "Workshop and demos facilitation",
    ],
  },
  {
    icon: <Braces size={iconsSize} />,
    title: "Javascript",
    type: "Technical skills",
    tags: ["React", "Next.js", "GraphQL", "Typescript", "ES6+", "Jest"],
  },
  {
    icon: <PencilRuler size={iconsSize} />,
    title: "HTML / CSS",
    type: "Technical skills",
    tags: ["Chakra UI", "Tailwind CSS", "Styled components", "SASS"],
  },
  {
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
