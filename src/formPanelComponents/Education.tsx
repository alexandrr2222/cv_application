import type { EducationProps } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { EducationSection } from "./formComponents/EducationSection";

export function Education({ education, setEducation }: EducationProps) {
  return (
    <FormSection title={"Education"}>
      <AddButton
        label="Add new education"
        onAdd={() =>
          setEducation((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              title: "",
              description: "",
            },
          ])
        }
      />
      <EducationSection education={education} setEducation={setEducation} />
    </FormSection>
  );
}
