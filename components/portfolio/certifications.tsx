import { Award } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { certifications } from '@/lib/portfolio-data'

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          title="Certifications & Trainings"
          subtitle="Hands-on learning that is shaping my foundation."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between gap-6 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                  <Award className="size-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {cert.year}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-pretty">
                  {cert.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
