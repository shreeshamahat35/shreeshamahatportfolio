import { ArrowDownRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="inline-flex size-2 rounded-full bg-primary" />
          {profile.available ? 'Open to opportunities' : 'Student'} · {profile.availability}
        </div>

        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          {profile.role} — building a foundation in{' '}
          <span className="text-foreground">
            data, intelligence, and research.
          </span>
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {profile.focus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore my work
            <ArrowDownRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
