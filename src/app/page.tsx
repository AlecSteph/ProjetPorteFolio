import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, site, techMarquee } from "@/lib/content";

export default function HomePage() {
  const loop = [...techMarquee, ...techMarquee];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-5 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-between pb-10">
          <div>
            <p className="reveal text-xs uppercase tracking-[0.28em] text-lime">
              {site.availability}
            </p>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-[14vw] font-semibold leading-[0.82] tracking-[-0.05em] md:text-[9.5vw]">
              Stéphane
              <br />
              Kamdem
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-xl text-lg text-muted md:text-xl">
              {site.role} à {site.location}. {site.tagline}
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 bg-lime px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-paper"
              >
                Voir les projets
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={site.cv}
                download
                className="inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-paper transition hover:border-lime hover:text-lime"
              >
                Télécharger le CV
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.index}
                className="lift-card bg-ink p-6 md:p-8"
                style={{ animation: `reveal 0.7s ease both ${400 + i * 120}ms` }}
              >
                <p className="text-xs text-lime">{service.index}</p>
                <h2 className="mt-4 font-display text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-line py-5">
        <div className="flex w-max marquee-track gap-10 pr-10">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-2xl uppercase tracking-[0.18em] text-muted"
            >
              {item}
              <span className="ml-10 text-lime">/</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
