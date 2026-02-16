"use client"

import Image from "next/image"
import { ExternalLink, Github, ImagePlus } from "lucide-react"
import { Button } from "@/components/ui/button"

/*
 * ---------------------------------------------------------------
 * HOW TO ADD YOUR OWN PROJECTS
 * ---------------------------------------------------------------
 * 1. Drop your screenshot / image into the /public/projects/ folder
 *    e.g. /public/projects/my-app.png
 *
 * 2. Update the `image` field below to point to it:
 *    image: "/projects/my-app.png"
 *
 * 3. Edit title, description, tech, features, and links as needed.
 *
 * Leave `image` as `null` to keep the placeholder visible.
 * ---------------------------------------------------------------
 */

const projects = [
  {
    title: "Project One",
    image: null as string | null, // e.g. "/projects/project-one.png"
    description:
      "Replace this with a short description of your project. What does it do? What problem does it solve?",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Two",
    image: null as string | null, // e.g. "/projects/project-two.png"
    description:
      "Replace this with a short description of your project. What does it do? What problem does it solve?",
    tech: ["Next.js", "Express", "MongoDB"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Three",
    image: null as string | null, // e.g. "/projects/project-three.png"
    description:
      "Replace this with a short description of your project. What does it do? What problem does it solve?",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Four",
    image: null as string | null, // e.g. "/projects/project-four.png"
    description:
      "Replace this with a short description of your project. What does it do? What problem does it solve?",
    tech: ["Next.js", "MongoDB", "Vercel"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-secondary/50">
      <div className="rounded-full bg-muted p-3">
        <ImagePlus className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Project Screenshot
        </p>
        <p className="mt-1 font-mono text-xs text-muted-foreground/60">
          /public/projects/your-image.png
        </p>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-primary">
            {"// projects"}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected work
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Project Image / Placeholder */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-secondary/30">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <ImagePlaceholder />
                )}
                {/* Overlay with links on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Header */}
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 md:hidden">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
