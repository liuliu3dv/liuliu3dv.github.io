import { ArrowUpRight, Github, GraduationCap, Mail } from "lucide-react";
import { Language, Profile } from "../types";

export function HeroSection({ profile, language }: { profile: Profile; language: Language }) {
  const zh = language === "zh";

  return (
    <section className="py-12 md:py-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {zh ? "具身智能 · 世界模型 · 三维视觉" : "Embodied AI · World Models · 3D Vision"}
        </p>
        <div className="mt-5 flex items-center gap-5 sm:gap-6">
          <img
            src={profile.avatar}
            alt={zh ? "刘浏的个人照片" : "Liu Liu's profile photo"}
            className="h-20 w-20 shrink-0 rounded-2xl border object-cover sm:h-28 sm:w-28"
          />
          <h1 className="min-w-0 font-serif text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {zh ? profile.name_zh : profile.name}
          </h1>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">{zh ? profile.location_zh : profile.location}</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
          {zh ? profile.bio_zh : profile.bio}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary" href={profile.google_scholar} target="_blank" rel="noreferrer">
            <GraduationCap className="h-4 w-4" /> Google Scholar
          </a>
          <a className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary" href={profile.github_personal} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary" href={`mailto:${profile.email}`}>
            <Mail className="h-4 w-4" /> {zh ? "联系我" : "Email"}
          </a>
        </div>
        <a className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline" href="#/about">
          {zh ? "更多个人介绍" : "More about me"} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
