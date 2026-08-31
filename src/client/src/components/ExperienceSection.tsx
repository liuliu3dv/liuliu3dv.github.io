import { ExperienceItem, Language } from "../types";

interface ExperienceSectionProps {
  items: ExperienceItem[];
  language: Language;
}

export function ExperienceSection({ items, language }: ExperienceSectionProps) {
  if (!items?.length) return null;

  return (
    <section id="experience" className="space-y-6 scroll-mt-8">
      <h2 className="border-b pb-3 text-2xl font-bold">
        {language === "zh" ? "工作经历" : "Experience"}
      </h2>
      <div className="relative space-y-8 before:absolute before:bottom-2 before:left-[4.5rem] before:top-2 before:w-px before:bg-border sm:before:left-[6.25rem]">
        {items.map((item) => (
          <article key={`${item.company}-${item.period}`} className="grid grid-cols-[4rem_1fr] gap-5 sm:grid-cols-[5.5rem_1fr]">
            <time className="pt-0.5 text-xs font-medium leading-relaxed text-muted-foreground">
              {language === "zh" ? item.period.replace("Present", "至今") : item.period}
            </time>
            <div className="relative pl-5 before:absolute before:-left-[0.32rem] before:top-1.5 before:h-2.5 before:w-2.5 before:rounded-full before:border-2 before:border-background before:bg-primary">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-semibold">
                  {language === "zh" ? item.role_zh : item.role}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {language === "zh" ? item.location_zh : item.location}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">
                {language === "zh" ? item.company_zh : item.company}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {language === "zh" ? item.summary_zh : item.summary}
              </p>
              {(item.highlights || item.highlights_zh) && (
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                  {(language === "zh" ? item.highlights_zh : item.highlights)?.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
