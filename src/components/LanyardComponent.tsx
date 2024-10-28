// File: components/LanyardComponent.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Avatar, AvatarFallback } from "@/ui/avatar";

type ProfileData = {
  name: string;
  position: string;
  location: string;
  employer: {
    name: string;
    role: string;
    avatar: string;
    startDate: string;
    endDate: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  skills: Array<{
    name: string;
    proficiency: string;
  }>;
};

const defaultProfileData: ProfileData = {
  name: "John Doe",
  position: "Software Developer",
  location: "Unknown",
  employer: {
    name: "Company",
    role: "Position",
    avatar: "/window.svg",
    startDate: "Jan 2020",
    endDate: "Present",
  },
  skills: [],
  contact: {
    email: "bibennurbani@gmail.com",
    phone: "+62 857 2154 9005",
  },
};

export default function LanyardComponent({
  profileData = defaultProfileData,
}: {
  profileData?: ProfileData;
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBounce = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <Card className="w-96 max-w-lg bg-white shadow-xl overflow-hidden">
      <CardHeader>
        {/* Animation Lanyard */}
        <motion.div
          className="absolute top-0 left-1/2 w-1 h-40 bg-blue-500 origin-top"
          animate={isAnimating ? { rotateZ: [0, -5, 5, -3, 3, 0] } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-1/2 w-20 h-6 bg-blue-500 -ml-10 rounded-b-full cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBounce}
        >
          <span className="sr-only">Animate lanyard</span>
        </motion.div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          {/* Profile Header */}
          <div className="pt-12 pb-6 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <h2 className="text-2xl font-bold mb-2">{profileData.name}</h2>
            <p className="text-sm opacity-75">
              {profileData.position} • {profileData.location}
            </p>
          </div>
          {/* Contact Info */}
          <div className="p-4 text-gray-700">
            <p className="text-sm">📧 {profileData.contact.email}</p>
            <p className="text-sm">📞 {profileData.contact.phone}</p>
          </div>
          {/* Experience Section */}
          <div className="p-6">
            <h1 className="font-bold">Current Employment</h1>
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <Image
                  src={profileData.employer.avatar}
                  alt={profileData.employer.name}
                  height={50}
                  width={50}
                />
                <AvatarFallback>
                  {profileData.employer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{profileData.employer.name}</h3>
                <p className="text-sm text-gray-500">
                  {profileData.employer.role}
                </p>
                <p className="text-sm text-gray-500">
                  {profileData.employer.startDate} -{" "}
                  {profileData.employer.endDate}
                </p>
              </div>
            </div>
            {/* Skills Section */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Skills</h4>
              {profileData.skills.length > 0 ? (
                <ul className="text-sm space-y-1">
                  {profileData.skills.map((skill, index) => (
                    <li key={index}>
                      • {skill.name}: {skill.proficiency}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No skills provided</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
