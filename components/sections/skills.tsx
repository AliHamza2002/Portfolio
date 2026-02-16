"use client"

import { useEffect, useRef, useState } from "react"

/*
 * invertInDark: true  = icon is dark/black and needs `filter: invert(1)` in dark mode
 * invertInDark: false = icon is colorful and looks fine on both backgrounds
 */
const techStack = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", invertInDark: false },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", invertInDark: false },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", invertInDark: false },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertInDark: true },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", invertInDark: false },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertInDark: true },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", invertInDark: false },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", invertInDark: false },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", invertInDark: false },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", invertInDark: false },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", invertInDark: false },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", invertInDark: false },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", invertInDark: false },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", invertInDark: false },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", invertInDark: false },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", invertInDark: false },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", invertInDark: false },
]

const tools = [
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", invertInDark: false },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertInDark: true },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", invertInDark: false },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invertInDark: true },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", invertInDark: false },
  { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg", invertInDark: false },
]

function SkillIcon({
  name,
  icon,
  index,
  invertInDark,
}: {
  name: string
  icon: string
  index: number
  invertInDark: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <div className="group relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:h-24 sm:w-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          alt={name}
          className={`h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 ${
            invertInDark ? "dark:invert" : ""
          }`}
          loading="lazy"
        />
      </div>
      <span className="text-center text-xs font-medium text-muted-foreground sm:text-sm">
        {name}
      </span>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Professional{" "}
            <span className="text-primary">Skillset</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-8">
          {techStack.map((skill, i) => (
            <SkillIcon
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              index={i}
              invertInDark={skill.invertInDark}
            />
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              <span className="text-primary">Tools</span>{" "}
              I Use
            </h3>
            <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {tools.map((tool, i) => (
              <SkillIcon
                key={tool.name}
                name={tool.name}
                icon={tool.icon}
                index={i}
                invertInDark={tool.invertInDark}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
