import { ExternalLink, Github, Globe } from "lucide-react";
import { OpenSourceLink } from "../types";
import { Badge } from "./ui/badge";

interface OpenSourceSectionProps {
  items: OpenSourceLink[];
}

export function OpenSourceSection({ items }: OpenSourceSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2">Open source &amp; lab</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Selected Horizon Robotics Robot Lab hubs and project pages I contribute to alongside collaborators.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, idx) => (
          <article
            key={idx}
            className="overflow-hidden rounded-lg border bg-card shadow-sm transition-colors hover:border-primary/40"
          >
            {item.image ? (
              <a href={item.url || item.links?.[0]?.url} target="_blank" rel="noreferrer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover object-center"
                  loading="lazy"
                />
              </a>
            ) : (
              <div className="h-44 w-full bg-muted" />
            )}
            <div className="space-y-3 p-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                  {(item.url || item.links?.[0]?.url) && (
                    <a
                      href={item.url || item.links?.[0]?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`Open ${item.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {item.links && item.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-1 text-xs">
                  {item.links.map((link) => {
                    const Icon = /code|github/i.test(link.label) ? Github : Globe;
                    return (
                      <a
                        key={link.label + link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-muted-foreground pt-1">
        Full organization list:{" "}
        <a
          href="https://github.com/HorizonRobotics"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:text-primary hover:underline"
        >
          github.com/HorizonRobotics
        </a>
        .
      </p>
    </section>
  );
}
