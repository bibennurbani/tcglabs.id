import ContactInfo from "@/components/ContactInfo";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechnicalSkills from "@/components/TechnicalSkill";
import { profileData } from "@/types/contactInfo";

const ResumePage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 shadow-lg rounded-lg">
      <ContactInfo data={profileData.contactInfo} />
      {profileData.summary && (
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p>{profileData.summary}</p>
        </div>
      )}
      <TechnicalSkills skills={profileData.technicalSkills} />
      <Experience experience={profileData.experience} />
      <Projects projects={profileData.projects} />
    </div>
  );
};

export default ResumePage;
