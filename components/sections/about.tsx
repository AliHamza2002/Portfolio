"use client"

import { Code2, Database, Globe, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-tested code following industry best practices and design patterns.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency, from bundle size to database queries.",
  },
  {
    icon: Globe,
    title: "Full-Stack",
    description: "End-to-end development from responsive UIs to robust APIs and database architecture.",
  },
  {
    icon: Database,
    title: "Scalability",
    description: "Designing systems that grow gracefully, handling increased traffic and data with ease.",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-primary">{"// about"}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A developer who cares about the craft
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-muted-foreground">
            <p className="text-base leading-relaxed">
              I&apos;m Ali Hamza, a Software Engineering graduate specializing in modern 
              web application development with a strong focus on the MERN stack. 
              I build scalable, performance-driven web solutions that combine clean 
              architecture with exceptional user experience. My approach blends 
              technical precision with thoughtful design. 
                        </p>
            <p className="text-base leading-relaxed">
               My experience spans full-stack JavaScript development, RESTful API design, 
                authentication systems, real-time features, and cloud-ready deployments. 
                Beyond MERN, I have worked on WordPress-based eCommerce platforms, 
                online ordering systems, and Flutter applications integrated with Firebase. 
                My academic background in Artificial Intelligence and Data Science 
                strengthens my problem-solving and system design capabilities.
            </p>
            <p className="text-base leading-relaxed">
              I&apos;m passionate about advanced web app architecture, scalable backend systems, 
              and continuous learning. Whether developing custom business solutions, 
              building dynamic dashboards, or experimenting with new technologies, 
              I constantly strive to push my technical boundaries and deliver 
              impactful digital experiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
