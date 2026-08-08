import { Users } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          title="Experience"
          subtitle="Apprenticeship, leadership, and practical learning beyond the classroom."
        />

        <div className="flex flex-col gap-4">
          {experience.map((item) => (
            <div
              key={item.organization}
              className="group grid gap-6 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 md:grid-cols-[1fr_auto] md:p-8"
            >
              <div className="flex gap-5">
                <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary">
                  <Users className="size-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {item.role}
                  </h3>
                  <p className="font-mono text-sm text-primary">{item.organization}</p>
                  <p className="leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center md:flex-col md:items-end md:text-right">
                <span className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-foreground">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
