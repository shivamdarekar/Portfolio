import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SkillsShowcase} from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "About | Shivam Darekar",
  description: "Learn more about Shivam Darekar - B.Tech Computer Science student at Parul University, passionate about full-stack development and DevOps",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <SkillsShowcase />
      </div>
    </>
  );
}