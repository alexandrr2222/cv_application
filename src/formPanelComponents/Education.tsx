import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { EducationSection } from "./formComponents/EducationSection";
import type { EducationCategory } from "../types";

export function Education({
  education,
  updateSection,
}: {
  education: EducationCategory[];
  updateSection: (key: "education", value: EducationCategory[]) => void;
}) {
  return (
    <FormSection title={"Education"}>
      <AddButton
        label="Add new education"
        onAdd={() =>
          updateSection("education", [
            ...education,
            {
              id: crypto.randomUUID(),
              title: "",
              description: "",
            },
          ])
        }
      />
      <EducationSection
        education={education}
        onChange={(upd) => updateSection("education", upd)}
      />
    </FormSection>
  );
}
