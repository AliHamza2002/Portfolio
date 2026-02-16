"use client"

import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"
import pic from "../pic.png"

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "MERN Specialist",
  "Open Source Contributor",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 70)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative z-10 flex min-h-screen items-center px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
        {/* Left content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="mb-4 text-xl font-medium text-foreground sm:text-2xl">
            Hi There!{" "}
            <span className="wave-hand inline-block text-2xl sm:text-3xl">
              {"\\ud83d\\udc4b"}
            </span>
          </h2>

          <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {"I'm "}
            <span className="text-primary">Ali Hamza</span>
          </h1>

          <div className="my-6 flex h-10 items-center justify-center lg:justify-start">
            <span className="text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
              {displayed}
              <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-primary text-transparent">
                |
              </span>
            </span>
          </div>

          <p className="mx-auto mb-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0 sm:text-lg">
            I craft performant, scalable web applications using the MERN stack.
            Focused on clean architecture, great user experiences, and code that
            stands the test of time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button asChild size="lg" className="gap-2 font-medium">
              <a href="#projects">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 font-medium border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Right - Avatar/Illustration placeholder */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 bg-card shadow-2xl shadow-primary/10 sm:h-80 sm:w-80">
              {/* Replace with your image: <Image src="/your-photo.png" ... /> */}
              <Image
                  src={pic}
                  alt="Ali Hamza"
                  className="h-full w-full object-cover"
                  priority
                />

              {/* <div className="flex h-full w-full items-center justify-center bg-secondary/50">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  className="text-primary/30"
                >
                  <circle cx="60" cy="45" r="22" stroke="currentColor" strokeWidth="3" />
                  <path
                    d="M20 105c0-22 18-40 40-40s40 18 40 40"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div> */}
            </div>
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Social strip at bottom */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-5">
        <span className="text-sm font-medium text-muted-foreground">
          Find Me On
        </span>
        <div className="h-px w-8 bg-border" />
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/10"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/10"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/10"
          aria-label="Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
