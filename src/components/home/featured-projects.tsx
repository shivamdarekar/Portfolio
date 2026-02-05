"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ProjectCard } from "@/components/ui/project-card";

import { projects as allProjects } from "@/data/projects";

export function FeaturedProjects() {
  const projects = allProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-28 bg-black text-white overflow-hidden"
    >
      {/* 🌌 Starry Black Background */}
      <ShootingStars />
      <StarsBackground />

      {/* Subtle radial dark glow for focus */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.75),transparent_80%)]" />

      {/* faint grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em]">
              <Sparkles className="h-3 w-3" />
              <span className="font-mono">Selected Work</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Featured <span className="text-zinc-400">Projects</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-zinc-400">
              Full-stack projects where I build{" "}
              <span className="font-semibold text-zinc-100">
                end-to-end solutions
              </span>{" "}
              with{" "}
              <span className="font-semibold text-zinc-100">
                modern tech stacks
              </span>{" "}
              and scalable architectures — from frontend UI to backend APIs.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 text-xs md:text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-zinc-200" />
              <span className="font-mono uppercase tracking-[0.2em]">
                Built, not imagined
              </span>
            </div>
            <p className="max-w-sm text-right md:text-right">
              Every card below maps to a real repo / demo
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
