import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Education } from '@/components/portfolio/education'
import { Skills } from '@/components/portfolio/skills'
import { Certifications } from '@/components/portfolio/certifications'
import { Research } from '@/components/portfolio/research'
import { Involvement } from '@/components/portfolio/involvement'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Research />
      <Involvement />
      <Contact />
    </main>
  )
}
