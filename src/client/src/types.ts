export interface Profile {
  name: string;
  title: string;
  affiliation: string;
  research_areas: string[];
  email_domain: string;
  google_scholar: string;
  lab_page: string;
  github_org: string;
  h_index: number;
  i10_index: number;
  bio: string;
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
}

export interface SiteData {
  profile: Profile;
  news: NewsItem[];
  papers: Paper[];
}
