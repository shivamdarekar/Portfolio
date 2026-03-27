import { Projects } from "@/components/sections/projects";
import { Metadata } from "next";

export const revalidate = 0; // Disable caching - fetch fresh data on every request

export const metadata: Metadata = {
  title: "Projects | Shivam's Portfolio",
  description: "Explore my featured projects including web applications, mobile apps, and AI solutions.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Projects />
    </main>
  );
}