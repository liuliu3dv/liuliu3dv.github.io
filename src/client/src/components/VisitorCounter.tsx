import { Eye } from "lucide-react";
import { Language } from "../types";

export function VisitorCounter({ language }: { language: Language }) {
  const isLocal = ["localhost", "127.0.0.1", ""].includes(window.location.hostname);
  const label = language === "zh" ? "访问次数" : "Page views";

  return (
    <div className="inline-flex min-h-8 items-center gap-2 text-xs text-muted-foreground">
      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{label}</span>
      {isLocal ? (
        <span className="rounded-full bg-secondary px-2.5 py-1">
          {language === "zh" ? "发布后开始统计" : "Live after deployment"}
        </span>
      ) : (
        <a
          href="https://hits.sh/liuliu3dv.github.io/"
          target="_blank"
          rel="noreferrer"
          title={language === "zh" ? "查看访问统计（按加载次数计数，非独立访客）" : "View statistics (page loads, not unique visitors)"}
        >
          <img
            src="https://hits.sh/liuliu3dv.github.io.svg?style=flat&label=views&color=365a77&labelColor=66727d"
            alt={label}
            className="h-5 w-auto"
            referrerPolicy="no-referrer"
          />
        </a>
      )}
    </div>
  );
}
