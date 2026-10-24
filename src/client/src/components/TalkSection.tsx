import { ArrowUpRight } from "lucide-react";
import { Language } from "../types";

const base = "/talks/2026-10-20-hkust/";

export function TalkSection({ language }: { language: Language }) {
  const zh = language === "zh";
  return (
    <section id="talks" className="space-y-6 scroll-mt-8">
      <h2 className="border-b pb-3 text-2xl font-bold">{zh ? "技术分享" : "Technical talks"}</h2>
      <article className="flex items-start gap-4 sm:gap-6">
        <a href={base} className="block w-24 shrink-0 overflow-hidden rounded-sm border bg-white transition-shadow hover:shadow-sm sm:w-32" aria-label={zh ? "阅读世界动作模型报告" : "Read the World Action Models slides"}>
          <img src={`${base}cover.jpg`} alt="Advancing World Action Models — Liu Liu" width="960" height="540" loading="lazy" className="aspect-video w-full object-contain" />
        </a>
        <div className="min-w-0 space-y-2">
          <h3 className="text-lg font-medium leading-tight"><a href={base} className="hover:text-primary">Advancing World Action Models: From Scalable Experience to Robust and Efficient Robot Control</a></h3>
          <p className="text-sm text-muted-foreground"><time dateTime="2026-10">2026.10</time><span className="mx-2">·</span>{zh ? "香港科技大学" : "HKUST"}</p>
          <div className="flex flex-wrap gap-3 pt-1 text-xs text-primary">
            <a href={base} className="inline-flex items-center gap-1 hover:underline">{zh ? "阅读幻灯片" : "View slides"}<ArrowUpRight className="h-3 w-3" /></a>
          </div>
        </div>
      </article>
    </section>
  );
}
