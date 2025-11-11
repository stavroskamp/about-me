import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
  logo,
  title,
  description,
  url,
}: {
  logo: string;
  title: string;
  description: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition ease-in-out delay-150 duration-200 rounded-lg drop-shadow-lg p-5 overflow-hidden bg-[#1e293b] hover:brightness-110 group"
    >
      <div className="flex gap-4 items-center">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src={logo}
            alt={`${title} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-neutral-200 transition-colors">
              {title}
            </h3>
            <ExternalLink
              size={20}
              className="text-pink-400 transition-colors shrink-0"
            />
          </div>

          <p className="text-sm text-slate-400 mt-1 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
