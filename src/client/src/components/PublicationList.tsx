import { FileText, Github, Globe } from "lucide-react";
import { Paper } from "../types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface PublicationListProps {
  papers: Paper[];
}

export function PublicationList({ papers }: PublicationListProps) {
  if (!papers || papers.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2">Publications</h2>
      <div className="space-y-8">
        {papers.map((paper, idx) => (
          <div key={idx} className="flex gap-6 group">
            <div className="hidden sm:block w-32 h-24 bg-muted rounded-sm flex-shrink-0 overflow-hidden border">
              {paper.thumbnail ? (
                <img
                  src={paper.thumbnail}
                  alt={paper.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : null}
            </div>

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
              <div className="flex items-center gap-3 text-sm">
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
                    <FileText className="w-3 h-3" /> PDF
                  </a>
                )}
                {paper.code_link && (
                  <a href={paper.code_link} target="_blank" rel="noreferrer"
                     className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-3 h-3" /> Code
                  </a>
                )}
                {paper.project_page && (
                  <a href={paper.project_page} target="_blank" rel="noreferrer"
                     className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <Globe className="w-3 h-3" /> Project
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
