"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-primary">
            {"Contact"}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in touch
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Text and Links */}
          <div>
            <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Drop me a message and
              I&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:alihamzazubair@gmail.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">
                    alihamzazubair@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/AliHamza2002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Github className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium text-foreground">
                    github.com/AliHamza2002
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ali-hamza-zubair/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground">
                    linkedin.com/in/ali-hamza-zubair
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-xl border border-border bg-card p-6">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Message sent!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" className="w-full gap-2 font-medium">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
