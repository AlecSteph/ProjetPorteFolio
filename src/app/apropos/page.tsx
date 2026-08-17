import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { about, certifications, education, experiences, site } from "@/lib/content";

export const metadata = {
  title: "À propos",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        index="02 — À propos"
        title="Qui je suis"
        subtitle="Du Cameroun à Paris, via Toulouse — web, produit, et maintenant l’IA."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-16 md:grid-cols-[1.4fr_0.8fr] md:px-8 md:py-24">
        <div>
          <p className="text-xl leading-relaxed text-paper md:text-2xl">{about.intro}</p>
          <p className="mt-8 text-lg leading-relaxed text-muted">{about.body}</p>
        </div>

        <aside className="space-y-6 border-t border-line pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block hover:text-lime">
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Téléphone</p>
            <a href={`tel:${site.phoneRaw}`} className="mt-2 block hover:text-lime">
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Localisation</p>
            <p className="mt-2">{site.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">École</p>
            <p className="mt-2">{site.school}</p>
            <p className="mt-1 text-sm text-muted">{site.program}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex bg-lime px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Me contacter
          </Link>
        </aside>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-lime">Expérience</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Parcours</h2>
          <div className="mt-12 space-y-0">
            {experiences.map((item) => (
              <article key={item.title} className="grid gap-4 border-t border-line py-8 md:grid-cols-[160px_1fr]">
                <p className="text-sm text-muted">{item.year}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-lime">{item.place}</p>
                  <ul className="mt-4 space-y-1 text-muted">
                    {item.points.map((point) => (
                      <li key={point}>— {point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-lime">Formation</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Études</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {education.map((item) => (
              <article key={item.title} className="border border-line bg-raised p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.year}</p>
                <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-lime">{item.place}</p>
                <p className="mt-4 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 border-t border-line pt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Certification</p>
            {certifications.map((item) => (
              <p key={item.title} className="mt-3 text-paper">
                {item.title} — {item.place}
                <span className="text-muted"> · {item.year}</span>
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
