import { Mail, Link as LinkIcon, Code, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { contact, profile } from '@/lib/portfolio-data'

const links = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: contact.linkedin.replace(/^https?:\/\//, ''),
    href: contact.linkedin,
    icon: LinkIcon,
  },
  {
    label: 'GitHub',
    value: contact.github.replace(/^https?:\/\//, ''),
    href: contact.github,
    icon: Code,
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          title="Contact"
          subtitle="Have an opportunity, question, or just want to connect? Reach out."
        />

        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
              Let&apos;s build something with data.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground text-pretty">
              I&apos;m always open to learning opportunities, collaborations, and
              conversations about AI and data science.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <span className="inline-flex size-2 rounded-full bg-primary" />
              {profile.availability}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const Icon = link.icon
              const isExternal = link.href.startsWith('http')
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {link.label}
                      </span>
                      <span className="text-foreground">{link.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              )
            })}
          </div>
        </div>

        <p className="mt-16 border-t border-border pt-8 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · Built with focus &amp; curiosity
        </p>
      </div>
    </section>
  )
}
