import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {site.role} à {site.location}. {site.availability}.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Navigation</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block text-sm text-paper hover:text-lime"
          >
            {site.email}
          </a>
          <a href={`tel:${site.phoneRaw}`} className="mt-2 block text-sm text-paper hover:text-lime">
            {site.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center text-xs text-muted md:px-8">
        © {new Date().getFullYear()} {site.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
