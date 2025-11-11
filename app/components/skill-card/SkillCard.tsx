export default function SkillCard({
  icon,
  title,
  type,
  tags,
}: {
  icon: any;
  title: string;
  type: string;
  tags: string[];
}) {
  return (
    <div className="transition ease-in-out delay-150 duration-200 rounded-lg drop-shadow-lg p-5 overflow-hidden bg-[#1e293b] hover:brightness-110">
      <div className="flex flex-row align-middle pb-2">
        <div className="flex align-middle mr-4 hover:cursor-default text-white">
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-neutral-200 hover:cursor-default">
            {title}
          </h3>
          <h4 className="text-sm italic text-slate-400 hover:cursor-default">
            {type}
          </h4>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-y-2 gap-1 hover:cursor-default">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border-pink-400 border text-pink-400 text-xs font-sans me-2 px-2.5 py-0.5 rounded hover:cursor-default font-bold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
