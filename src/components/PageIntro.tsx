export default function PageIntro({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-b border-line px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.28em] text-lime">{index}</p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{subtitle}</p>
      </div>
    </section>
  );
}
