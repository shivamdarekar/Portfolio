export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "pierc-ambassador",
    company: "Entrepreneurship Club (PIERC) - Parul University",
    role: "University Innovation Ambassador",
    duration: "2024 - 2025",
    location: "Vadodara, Gujarat",
    description:
      "Acting as a bridge between students and faculty to organize and promote innovation programs, hackathons, and skill-building initiatives at Parul University.",
    achievements: [
      "Organized and promoted innovation programs and hackathons for students",
      "Mentored junior students on project selection, internships, and technical learning paths",
      "Collaborated with faculty to strengthen student engagement in tech initiatives",
      "Strengthened leadership, communication, and mentoring skills through regular student interaction"
    ],
    technologies: [
      "Leadership",
      "Mentorship",
      "Event Management",
      "Communication"
    ],
    type: "part-time"
  },
  {
    id: "metaverse-club",
    company: "Metaverse Club - Parul University",
    role: "Management Team Member",
    duration: "2024 - 2025",
    location: "Vadodara, Gujarat",
    description:
      "Collaborating with cross-functional student teams to plan and execute technical and cultural events at Parul University's Metaverse Club.",
    achievements: [
      "Collaborated with cross-functional student teams to plan and execute events",
      "Managed logistics, scheduling, and coordination for smooth event execution",
      "Gained hands-on experience in teamwork, problem-solving, and handling real-time challenges",
      "Contributed to both technical workshops and cultural initiatives"
    ],
    technologies: [
      "Team Management",
      "Event Planning",
      "Problem Solving",
      "Coordination"
    ],
    type: "part-time"
  }
];
