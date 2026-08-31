import { ArrowUpRight, Github, GraduationCap, Mail } from "lucide-react";
import { Language, Profile } from "../types";

export function HeroSection({ profile, language }: { profile: Profile; language: Language }) {
  const zh = language === "zh";

  return (
    <section className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.5fr_0.8fr] lg:gap-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {zh ? "具身智能 · 世界模型 · 三维视觉" : "Embodied AI · World Models · 3D Vision"}
        </p>
        <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {zh ? profile.name_zh : profile.name}
        </h1>
        <p className="mt-5 text-lg font-medium">
          {zh ? profile.title_zh : profile.title}
          <span className="text-muted-foreground"> · {zh ? profile.affiliation_zh : profile.affiliation}</span>
        </p>
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
      <div className="mx-auto w-full max-w-[300px]">
        <div className="overflow-hidden rounded-3xl border bg-card shadow-lg shadow-primary/5">
          <img src={profile.avatar} alt={zh ? "刘浏的个人照片" : "Liu Liu's profile photo"} className="aspect-[3/2] w-full object-cover" />
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">{zh ? profile.location_zh : profile.location}</p>
      </div>
    </section>
  );
}
