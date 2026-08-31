import { Language, ResearchFocusItem } from "../types";

interface ResearchFocusSectionProps {
  items: ResearchFocusItem[];
  language: Language;
}

export function ResearchFocusSection({ items, language }: ResearchFocusSectionProps) {
  if (!items?.length) return null;

  return (
    <section id="research" className="space-y-6 scroll-mt-8">
      <div className="space-y-2 border-b pb-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {language === "zh" ? "当前工作" : "Current work"}
        </p>
        <h2 className="text-2xl font-bold">
          {language === "zh" ? "研究兴趣及工作方向" : "Research interests & current work"}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {language === "zh"
            ? "在地平线机器人负责技术路线、跨团队协同，以及从论文原型到系统落地。"
            : "At Horizon Robotics, I define technical roadmaps, coordinate across teams, and take research prototypes into working systems."}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group flex h-full flex-col rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold leading-snug">
                {language === "zh" ? item.title_zh : item.title}
              </h3>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {language === "zh" ? item.description_zh : item.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.projects.map((project) => (
                <span key={project} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                  {project}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
