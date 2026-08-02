import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { education } from '@/lib/portfolio-data'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Education"
          subtitle="A blend of science fundamentals and information management."
        />

        <div className="flex flex-col gap-4">
          {education.map((item) => (
            <div
              key={item.school}
              className="group grid gap-6 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 md:grid-cols-[1fr_auto] md:p-8"
            >
              <div className="flex gap-5">
                <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="font-mono text-sm text-primary">{item.school}</p>
                  <p className="leading-relaxed text-muted-foreground text-pretty">
                    {item.detail}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 md:flex-col md:items-end md:text-right">
                <span className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-foreground">
                  {item.status}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
