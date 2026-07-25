export interface Profile {
  name: string;
  title: string;
  affiliation: string;
  research_areas: string[];
  google_scholar: string;
  /** Personal GitHub profile (e.g. liuliu3dv). */
  github_personal?: string;
  h_index: number;
  i10_index: number;
  bio: string;
}

export interface OpenSourceLink {
  title: string;
  url?: string;
  description?: string;
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
}

export interface Paper {
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
}
