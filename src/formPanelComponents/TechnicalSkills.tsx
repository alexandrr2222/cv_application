import type { TechSkillsCategory } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { SkillSection } from "./formComponents/SkillSection";

export function TechnicalSkills({
  technicalSkills,
  updateSection,
}: {
  technicalSkills: TechSkillsCategory[];
  updateSection: (key: "technicalSkills", value: TechSkillsCategory[]) => void;
}) {
  return (
    <FormSection title={"Technical Skills"}>
      <AddButton
        label="Add new skillset"
        onAdd={() =>
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
