"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, X } from "lucide-react";
import { LavenderBadge } from "@/components/ui/lavender-badge";
import { CATEGORY_ICON_MAP } from "@/lib/ui-constants";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const IconComponent = CATEGORY_ICON_MAP[project.category as keyof typeof CATEGORY_ICON_MAP];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto bg-background border border-border/50 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
              {/* Header */}
              <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/50 p-6 flex items-start justify-between flex-shrink-0">
                <div className="flex items-start gap-3 flex-1">
                  {IconComponent && (
                    <IconComponent className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Image */}
                {project.image && (
                  <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                )}

                {/* Long Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* All Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <LavenderBadge key={tech}>{tech}</LavenderBadge>
                    ))}
                  </div>
                </div>

                {/* All Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
