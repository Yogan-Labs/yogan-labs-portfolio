type Project = {
  title: string;
  stack: string[];
  badges: string[];
  description: string;
  features: string[];
  status: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-zinc-700 p-6 bg-zinc-900 hover:border-zinc-500 transition">
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>

      <p className="mt-4 text-zinc-300 text-sm">{project.description}</p>

      <ul className="mt-4 list-disc list-inside text-sm text-zinc-400 space-y-1">
        {project.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="mt-4 text-xs text-emerald-400">{project.status}</div>
    </div>
  );
}
