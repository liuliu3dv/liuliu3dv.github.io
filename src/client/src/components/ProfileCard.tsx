import { Github, GraduationCap, Mail, MapPin } from "lucide-react";
import { Language, Profile } from "../types";
import { Button } from "./ui/button";

interface ProfileCardProps {
  profile: Profile;
  language: Language;
}

export function ProfileCard({ profile, language }: ProfileCardProps) {
  const isZh = language === "zh";
  const name = isZh ? profile.name_zh || profile.name : profile.name;
  const rawBio = isZh ? profile.bio_zh || profile.bio : profile.bio;
  const bio = isZh
    ? rawBio.replace("欢迎投递简历或联系交流。", "欢迎联系交流。")
    : rawBio.replace(" Please get in touch to apply or learn more.", "");
  const location = isZh ? profile.location_zh || profile.location : profile.location;
  const initials = isZh && profile.name_zh
    ? profile.name_zh.slice(0, 1)
    : profile.name.split(" ").map((part) => part[0]).join("");

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 select-none items-center justify-center overflow-hidden rounded-2xl bg-primary/5 text-3xl font-light text-primary ring-1 ring-primary/15 md:h-16 md:w-16 lg:h-20 lg:w-20">
              {profile.avatar ? <img src={profile.avatar} alt={name} className="h-full w-full object-cover" /> : initials}
            </div>
            <h1 className="min-w-0 font-serif text-3xl font-semibold tracking-tight lg:text-4xl">{name}</h1>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          {bio}
        </p>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <a className="hover:text-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button variant="outline" size="sm" asChild>
            <a href={profile.google_scholar} target="_blank" rel="noreferrer">
              <GraduationCap className="w-4 h-4 mr-2" />
              Google Scholar
            </a>
          </Button>
          {profile.github_personal && (
            <Button variant="outline" size="sm" asChild>
              <a href={profile.github_personal} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
