import { FileText, Github, Globe } from "lucide-react";
import { Language, Paper } from "../types";
import { Badge } from "./ui/badge";

interface PublicationListProps {
  papers: Paper[];
  language: Language;
  title?: string;
  description?: string;
}

export function PublicationList({ papers, language, title, description }: PublicationListProps) {
  if (!papers || papers.length === 0) return null;

  const roleLabels = {
    project_lead: language === "zh" ? "项目负责人" : "Project Lead",
    corresponding_author: language === "zh" ? "通讯作者" : "Corresponding Author",
  };

  return (
    <section className="space-y-6">
      <div className="border-b pb-3">
        <h2 className="text-2xl font-bold">{title || (language === "zh" ? "发表物" : "Publications")}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {description || (language === "zh" ? "论文与技术报告；完整列表请参见 Google Scholar。" : "Papers and technical reports. See Google Scholar for the complete list.")}
        </p>
      </div>
      <div className="space-y-8">
        {papers.map((paper, idx) => (
          <div key={idx} className="flex gap-6 group">
            {paper.thumbnail && (
              <div className="hidden sm:block w-32 h-24 bg-muted rounded-sm flex-shrink-0 overflow-hidden border">
                <img
                  src={paper.thumbnail}
                  alt={paper.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <div className="space-y-2">
              <h3 className="font-medium text-lg leading-tight group-hover:text-primary transition-colors">
                {paper.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {paper.authors.split(", ").map((author, i) => (
                  <span key={i}>
                    {author.includes("Liu Liu") ? (
                      <span className="font-semibold text-foreground">{author}</span>
                    ) : (
                      author
                    )}
                    {i < paper.authors.split(", ").length - 1 && ", "}
                  </span>
                ))}
              </p>
              {paper.roles?.length ? (
                <p className="text-xs font-medium leading-relaxed text-primary">
                  {language === "zh" ? "本人角色：" : "My role: "}
                  {paper.roles.map((role) => roleLabels[role]).join(" · ")}
                </p>
              ) : null}
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-medium italic">{paper.venue} {paper.year}</span>
                {paper.tags && paper.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3 pt-1">
                {paper.paper_link && (
                  <a href={paper.paper_link} target="_blank" rel="noreferrer" 
                     className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <FileText className="w-3 h-3" /> {language === "zh" ? "论文" : "Paper"}
                  </a>
                )}
                {paper.code_link && (
                  <a href={paper.code_link} target="_blank" rel="noreferrer"
                     className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-3 h-3" /> {language === "zh" ? "代码" : "Code"}
                  </a>
                )}
                {paper.project_page && (
                  <a href={paper.project_page} target="_blank" rel="noreferrer"
                     className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <Globe className="w-3 h-3" /> {language === "zh" ? "项目主页" : "Project"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
