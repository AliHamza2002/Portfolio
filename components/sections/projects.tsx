"use client"

import Image from "next/image"
import { ExternalLink, Github, ImagePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import img1 from "../../public/project/1707327853026.jpg"
import img2 from "../../public/project/1766676228463.jpg"
import img3 from "../../public/project/1766676354110.jpg"
import img4 from "../../public/project/1766676513575.jpg"
import img5 from "../../public/project/Screenshot 2026-02-16 194626.png"


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
    title: "Hotel Booking",
    image: img5, // e.g. "/projects/project-one.png"
    description:
      "Excited to share my hotel booking web application built to deliver a smooth and intuitive booking experience. Users can explore hotels, check availability, view room details, and book stays seamlessly through a clean and responsive interface.",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    // github: "https://github.com",
    // live: "https://example.com",
  },
  {
    title: "Bacci Coffee House",
    image: img1, // e.g. "/projects/project-two.png"
    description:
      "Check out! this is the latest website which I have developed for my client. It's a coffee house where user can place order with specific pick up time of his coffee",
    tech: ["Wordpress", "Elementor", "Ecommerce"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    // github: "https://github.com",
    // live: "https://example.com",
  },
  {
    title: "Ethiopis Pharmacy",
    image: img4, // e.g. "/projects/project-three.png"
    description:
      "Pleased to share Ethiopis Pharmacy, a comprehensive online pharmacy platform offering a wide range of medicines, wellness products, and health essentials with a user-friendly shopping experience. The site features secure payments, free delivery, 24/7 support, and expert health content — making it easy for customers to order authentic health products online with confidence.",
    tech: ["Wordpress", "Elementor", "Ecommerce"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    // github: "https://github.com",
    // live: "https://example.com",
  },
  {
    title: "Cake District",
    image: img2, // e.g. "/projects/project-four.png"
    description:
      "Excited to share Cake District, a delicious online bakery platform offering a variety of sweet treats including cheesecakes, bites, desserts, dips, and more. With a user-friendly shop interface, customers in Kuwait can easily browse categories, explore best-selling items, and order their favorite desserts anytime. Perfect for satisfying dessert cravings or celebrating special moments!",
    tech: ["Wordpress", "Elementor", "Ecommerce"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    // github: "https://github.com",
    // live: "https://example.com",
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
                {/* <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
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
                </div> */}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Header */}
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {/* <div className="flex items-center gap-1.5 md:hidden">
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
                  </div> */}
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
