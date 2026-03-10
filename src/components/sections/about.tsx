"use client";

import { educationData } from "@/data/achievements";
import { Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header-v2";
import { MotionWrapper } from "@/components/common/motion-wrapper";
import { CATEGORY_ICON_MAP } from "@/lib/ui-constants";
import Image from "next/image";

export function About() {
  const EducationIcon = CATEGORY_ICON_MAP.education;
  
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <SectionHeader 
          title="About Me"
          highlightWord="Me"
          subtitle="Passionate about building innovative solutions at the intersection of cloud computing, full-stack development, and emerging technologies."
        />

        {/* Intro + Education */}
        <MotionWrapper variant="fadeUp" delay={0.2} className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT — FLOATING PHOTO + CARD (Mobile first) */}
            <div className="relative flex flex-col items-center order-first md:order-none">
              {/* FLOATING IMAGE */}
              <div className="-mt-8 mb-8">
                <div className="relative w-75 h-75 rounded-full p-[4px] bg-gradient-to-br from-primary via-purple-500 to-blue-500 shadow-2xl">
                  <div className="rounded-full overflow-hidden w-full h-full">
                    <Image
                      src="/me/me.jpg"
                      alt="Shivam Darekar"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* EDUCATION CARD */}
              <div className="w-full space-y-4 hidden md:block">
                {educationData.map((edu, index) => (
                  <MotionWrapper
                    key={edu.id}
                    variant="fadeUp"
                    delay={index * 0.1}
                    className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <EducationIcon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>

            </div>

            {/* RIGHT — About Text */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Hi, I&apos;m Shivam Darekar, a passionate Computer Science Engineering student who loves building scalable web applications and exploring how systems work behind the scenes.
                I enjoy turning ideas into real-world products using clean code, thoughtful design, and performance-focused architecture.
              </p>

              <p>
                Currently pursuing my B.Tech at Parul Institute of Technology, Parul University, Vadodara, I&apos;m sharpening my skills in Data Structures & Algorithms, Full-Stack Development, and stepping into the world of DevOps to understand how software runs reliably at scale.
              </p>

              <p>
                I&apos;ve worked on projects like TaskHub (a team collaboration platform), TrendsWave (an e-commerce platform with secure payments), and Vidtube (a video-sharing backend), gaining hands-on experience with modern tech stacks including React, Next.js, Node.js, and databases like MongoDB and PostgreSQL.
              </p>
            </div>
          </div>

          {/* Mobile Education Cards */}
          <div className="md:hidden w-full space-y-4 mt-8">
            {educationData.map((edu, index) => (
              <MotionWrapper
                key={edu.id}
                variant="fadeUp"
                delay={index * 0.1}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <EducationIcon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
