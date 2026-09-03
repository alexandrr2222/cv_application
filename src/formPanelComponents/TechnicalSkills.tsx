import type { TechSkillsProps } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { SkillSection } from "./formComponents/SkillSection";

export function TechnicalSkills({
  technicalSkills,
  setTechnicalSkills,
}: TechSkillsProps) {
  return (
    <FormSection title={"Technical Skills"}>
      <AddButton
        label="Add new skillset"
        onAdd={() =>
          setTechnicalSkills((prev) => [
            ...prev,
            { id: crypto.randomUUID(), title: "", skills: "" },
          ])
        }
      />
      <SkillSection
        technicalSkills={technicalSkills}
        setTechnicalSkills={setTechnicalSkills}
      />
    </FormSection>
  );
}
