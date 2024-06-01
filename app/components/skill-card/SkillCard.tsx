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
    <div className="rounded-lg drop-shadow-lg p-5 overflow-hidden dark:bg-dark-card">
      <div className="flex flex-row align-middle pb-2">
        <div className="flex align-middle mr-4">{icon}</div>
        <div className="flex flex-col">
          <h3 className="font-bold dark:text-neutral-200">{title}</h3>
          <h4 className="text-sm italic dark:text-slate-400">{type}</h4>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-y-2 gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border-pink-400 border dark:text-pink-400 text-xs font-semibold me-2 px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
