import { Language, NewsItem } from "../types";

interface NewsSectionProps {
  news: NewsItem[];
  language: Language;
}

export function NewsSection({ news, language }: NewsSectionProps) {
  if (!news || news.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold border-b pb-2">
        {language === "zh" ? "动态" : "News"}
      </h2>
      <div className="space-y-3">
        {news.map((item, idx) => (
          <div key={idx} className="flex gap-4 text-sm">
            <span className="font-mono text-muted-foreground whitespace-nowrap">
              {item.date}
            </span>
            <span>{language === "zh" ? item.content_zh || item.content : item.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
