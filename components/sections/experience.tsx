// "use client"

// const experiences = [
//   {
//     period: "2023 -- Present",
//     role: "Senior Full-Stack Developer",
//     company: "TechVentures Inc.",
//     companyUrl: "https://example.com",
//     description:
//       "Lead development of customer-facing web applications serving 50K+ daily users. Architected a microservices migration that improved response times by 40%.",
//     tech: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
//   },
//   {
//     period: "2021 -- 2023",
//     role: "Full-Stack Developer",
//     company: "Digital Solutions Co.",
//     companyUrl: "https://example.com",
//     description:
//       "Built and maintained multiple MERN stack applications for enterprise clients. Implemented CI/CD pipelines and automated testing that reduced deployment errors by 60%.",
//     tech: ["React", "Express", "MongoDB", "Jest", "Docker"],
//   },
//   {
//     period: "2020 -- 2021",
//     role: "Frontend Developer",
//     company: "StartupLab",
//     companyUrl: "https://example.com",
//     description:
//       "Developed responsive, accessible user interfaces for a SaaS analytics platform. Improved core web vitals scores across the board, boosting SEO rankings significantly.",
//     tech: ["React", "Next.js", "Tailwind CSS", "Redux"],
//   },
//   {
//     period: "2019 -- 2020",
//     role: "Junior Developer",
//     company: "CodeCraft Agency",
//     companyUrl: "https://example.com",
//     description:
//       "Contributed to client projects building custom CMS solutions and e-commerce platforms. Gained foundational experience in full-stack JavaScript development.",
//     tech: ["JavaScript", "Node.js", "MongoDB", "Express"],
//   },
// ]

// export function Experience() {
//   return (
//     <section id="experience" className="px-6 py-24 md:py-32">
//       <div className="mx-auto max-w-6xl">
//         <div className="mb-16">
//           <p className="mb-3 font-mono text-sm text-primary">
//             {"// experience"}
//           </p>
//           <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//             Where I&apos;ve worked
//           </h2>
//         </div>

//         <div className="space-y-2">
//           {experiences.map((exp) => (
//             <div
//               key={exp.role}
//               className="group rounded-xl border border-transparent p-6 transition-all hover:border-border hover:bg-card"
//             >
//               <div className="grid gap-4 md:grid-cols-[200px_1fr]">
//                 <div className="font-mono text-sm text-muted-foreground">
//                   {exp.period}
//                 </div>
//                 <div>
//                   <h3 className="mb-1 text-base font-semibold text-foreground">
//                     {exp.role}{" "}
//                     <span className="text-primary">
//                       {"@"}{" "}
//                       <a
//                         href={exp.companyUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:underline"
//                       >
//                         {exp.company}
//                       </a>
//                     </span>
//                   </h3>
//                   <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
//                     {exp.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.tech.map((t) => (
//                       <span
//                         key={t}
//                         className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
