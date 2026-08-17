import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Projets",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        index="04 — Projets"
        title="Sélection"
        subtitle="Projets académiques et professionnels. Les liens et visuels arriveront au fur et à mesure."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <ProjectGrid />
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Un projet en tête ?</h2>
            <p className="mt-4 max-w-lg text-muted">
              Je suis ouvert aux collaborations, alternances et défis techniques.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-lime px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Discutons-en
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
