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
      className="flex flex-col gap-8 w-full xl:w-184 shrink-0 rounded-lg p-3 sm:p-5 print:hidden"
    >
      <GeneralInfo
        generalInfo={cvData.generalInfo}
        updateSection={updateSection}
      />

      <div className="columns-1 md:columns-2 gap-6">
        <TechnicalSkills
          technicalSkills={cvData.technicalSkills}
          updateSection={updateSection}
        />
        <Languages languages={cvData.languages} updateSection={updateSection} />
        <Projects projects={cvData.projects} updateSection={updateSection} />
        <Experience
          experience={cvData.experience}
          updateSection={updateSection}
        />
        <Education education={cvData.education} updateSection={updateSection} />
      </div>
    </form>
  );
}
