// File: app/page.tsx
import { Metadata } from "next";
import TicketComponent from "@/components/LanyardComponent";

export const metadata: Metadata = {
  title: "Biben Nurbani Hasan's Resume",
  description:
    "Interactive resume for Biben Nurbani Hasan, Fullstack Developer",
};

async function getProfileData() {
  return {
    name: "Biben Nurbani Hasan",
    position: "Fullstack Developer",
    location: "Bandung, Indonesia",
    employer: {
      name: "Devstack Indonesia",
      role: "Senior Analyst",
      avatar: "/globe.svg",
      startDate: "Mar 2018",
      endDate: "Present",
    },
    skills: [
      { name: "JavaScript", proficiency: "Advanced" },
      { name: "React.js", proficiency: "Advanced" },
      { name: "Node.js", proficiency: "Advanced" },
      { name: "Next.js", proficiency: "Advanced" },
      { name: "TypeScript", proficiency: "Intermediate" },
      { name: "NestJS", proficiency: "Intermediate" },
      { name: "AWS Lambda", proficiency: "Intermediate" },
      { name: "Docker", proficiency: "Intermediate" },
    ],
    contact: {
      email: "bibennurbani@gmail.com",
      phone: "+62 857 2154 9005",
    },
  };
}

export default async function Page() {
  const profileData = await getProfileData();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-600">
      <TicketComponent profileData={profileData} />
    </main>
  );
}
