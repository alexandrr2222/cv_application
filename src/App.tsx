import { useState } from "react";
import { FormPanel } from "./FormPanel";
import { PrintedCV } from "./PrintedCV";
import type { GeneralInfoCategory, TechSkillsCategory } from "./types";

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
  return (
    <main className="flex p-4.5 bg-dark-bg min-h-dvh">
      <FormPanel
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        technicalSkills={technicalSkills}
        setTechnicalSkills={setTechnicalSkills}
      />
      <pre>{JSON.stringify(generalInfo)}</pre>
      <pre>{JSON.stringify(technicalSkills)}</pre>
      <PrintedCV />
    </main>
  );
}

export default App;
