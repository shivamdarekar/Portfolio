import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { SkillsShowcase } from "@/components/sections/skills";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ContactMe } from "@/components/home/contact-me";

export const revalidate = 0; // Disable caching - fetch fresh data on every request

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SkillsShowcase />
      <FeaturedProjects />
      <ContactMe />
    </>
  );
}
