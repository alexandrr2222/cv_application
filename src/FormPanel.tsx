import { GeneralInfo } from "./formPanelComponents/GeneralInfo";
import type { GeneralInfoProps } from "./types";

export function FormPanel({ generalInfo, setGeneralInfo }: GeneralInfoProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-dark-accent">Simple CV Creator</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      {/* <TechnicalSkills />
      <Experience />
      <Projects />
      <Education />
      <Languages /> */}
    </div>
  );
}
