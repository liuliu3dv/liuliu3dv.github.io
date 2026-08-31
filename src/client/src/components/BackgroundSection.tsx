import { EducationItem, Language, ServiceItem } from "../types";

export function BackgroundSection({ education, service, language }: { education: EducationItem[]; service: ServiceItem[]; language: Language }) {
  const zh = language === "zh";

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="border-b pb-3 text-2xl font-bold">{zh ? "教育背景" : "Education"}</h2>
        {education.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-semibold">{zh ? item.institution_zh : item.institution}</h3>
            <p className="text-sm text-muted-foreground">{zh ? item.degree_zh : item.degree}</p>
          </article>
        ))}
      </section>
      <section className="space-y-6">
        <h2 className="border-b pb-3 text-2xl font-bold">{zh ? "专利・出版・学术服务" : "Patents, publications & service"}</h2>
        {service.map((item) => (
          <article key={item.label}>
            <h3 className="font-semibold">{zh ? item.label_zh : item.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{zh ? item.content_zh : item.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
