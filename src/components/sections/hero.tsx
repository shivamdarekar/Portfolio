"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LazyStarsBackground } from "@/components/3d/lazy-stars";
import { 
  Typewriter, 
  GradientText,
  MagneticButton,
  FloatingParticles
} from "@/components/animations";
import { MotionWrapper } from "@/components/common/motion-wrapper";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <LazyStarsBackground />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 via-transparent to-teal/10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <MotionWrapper 
          variant="fadeUp" 
          transition="default"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <MotionWrapper
            variant="fadeDown"
            delay={0.2}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            <p>Hello, I&apos;m</p>
          </MotionWrapper>

          {/* Name with gradient */}
          <MotionWrapper
            variant="scaleIn"
            delay={0.3}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{ 
              background: "none",
              WebkitTextFillColor: "unset"
            }}
          >
            <h1>
              <GradientText className="font-display">
                Shivam Darekar
              </GradientText>
            </h1>
          </MotionWrapper>

          {/* Tagline */}
          <MotionWrapper
            variant="fadeUp"
            delay={0.4}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            <div>
              <span className="block mt-2">
                <Typewriter 
                  words={[
                    "Full-Stack Developer",
                    "Product Management enthusiast",
                    "Problem Solver",
                    "Tech Innovator"
                  ]}
                  className="text-primary font-semibold"
                />
              </span>
            </div>
          </MotionWrapper>

          {/* CTA Buttons */}
          <MotionWrapper
            variant="fadeUp"
            delay={0.5}
            className="flex flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <div>
              <MagneticButton>
                <Button asChild size="lg" className="text-sm sm:text-base px-4 sm:px-8">
                  <Link href="/about">About Me</Link>
                </Button>
              </MagneticButton>
            </div>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  );
}
      
