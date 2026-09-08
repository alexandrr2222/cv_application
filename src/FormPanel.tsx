import { GeneralInfo } from "./formPanelComponents/GeneralInfo";
import { TechnicalSkills } from "./formPanelComponents/TechnicalSkills";
import { Projects } from "./formPanelComponents/Projects";
import { Experience } from "./formPanelComponents/Experience";
import { Education } from "./formPanelComponents/Education";
import { Languages } from "./formPanelComponents/Languages";
import type { FormPanelProps } from "./types";

export function FormPanel({ cvData, updateSection }: FormPanelProps) {
  return (
    <form
      aria-label="CV editor"
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-8 w-96 shrink-0 bg-surface rounded-lg p-5 print:hidden"
    >
      <GeneralInfo
        generalInfo={cvData.generalInfo}
        updateSection={updateSection}
      />
      <TechnicalSkills
        technicalSkills={cvData.technicalSkills}
        updateSection={updateSection}
      />
      <Projects projects={cvData.projects} updateSection={updateSection} />
      <Experience
        experience={cvData.experience}
        updateSection={updateSection}
      />
      <Education education={cvData.education} updateSection={updateSection} />
      <Languages languages={cvData.languages} updateSection={updateSection} />
    </form>
  );
}
