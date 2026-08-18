import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
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
        <Reveal>
          <p className="text-xl leading-relaxed text-paper md:text-2xl">{about.intro}</p>
          <p className="mt-8 text-lg leading-relaxed text-muted">{about.body}</p>
        </Reveal>

        <aside className="space-y-6 border-t border-line pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <Reveal className="flex justify-center" delay={120}>
            <div className="photo-frame overflow-hidden rounded-full border border-line">
              <Image
                src="/images/profil.png"
                alt={site.name}
                width={160}
                height={160}
                className="h-36 w-36 scale-110 object-cover object-[50%_18%] md:h-40 md:w-40"
                priority
              />
            </div>
          </Reveal>
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
            <p className="text-xs uppercase tracking-[0.2em] text-muted">WhatsApp</p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 block hover:text-lime">
              Discuter sur WhatsApp
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
          <a
            href={site.cv}
            download
            className="inline-flex items-center gap-2 bg-lime px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink"
          >
            <Download size={14} />
            Télécharger le CV
          </a>
          <Link
            href="/contact"
            className="inline-flex border border-line px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper"
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
            {experiences.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
              <article className="grid gap-4 border-t border-line py-8 md:grid-cols-[160px_1fr]">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-lime">Formation</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Études</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {education.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
              <article className="lift-card border border-line bg-raised p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.year}</p>
                <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-lime">{item.place}</p>
                <p className="mt-4 text-sm text-muted">{item.text}</p>
              </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 border-t border-line pt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Certifications</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {certifications.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                <article className="lift-card border border-line bg-raised p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.year}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-lime">{item.place}</p>
                  {item.file && (
                    <a
                      href={item.file}
                      download
                      className="mt-5 inline-flex items-center gap-2 text-sm text-paper hover:text-lime"
                    >
                      <Download size={14} />
                      Télécharger le PDF
                    </a>
                  )}
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
