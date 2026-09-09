import { FormSection } from "./formComponents/FormSection";
import { EducationSection } from "./formComponents/sections/EducationSection";
import type { EducationCategory } from "../types";
import { ActionButton } from "../ActionButton";
import { buttonVariants } from "../dataObjects/buttonVariants";

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
        variant={buttonVariants.add}
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
