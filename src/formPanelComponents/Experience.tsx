import type { ExperienceCategory } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { ExperienceSection } from "./formComponents/ExperienceSection";
import { ActionButton } from "../ActionButton";
import { buttonVariants } from "../dataObjects/buttonVariants";

export function Experience({
  experience,
  updateSection,
}: {
  experience: ExperienceCategory[];
  updateSection: (key: "experience", value: ExperienceCategory[]) => void;
}) {
  return (
    <FormSection title={"Work Experience"}>
      <ActionButton
        variant={buttonVariants.add}
        label="Add new work experience"
        onAction={() =>
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
