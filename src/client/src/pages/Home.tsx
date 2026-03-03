import { NewsSection } from "@/components/NewsSection";
import { ProfileCard } from "@/components/ProfileCard";
import { PublicationList } from "@/components/PublicationList";
import siteData from "../data.json";
import { SiteData } from "../types";

export default function Home() {
  const data = siteData as SiteData;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10">
      <div className="container max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Sidebar: Profile */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-12">
              <ProfileCard profile={data.profile} />
            </div>
          </aside>

          {/* Right Content: News & Publications */}
          <main className="md:col-span-8 lg:col-span-9 space-y-16">
            <NewsSection news={data.news} />
            <PublicationList papers={data.papers} />
            
            <footer className="pt-12 border-t text-sm text-muted-foreground flex justify-between items-center">
              <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
              <p>Built with React & Tailwind</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
