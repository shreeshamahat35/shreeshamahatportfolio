export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12 flex flex-col gap-3 md:mb-16">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        {index} / {title}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl leading-relaxed text-muted-foreground text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  )
}
