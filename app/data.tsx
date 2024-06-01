import {
  Braces,
  Code,
  PencilRuler,
  FlaskConical,
  Palette,
  Figma,
  SquareKanban,
  Mail,
  Linkedin,
  Github,
  Instagram,
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
    icon: <Braces size={iconsSize} />,
    title: "Javascript",
    type: "Technical skills",
    tags: ["Typescript", "ES6+"],
  },
  {
    icon: <Code size={iconsSize} />,
    title: "Front-End frameworks",
    type: "Technical skills",
    tags: [
      "React 18",
      "Next.js",
      "Redux",
      "GraphQL",
      "React Router",
      "React Query",
      "Formik",
    ],
  },
  {
    icon: <PencilRuler size={iconsSize} />,
    title: "HTML / CSS",
    type: "Technical skills",
    tags: ["Chakra UI", "Tailwind CSS", "Styled components", "SASS"],
  },
  {
    icon: <FlaskConical size={iconsSize} />,
    title: "Testing libraries",
    type: "Technical skills",
    tags: ["Jest", "React testing library"],
  },
  {
    icon: <Palette size={iconsSize} />,
    title: "UI / UX",
    type: "Design skills",
    tags: ["Responsive design", "Storybook", "UX principles", "Accesibility"],
  },
  {
    icon: <Figma size={iconsSize} />,
    title: "Prototyping / Wireframes",
    type: "Design skills",
    tags: ["Figma"],
  },
  {
    icon: <SquareKanban size={iconsSize} />,
    title: "Agile",
    type: "Soft skills",
    tags: ["Story creation", "Kanban", "Backlog refinements"],
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
