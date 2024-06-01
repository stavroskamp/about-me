import { contactData } from "@/app/data";
import { contactInfoTypes } from "@/app/types";

const iconLink = (contact: contactInfoTypes) => (
  <a
    className="hover:cursor-pointer dark:text-pink-400"
    href={contact.url}
    target="_blank"
  >
    {contact.icon}
  </a>
);

export default function Footer() {
  return (
    <footer className="px-8 my-2 flex flex-col justify-center items-center align-middle dark:bg-dark-primary">
      <div className="flex flex-row gap-4 align-middle dark:text-slate-400">
        {iconLink(contactData.linkedin)}
        {iconLink(contactData.github)}
        {iconLink(contactData.instagram)}
      </div>
      <div className="flex dark:text-slate-400 max-w-screen-xl dark:bg-dark-primary">
        Stavros Kampanakis - {new Date().getFullYear()}
      </div>
    </footer>
  );
}
