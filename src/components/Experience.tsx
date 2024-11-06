import React from "react";
import { type Experience } from "@/types/contactInfo";

type ExperienceProps = {
  experience: Experience[];
};

const Experience: React.FC<ExperienceProps> = ({ experience }) => (
  <div className="p-4 border-b border-gray-200">
    <h2 className="text-xl font-semibold mb-4">Experience</h2>
    {experience.map((exp, idx) => (
      <div key={idx} className="mb-6">
        <h3 className="font-medium text-lg">
          {exp.jobTitle} - {exp.companyName}
        </h3>
        <p className="text-sm text-gray-500">
          {exp.startDate} - {exp.endDate}
        </p>
        <ul className="list-disc list-inside ml-4">
          {exp.responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
        {exp.achievements && (
          <div className="mt-2 text-sm text-green-600">
            <h4 className="font-semibold">Achievements:</h4>
            <ul className="list-disc list-inside ml-4">
              {exp.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default Experience;
