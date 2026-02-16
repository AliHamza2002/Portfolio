"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function ParticleBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const canvasRef = useCallback(
    (canvas: HTMLCanvasElement | null) => {
      if (!canvas || !mounted) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      let animationId: number
      let particles: Particle[] = []

      const resize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      const createParticles = () => {
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80)
        particles = Array.from({ length: count }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        }))
      }

      const isDark = resolvedTheme === "dark"
      const particleColor = isDark ? "200, 160, 255" : "120, 60, 180"
      const lineColor = isDark ? "180, 140, 240" : "140, 80, 200"

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]

          // Move
          p.x += p.vx
          p.y += p.vy

          // Bounce
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1

          // Draw particle
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`
          ctx.fill()

          // Draw lines between close particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j]
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 150) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = `rgba(${lineColor}, ${0.12 * (1 - dist / 150)})`
              ctx.lineWidth = 0.6
              ctx.stroke()
            }
          }
        }

        animationId = requestAnimationFrame(draw)
      }

      resize()
      createParticles()
      draw()

      const handleResize = () => {
        resize()
        createParticles()
      }

      window.addEventListener("resize", handleResize)

      return () => {
        cancelAnimationFrame(animationId)
        window.removeEventListener("resize", handleResize)
      }
    },
    [mounted, resolvedTheme]
  )

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
