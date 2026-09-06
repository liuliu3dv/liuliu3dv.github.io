export type Language = "en" | "zh";

export interface Profile {
  name: string;
  name_zh?: string;
  avatar?: string;
  title: string;
  title_zh?: string;
  affiliation: string;
  affiliation_zh?: string;
  research_areas: string[];
  google_scholar: string;
  /** Personal GitHub profile (e.g. liuliu3dv). */
  github_personal?: string;
  email?: string;
  location?: string;
  location_zh?: string;
  citations?: number;
  h_index: number;
  i10_index: number;
  bio: string;
  bio_zh?: string;
}

export interface OpenSourceLink {
  title: string;
  url?: string;
  description?: string;
  description_zh?: string;
  image?: string;
  tags?: string[];
  links?: Array<{
    label: string;
    url: string;
  }>;
}

export interface NewsItem {
  date: string;
  content: string;
  content_zh?: string;
}

export interface ResearchFocusItem {
  title: string;
  title_zh: string;
  description: string;
  description_zh: string;
  projects: string[];
}

export interface ExperienceItem {
  company: string;
  company_zh: string;
  role: string;
  role_zh: string;
  location: string;
  location_zh: string;
  period: string;
  summary: string;
  summary_zh: string;
  highlights?: string[];
  highlights_zh?: string[];
}

export interface EducationItem {
  degree: string;
  degree_zh: string;
  institution: string;
  institution_zh: string;
}

export interface ServiceItem {
  label: string;
  label_zh: string;
  content: string;
  content_zh: string;
}

export interface Paper {
  roles?: Array<"project_lead" | "corresponding_author">;
  title: string;
  authors: string;
  venue: string;
  year: number;
  paper_link: string;
  code_link: string;
  project_page: string;
  tags: string[];
  thumbnail?: string;
}

export interface SiteData {
  profile: Profile;
  news: NewsItem[];
  papers: Paper[];
  open_source?: OpenSourceLink[];
  research_focus?: ResearchFocusItem[];
  experience?: ExperienceItem[];
  education?: EducationItem[];
  service?: ServiceItem[];
}
