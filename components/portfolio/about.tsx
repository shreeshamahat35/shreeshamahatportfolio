import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { profile } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-16">
          {/* The single photo of you lives here — the only image upload spot. */}
          <div className="relative mx-auto w-full max-w-xs md:mx-0">
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-border" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src="/portrait.png"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span>{profile.name}</span>
              <span className="text-primary">BIM · 6th Sem</span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-xl leading-relaxed text-foreground text-pretty md:text-2xl">
              {profile.intro}
            </p>
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
