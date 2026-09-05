import { GeneralInfo } from "./formPanelComponents/GeneralInfo";
import { TechnicalSkills } from "./formPanelComponents/TechnicalSkills";
import { Projects } from "./formPanelComponents/Projects";
import { Experience } from "./formPanelComponents/Experience";
import { Education } from "./formPanelComponents/Education";
import { Languages } from "./formPanelComponents/Languages";
import type { StateProps } from "./types";

export function FormPanel({
  cvData,
  setGeneralInfo,
  setTechnicalSkills,
  setProjects,
  setExperience,
  setEducation,
  setLanguages,
}: StateProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-dark-accent">Simple CV Creator</h1>
      <GeneralInfo
        generalInfo={cvData.generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
      <TechnicalSkills
        technicalSkills={cvData.technicalSkills}
        setTechnicalSkills={setTechnicalSkills}
      />
      <Projects projects={cvData.projects} setProjects={setProjects} />
      <Experience
        experience={cvData.experience}
        setExperience={setExperience}
      />
      <Education education={cvData.education} setEducation={setEducation} />
      <Languages languages={cvData.languages} setLanguages={setLanguages} />
    </div>
  );
}
