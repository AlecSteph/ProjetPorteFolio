import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
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
            <MessageCircle className="mt-1 text-lime" size={18} />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">WhatsApp</p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block hover:text-lime"
              >
                Discuter sur WhatsApp
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

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 bg-lime px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-paper"
        >
          <MessageCircle size={16} />
          Me contacter sur WhatsApp
        </a>

        <div className="mt-10 flex flex-wrap gap-4">
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
