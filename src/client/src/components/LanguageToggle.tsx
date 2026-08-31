import { Languages } from "lucide-react";
import { Language } from "../types";

interface LanguageToggleProps {
  language: Language;
  onChange: (language: Language) => void;
}

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border bg-card p-1 text-xs shadow-sm"
      role="group"
      aria-label="Language / 语言"
    >
      <Languages className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
      {(["en", "zh"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={language === option}
          className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
            language === option
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {option === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
