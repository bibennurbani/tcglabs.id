import React from "react";
import { type TechnicalSkill } from "@/types/contactInfo";

type TechnicalSkillsProps = {
  skills: TechnicalSkill[];
};

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => (
  <div className="p-4 border-b border-gray-200">
    <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
    <ul className="grid grid-cols-2 gap-4">
      {skills.map((skill, idx) => (
        <li key={idx}>
          <h3 className="font-medium">{skill.category}:</h3>
          <p>{skill.skills.join(", ")}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default TechnicalSkills;
