import type { ExperienceCategory } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { ExperienceSection } from "./formComponents/ExperienceSection";

export function Experience({
  experience,
  updateSection,
}: {
  experience: ExperienceCategory[];
  updateSection: (key: "experience", value: ExperienceCategory[]) => void;
}) {
  return (
    <FormSection title={"Work Experience"}>
      <AddButton
        label="Add new work experience"
        onAdd={() =>
          updateSection("experience", [
            ...experience,
            {
              id: crypto.randomUUID(),
              title: "",
              companyName: "",
              date: "",
              description: "",
            },
          ])
        }
      />
      <ExperienceSection
        experience={experience}
        onChange={(upd) => updateSection("experience", upd)}
      />
    </FormSection>
  );
}
