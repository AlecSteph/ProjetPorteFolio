import { Mail, MapPin, Phone } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { site, socials } from "@/lib/content";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="05 — Contact"
        title="Travaillons ensemble"
        subtitle="Alternance, collaboration ou projet : écrivez-moi, je réponds en 24 à 48 h."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex gap-4">
            <Mail className="mt-1 text-lime" size={18} />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block hover:text-lime">
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-1 text-lime" size={18} />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Téléphone</p>
              <a href={`tel:${site.phoneRaw}`} className="mt-1 block hover:text-lime">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="mt-1 text-lime" size={18} />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Localisation</p>
              <p className="mt-1">{site.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-line px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-paper transition hover:border-lime hover:text-lime"
            >
              {social.label}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
