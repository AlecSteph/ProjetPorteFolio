"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/content";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
];

export default function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
              filter === item.id
                ? "border-lime bg-lime text-ink"
                : "border-line text-muted hover:border-paper hover:text-paper"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {list.map((project, i) => (
          <article
            key={project.slug}
            className={`group border border-line bg-raised p-6 transition hover:border-lime md:p-8 ${
              project.featured && filter === "all" ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-display text-5xl font-semibold text-line transition group-hover:text-lime/40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <span
                className={`text-xs uppercase tracking-[0.16em] ${
                  project.status === "En cours" ? "text-coral" : "text-lime"
                }`}
              >
                {project.status}
              </span>
            </div>

            <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {project.title}
            </h2>
            <p className="mt-4 max-w-2xl text-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-line px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{project.year}</p>
              <div className="flex flex-wrap gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-lime hover:text-paper"
                  >
                    Voir en ligne
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-paper hover:text-lime"
                  >
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
