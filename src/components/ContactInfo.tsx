import React from "react";
import { type ContactInfo } from "@/types/contactInfo";

type ContactInfoProps = {
  data: ContactInfo;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ data }) => (
  <div className="text-center p-4 border-b border-gray-200">
    <h1 className="text-2xl font-bold">{data.name}</h1>
    <p>{data.location}</p>
    <p>
      Email:{" "}
      <a href={`mailto:${data.emailAddress}`} className="text-blue-500">
        {data.emailAddress}
      </a>
    </p>
    <p>Phone: {data.phoneNumber}</p>
    <div className="mt-2 space-x-4">
      {data.linkedin && (
        <a href={data.linkedin} className="text-blue-500">
          LinkedIn
        </a>
      )}
      {data.github && (
        <a href={data.github} className="text-blue-500">
          GitHub
        </a>
      )}
    </div>
  </div>
);

export default ContactInfo;
