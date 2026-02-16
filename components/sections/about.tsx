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
              I&apos;m a software engineer specializing in the JavaScript ecosystem,
              with deep expertise in the MERN stack. I build web applications
              that are not only functional but crafted with attention to performance,
              accessibility, and user experience.
            </p>
            <p className="text-base leading-relaxed">
              With experience spanning REST API design, authentication systems,
              real-time features, and cloud deployments, I bring a full-stack
              perspective to every project. I&apos;m passionate about open source,
              continuous learning, and pushing the boundaries of what&apos;s possible
              on the web.
            </p>
            <p className="text-base leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to developer communities, or refining my understanding
              of software architecture and system design.
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
