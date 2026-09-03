import { useState } from "react";
import { FormPanel } from "./FormPanel";
import { PrintedCV } from "./PrintedCV";
import type {
  GeneralInfoCategory,
  TechSkillsCategory,
  ProjectsCategory,
  ExperienceCategory,
  EducationCategory,
  LanguagesCategory,
} from "./types";

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoCategory>({
    name: "",
    email: "",
    phone: "",
    website: "",
    summary: "",
  });
  const [technicalSkills, setTechnicalSkills] = useState<
    Array<TechSkillsCategory>
  >([]);
  const [projects, setProjects] = useState<Array<ProjectsCategory>>([]);
  const [experience, setExperience] = useState<Array<ExperienceCategory>>([]);
  const [education, setEducation] = useState<Array<EducationCategory>>([]);
  const [languages, setLanguages] = useState<Array<LanguagesCategory>>([]);
  return (
    <main className="flex p-4.5 bg-dark-bg min-h-dvh">
      <FormPanel
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        technicalSkills={technicalSkills}
        setTechnicalSkills={setTechnicalSkills}
        projects={projects}
        setProjects={setProjects}
        experience={experience}
        setExperience={setExperience}
        education={education}
        setEducation={setEducation}
        languages={languages}
        setLanguages={setLanguages}
      />
      <PrintedCV
        generalInfo={generalInfo}
        technicalSkills={technicalSkills}
        projects={projects}
        experience={experience}
        education={education}
        languages={languages}
      />
    </main>
  );
}

export default App;
