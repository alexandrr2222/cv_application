import { GeneralInfo } from "./formPanelComponents/GeneralInfo";
import { TechnicalSkills } from "./formPanelComponents/TechnicalSkills";
import { Projects } from "./formPanelComponents/Projects";
import { Experience } from "./formPanelComponents/Experience";
import { Education } from "./formPanelComponents/Education";
import { Languages } from "./formPanelComponents/Languages";
import type { stateProps } from "./types";

export function FormPanel({
  generalInfo,
  setGeneralInfo,
  technicalSkills,
  setTechnicalSkills,
  projects,
  setProjects,
  experience,
  setExperience,
  education,
  setEducation,
  languages,
  setLanguages,
}: stateProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-dark-accent">Simple CV Creator</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <TechnicalSkills
        technicalSkills={technicalSkills}
        setTechnicalSkills={setTechnicalSkills}
      />
      <Projects projects={projects} setProjects={setProjects} />
      <Experience experience={experience} setExperience={setExperience} />
      <Education education={education} setEducation={setEducation} />
      <Languages languages={languages} setLanguages={setLanguages} />
    </div>
  );
}
