type FAQItem = {
  question: string;
  answer: string;
};

type RecruiterFAQProps = {
  items: FAQItem[];
};

export default function RecruiterFAQ({ items }: RecruiterFAQProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="card-premium group rounded-xl p-5"
          open={false}
        >
          <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-white">
            {item.question}
            <span
              aria-hidden
              className="float-right text-white/50 transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-[var(--muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
