import { FormSection } from "./formComponents/FormSection";
import { EducationSection } from "./formComponents/EducationSection";
import type { EducationCategory } from "../types";
import { ActionButton } from "../ActionButton";

export function Education({
  education,
  updateSection,
}: {
  education: EducationCategory[];
  updateSection: (key: "education", value: EducationCategory[]) => void;
}) {
  return (
    <FormSection title={"Education"}>
      <ActionButton
        label="Add new education"
        onAction={() =>
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
