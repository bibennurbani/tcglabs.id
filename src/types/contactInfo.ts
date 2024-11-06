// Define the data structure for each section of the resume.
export type ContactInfo = {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  location: string;
  linkedin?: string;
  github?: string;
};

export type TechnicalSkill = {
  category: string; // e.g., "Programming Languages"
  skills: string[]; // e.g., ["JavaScript", "Python"]
};

export type Experience = {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements?: string[];
};

export type Project = {
  name: string;
  link?: string; // URL to project repository or demo
  description: string;
  technologies: string[];
  contributions: string[];
};

export type Education = {
  degree: string;
  institution: string;
  dates: string;
  coursework?: string[];
  certifications?: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  dateIssued: string;
};

export type OpenSourceContribution = {
  projectName: string;
  link?: string; // URL to contribution or project
  description: string;
  contribution: string;
};

export type Publication = {
  title: string;
  link?: string; // URL to article or presentation
  description: string;
  eventOrPlatform: string; // e.g., conference name or blog
};

export type Language = {
  language: string;
  proficiency: string; // e.g., "Fluent", "Intermediate"
};

export type Interest = {
  interest: string; // e.g., "AI and Machine Learning", "Backend Development"
};

// Full profile data structure
export type ProfileData = {
  contactInfo: ContactInfo;
  summary?: string; // Optional summary/objective section
  technicalSkills: TechnicalSkill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications?: Certification[];
  openSourceContributions?: OpenSourceContribution[];
  publications?: Publication[];
  languages?: Language[];
  interests?: Interest[];
};

// Example of filling in the profile data based on the structure
export const profileData: ProfileData = {
  contactInfo: {
    name: "Biben Nurbani Hasan",
    phoneNumber: "123-456-7890",
    emailAddress: "biben@example.com",
    location: "Bandung, Indonesia",
    linkedin: "https://www.linkedin.com/in/biben",
    github: "https://github.com/biben",
  },
  summary:
    "Full-stack developer with expertise in JavaScript and experience in building scalable web applications.",
  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "NestJS"],
    },
    { category: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "Tools & Platforms", skills: ["Git", "Docker", "AWS"] },
    { category: "Methodologies", skills: ["Agile", "Scrum", "TDD"] },
  ],
  experience: [
    {
      jobTitle: "Senior Analyst",
      companyName: "Devstack Indonesia",
      startDate: "Mar 2018",
      endDate: "Current",
      responsibilities: [
        "Led a team of developers in creating and deploying scalable web applications.",
        "Designed and implemented a CI/CD pipeline to streamline deployments.",
      ],
      achievements: [
        "Improved API response time by 30%",
        "Reduced deployment errors by 15%",
      ],
    },
  ],
  projects: [
    {
      name: "POS System",
      link: "https://github.com/biben/pos-system",
      description: "A scalable point-of-sale system for SMEs",
      technologies: ["Next.js", "Supabase", "Zustand"],
      contributions: [
        "Architected backend APIs",
        "Implemented real-time order tracking",
      ],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science",
      institution: "University of Technology",
      dates: "2012 - 2016",
      coursework: ["Data Structures", "Database Systems", "Machine Learning"],
      certifications: ["AWS Certified Developer"],
    },
  ],
  certifications: [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      dateIssued: "2020-08",
    },
  ],
  openSourceContributions: [
    {
      projectName: "Next.js",
      link: "https://github.com/vercel/next.js",
      description: "Improved documentation and added examples.",
      contribution: "Documentation and example projects.",
    },
  ],
  publications: [
    {
      title: "Advanced State Management in React",
      link: "https://dev.to/biben/state-management-in-react",
      description: "An article exploring Zustand and Redux in Next.js apps.",
      eventOrPlatform: "Dev.to",
    },
  ],
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Indonesian", proficiency: "Native" },
  ],
  interests: [
    { interest: "Machine Learning and AI" },
    { interest: "Backend Architecture" },
  ],
};
