import { NewsItem } from "../types";

interface NewsSectionProps {
  news: NewsItem[];
}

export function NewsSection({ news }: NewsSectionProps) {
  if (!news || news.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold border-b pb-2">News</h2>
      <div className="space-y-3">
        {news.map((item, idx) => (
          <div key={idx} className="flex gap-4 text-sm">
            <span className="font-mono text-muted-foreground whitespace-nowrap">
              {item.date}
            </span>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
