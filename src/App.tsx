import { FormPanel } from "./FormPanel";
import { PrintedCV } from "./PrintedCV";
import type {
  GeneralInfoCategory,
  TechSkillsCategory,
  ProjectsCategory,
  ExperienceCategory,
  EducationCategory,
  LanguagesCategory,
  cvDataType,
} from "./types";
import { usePersistedState } from "./usePersistedState";

function App() {
  const [generalInfo, setGeneralInfo] = usePersistedState<GeneralInfoCategory>(
    "generalInfo",
    {
      name: "",
      email: "",
      phone: "",
      website: "",
      summary: "",
    },
  );
  const [technicalSkills, setTechnicalSkills] = usePersistedState<
    Array<TechSkillsCategory>
  >("technicalSkills", []);
  const [projects, setProjects] = usePersistedState<Array<ProjectsCategory>>(
    "projects",
    [],
  );
  const [experience, setExperience] = usePersistedState<
    Array<ExperienceCategory>
  >("experience", []);
  const [education, setEducation] = usePersistedState<Array<EducationCategory>>(
    "education",
    [],
  );
  const [languages, setLanguages] = usePersistedState<Array<LanguagesCategory>>(
    "languages",
    [],
  );
  const cvData: cvDataType = {
    generalInfo,
    technicalSkills,
    projects,
    experience,
    education,
    languages,
  };

  return (
    <main className="flex p-4.5 bg-dark-bg min-h-dvh">
      {/* <LoadExample />
      <ClearResume /> */}
      <FormPanel
        cvData={cvData}
        setGeneralInfo={setGeneralInfo}
        setTechnicalSkills={setTechnicalSkills}
        setProjects={setProjects}
        setExperience={setExperience}
        setEducation={setEducation}
        setLanguages={setLanguages}
      />
      <PrintedCV cvData={cvData} />
    </main>
  );
}

export default App;
