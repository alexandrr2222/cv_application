import type { ExperienceProps } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { ExperienceSection } from "./formComponents/ExperienceSection";

export function Experience({ experience, setExperience }: ExperienceProps) {
  return (
    <FormSection title={"Work Experience"}>
      <AddButton
        label="Add new work experience"
        onAdd={() =>
          setExperience((prev) => [
            ...prev,
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
        setExperience={setExperience}
      />
    </FormSection>
  );
}
