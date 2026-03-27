
"use client";

import Image from "next/image";
import { useState } from "react";

// Skill type
interface Skill {
  name: string;
  logo: string;
}

// Skills aligned with current portfolio projects
const skills: Skill[] = [
  { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
  { name: "React", logo: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", logo: "https://skillicons.dev/icons?i=nextjs&theme=light" },
  { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Express", logo: "https://skillicons.dev/icons?i=express&theme=light" },

  { name: "Redux Toolkit", logo: "https://skillicons.dev/icons?i=redux" },
  { name: "Tailwind CSS", logo: "https://skillicons.dev/icons?i=tailwind" },
  { name: "PostgreSQL", logo: "https://skillicons.dev/icons?i=postgres" },
  { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Prisma ORM", logo: "https://skillicons.dev/icons?i=prisma" },

  { name: "Redis", logo: "https://skillicons.dev/icons?i=redis" },
  { name: "Docker", logo: "https://skillicons.dev/icons?i=docker" },
  { name: "AWS", logo: "https://skillicons.dev/icons?i=aws" },
  { name: "Git", logo: "https://skillicons.dev/icons?i=git" },

  { name: "GitHub", logo: "https://skillicons.dev/icons?i=github&theme=light" },
  { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel&theme=light" },
  { name: "Cloudinary", logo: "https://skillicons.dev/icons?i=nodejs" },

  { name: "PostGIS", logo: "https://skillicons.dev/icons?i=postgres" },
  { name: "TensorFlow.js", logo: "https://skillicons.dev/icons?i=tensorflow" },
];

export function SkillsShowcase() {
  // auto split evenly based on screen
  const rows = [
    skills.slice(0, 6),    // Row 1: 6 skills
    skills.slice(6, 11),   // Row 2: 5 skills
    skills.slice(11, 15),  // Row 3: 4 skills
    skills.slice(15, 18),  // Row 4: 3 skills
    skills.slice(18, 20),  // Row 5: 2 skills
  ];

  return (
    <section id="skills" className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6">
      <div className="text-center mb-16 z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Technologies I use to build scalable full-stack products
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col items-center justify-center space-y-12">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {row.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// icon component
function SkillIcon({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center group">
      <div className="relative">
        {/* glow effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="relative z-10">
          {imgError ? (
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full">
              <span className="text-xs text-white text-center px-1">
                {skill.name}
              </span>
            </div>
          ) : (
            <Image
              src={skill.logo}
              alt={skill.name}
              width={64}
              height={64}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>

      <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </span>
    </div>
  );
}
