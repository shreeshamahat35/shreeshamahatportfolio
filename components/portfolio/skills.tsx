import { SectionHeading } from './section-heading'
import { skills } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="Skills"
          subtitle="The technical and human toolkit I am building on."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="inline-flex size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
