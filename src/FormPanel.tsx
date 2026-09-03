import { GeneralInfo } from "./formPanelComponents/GeneralInfo";
import { TechnicalSkills } from "./formPanelComponents/TechnicalSkills";
import type { stateProps } from "./types";

export function FormPanel({
  generalInfo,
  setGeneralInfo,
  technicalSkills,
  setTechnicalSkills,
}: stateProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-dark-accent">Simple CV Creator</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <TechnicalSkills
        technicalSkills={technicalSkills}
        setTechnicalSkills={setTechnicalSkills}
      />
      {/* <Experience />
      <Projects />
      <Education />
      <Languages /> */}
    </div>
  );
}
