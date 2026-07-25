import { Github, GraduationCap, Mail, MapPin } from "lucide-react";
import { Profile } from "../types";
import { Button } from "./ui/button";

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="space-y-6">
      <div className="w-32 h-32 bg-muted rounded-sm flex items-center justify-center text-4xl text-muted-foreground font-light select-none">
        {profile.name.split(" ").map((n) => n[0]).join("")}
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-lg text-muted-foreground mt-1">
            {profile.title} @ <span className="text-primary">{profile.affiliation}</span>
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <span>nemo.liu@horizon.auto</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Shanghai, China</span>
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
                Personal GitHub
              </a>
            </Button>
          )}
          </div>
      </div>
    </div>
  );
}
