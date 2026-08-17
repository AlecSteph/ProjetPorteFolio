import PageIntro from "@/components/PageIntro";
import { skillCategories, softSkills } from "@/lib/content";

export const metadata = {
  title: "Compétences",
};

export default function SkillsPage() {
  return (
    <>
      <PageIntro
        index="03 — Compétences"
        title="Ce que je maîtrise"
        subtitle="Un stack web complet, du navigateur jusqu’au déploiement — et une formation IA en cours à l’ECE."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          {skillCategories.map((category) => (
            <article key={category.title}>
              <h2 className="font-display text-3xl font-semibold">{category.title}</h2>
              <ul className="mt-8 space-y-5">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span>{item.name}</span>
                      <span className="text-xs text-muted">{item.level}%</span>
                    </div>
                    <div className="h-px bg-line">
                      <div className="h-px bg-lime" style={{ width: `${item.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-semibold">Au-delà du code</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {softSkills.map((skill, i) => (
              <article key={skill.title} className="border border-line p-6">
                <p className="text-xs text-lime">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-xl font-semibold">{skill.title}</h3>
                <p className="mt-3 text-sm text-muted">{skill.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
