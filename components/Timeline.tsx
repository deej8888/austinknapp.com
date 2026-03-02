export type TimelineItem = {
  company: string;
  role: string;
  date: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative ml-2 border-l border-white/15 pl-6">
      {items.map((item) => (
        <li key={`${item.company}-${item.role}`} className="relative mb-7 last:mb-0">
          <span
            aria-hidden
            className="absolute -left-[1.83rem] top-1.5 h-3.5 w-3.5 rounded-full border border-white/45 bg-white/20"
          />
          <p className="text-sm font-medium text-white">
            {item.company} - {item.role}
          </p>
          <p className="mt-1 text-xs text-[var(--muted)]">{item.date}</p>
        </li>
      ))}
    </ol>
  );
}
