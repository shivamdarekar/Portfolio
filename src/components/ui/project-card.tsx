"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LavenderBadge } from "@/components/ui/lavender-badge";
import { CATEGORY_ICON_MAP, MOTION_VARIANTS } from "@/lib/ui-constants";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const IconComponent = CATEGORY_ICON_MAP[project.category as keyof typeof CATEGORY_ICON_MAP];
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={MOTION_VARIANTS.fadeUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20">
                {IconComponent ? <IconComponent className="h-16 w-16" /> : "💻"}
              </span>
            </div>
          )}
        </div>
        
        <CardHeader>
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <span className="text-2xl ml-2">
              {IconComponent && <IconComponent className="h-6 w-6" />}
            </span>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          
          <div className="space-y-1 mb-4">
            {project.features.slice(0, 2).map((feature, i) => (
              <p key={i} className="text-xs text-muted-foreground/80 flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span className="line-clamp-2">{feature}</span>
              </p>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <LavenderBadge key={tech}>
                {tech}
              </LavenderBadge>
            ))}
            {project.technologies.length > 4 && (
              <LavenderBadge variant="outline">
                +{project.technologies.length - 4} more
              </LavenderBadge>
            )}
          </div>
          
          <div className="flex gap-3 pt-4 border-t border-border/50">
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
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
                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                <Github className="h-4 w-4" />
                Source Code
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}