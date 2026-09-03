import type { TechSkillsProps } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddSkill } from "./formComponents/AddSkill";
import { SkillSection } from "./formComponents/SkillSection";

export function TechnicalSkills({
  technicalSkills,
  setTechnicalSkills,
}: TechSkillsProps) {
  return (
    <FormSection title={"Technical Skills"}>
      <AddSkill setTechnicalSkills={setTechnicalSkills} />
      <SkillSection
        technicalSkills={technicalSkills}
        setTechnicalSkills={setTechnicalSkills}
      />
    </FormSection>
  );
}
