import type { TechSkillsCategory } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { SkillSection } from "./formComponents/SkillSection";
import { ActionButton } from "../ActionButton";

export function TechnicalSkills({
  technicalSkills,
  updateSection,
}: {
  technicalSkills: TechSkillsCategory[];
  updateSection: (key: "technicalSkills", value: TechSkillsCategory[]) => void;
}) {
  return (
    <FormSection title={"Technical Skills"}>
      <ActionButton
        label="Add new skillset"
        onAction={() =>
          updateSection("technicalSkills", [
            ...technicalSkills,
            { id: crypto.randomUUID(), title: "", skills: "" },
          ])
        }
      />
      <SkillSection
        technicalSkills={technicalSkills}
        onChange={(upd) => updateSection("technicalSkills", upd)}
      />
    </FormSection>
  );
}
