import { ArrowDownRight, Bot, ChevronDown, Database, Sparkles } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-28 size-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="inline-flex size-2 animate-pulse rounded-full bg-primary" />
            {profile.available ? 'Open to opportunities' : 'Student'} · {profile.availability}
          </div>

          <h1 className="font-display text-5xl font-bold leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            {profile.role} — turning <span className="text-foreground">data into intelligent decisions</span> through analytics, AI, and research.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {profile.focus.map((item, index) => (
              <span key={item} className="animate-in fade-in slide-in-from-bottom-2 rounded-full border border-border bg-card/80 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground backdrop-blur-sm duration-700" style={{ animationDelay: `${index * 100 + 350}ms`, animationFillMode: 'both' }}>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#about" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-[0_12px_35px_-12px_var(--primary)]">
              Explore my work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary">
              Contact
            </a>
          </div>
        </div>

        <div aria-label="AI and analytics visual" className="relative mx-auto aspect-square w-full max-w-md animate-float-slow">
          <div className="absolute inset-8 rounded-full border border-primary/25" />
          <div className="absolute inset-16 rounded-full border border-primary/20" />
          <div className="absolute inset-24 rounded-full border border-primary/15" />
          <div className="absolute inset-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary/50 bg-primary/10 shadow-[0_0_70px_-15px_var(--primary)] backdrop-blur-sm">
            <div className="flex size-full items-center justify-center"><Bot className="size-10 text-primary" /></div>
          </div>
          <div className="absolute inset-7 animate-orbit-slow rounded-full border border-dashed border-primary/15" />
          <div className="absolute left-[9%] top-[28%] flex size-12 animate-icon-drift rounded-xl border border-border bg-card text-primary shadow-lg"><Database className="size-5" /></div>
          <div className="absolute bottom-[18%] right-[12%] flex size-12 animate-icon-drift-reverse rounded-xl border border-border bg-card text-primary shadow-lg"><Sparkles className="size-5" /></div>
          <div className="absolute right-[8%] top-[16%] flex size-10 animate-icon-drift-delay items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-lg"><span className="size-2 animate-pulse rounded-full bg-primary" /></div>
          <div className="absolute bottom-[30%] left-[15%] flex size-8 animate-icon-drift-delay items-center justify-center rounded-full border border-primary/20 bg-card text-primary"><span className="size-1.5 rounded-full bg-primary" /></div>
          <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom animate-pulse-line bg-gradient-to-t from-primary/70 to-transparent" />
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"><span className="size-1.5 rounded-full bg-primary" /> Intelligence / Analytics</div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary md:block"><ChevronDown className="size-5 animate-bounce" /></a>
    </section>
  )
}
