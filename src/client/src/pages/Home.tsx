import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BackgroundSection } from "@/components/BackgroundSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { NewsSection } from "@/components/NewsSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { ProfileCard } from "@/components/ProfileCard";
import { PublicationList } from "@/components/PublicationList";
import { ResearchFocusSection } from "@/components/ResearchFocusSection";
import { VisitorCounter } from "@/components/VisitorCounter";
import siteData from "../data.json";
import { Language, SiteData } from "../types";

type Page = "home" | "publications" | "about";

function pageFromHash(): Page {
  if (window.location.hash === "#/publications") return "publications";
  if (window.location.hash === "#/about") return "about";
  return "home";
}

export default function Home() {
  const data = siteData as SiteData;
  const [page, setPage] = useState<Page>(pageFromHash);
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("site-language");
    if (saved === "en" || saved === "zh") return saved;
    return "en";
  });
  const zh = language === "zh";

  useEffect(() => {
    const navigate = () => {
      setPage(pageFromHash());
    };
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  useEffect(() => {
    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = zh ? "zh-CN" : "en";
    const names = { home: zh ? "首页" : "Home", publications: zh ? "发表物" : "Publications", about: zh ? "个人介绍" : "About" };
    document.title = `${zh ? "刘浏" : "Liu Liu"} | ${names[page]}`;
  }, [language, page, zh]);

  const navigation: { page: Page; href: string; label: string }[] = [
    { page: "home", href: "#/", label: zh ? "首页" : "Home" },
    { page: "publications", href: "#/publications", label: zh ? "发表物" : "Publications" },
    { page: "about", href: "#/about", label: zh ? "个人介绍" : "About" },
  ];
  const featuredNames = ["IGGT4D:", "EmbodiedGen V2:", "HoloAgent-0:", "Uni3R:", "RoboTransfer:"];
  const featuredPapers = data.papers.filter((paper) => featuredNames.some((name) => paper.title.startsWith(name)));

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10">
      <header className="border-b bg-card/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <a href="#/" className="font-serif text-2xl font-semibold tracking-tight text-primary">{zh ? "刘浏" : "Liu Liu"}</a>
          <div className="flex flex-wrap items-center gap-5 sm:gap-8">
            <nav className="flex gap-5 text-sm font-medium" aria-label={zh ? "主导航" : "Primary"}>
              {navigation.map((item) => (
                <a key={item.page} href={item.href} aria-current={page === item.page ? "page" : undefined} className={`border-b-2 py-2 transition-colors ${page === item.page ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-primary"}`}>
                  {item.label}
                </a>
              ))}
            </nav>
            <LanguageToggle language={language} onChange={setLanguage} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {page === "home" && (
          <>
            <HeroSection profile={data.profile} language={language} />
            <div className="space-y-16 border-t py-14">
              {data.research_focus && <ResearchFocusSection items={data.research_focus} language={language} />}
              {data.open_source?.length ? <OpenSourceSection items={data.open_source} language={language} /> : null}
              <section>
                <PublicationList papers={featuredPapers} language={language} title={zh ? "代表性发表物" : "Selected publications"} description={zh ? "围绕世界动作模型与三维视觉的近期代表性工作。" : "A selection of recent work across world models and 3D vision."} />
                <a href="#/publications" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">{zh ? "查看全部发表物" : "View all publications"} <ArrowRight className="h-4 w-4" /></a>
              </section>
              <NewsSection news={data.news.slice(0, 6)} language={language} />
            </div>
          </>
        )}
        {page === "publications" && (
          <div className="mx-auto max-w-4xl py-12 md:py-16">
            <PublicationList papers={data.papers} language={language} />
          </div>
        )}
        {page === "about" && (
          <div className="grid gap-12 py-12 md:grid-cols-12 md:py-16">
            <aside className="md:col-span-4"><ProfileCard profile={data.profile} language={language} /></aside>
            <div className="space-y-14 md:col-span-8">
              {data.experience && <ExperienceSection items={data.experience} language={language} />}
              <BackgroundSection education={data.education || []} service={data.service || []} language={language} />
            </div>
          </div>
        )}
      </main>

      <footer className="border-t bg-card/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>© {new Date().getFullYear()} {zh ? data.profile.name_zh : data.profile.name}</p>
            <p className="mt-1 text-xs">{zh ? "欢迎具身智能方向的技术与合作交流。" : "Open to research and collaboration in embodied AI."}</p>
          </div>
          <VisitorCounter language={language} />
        </div>
      </footer>
    </div>
  );
}
