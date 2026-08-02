import { SectionHeading } from './section-heading'
import { researchInterests } from '@/lib/portfolio-data'

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          title="Research Interests"
          subtitle="The areas I am exploring and want to grow into."
        />

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {researchInterests.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col gap-3 bg-card p-8 transition-colors hover:bg-secondary"
            >
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
