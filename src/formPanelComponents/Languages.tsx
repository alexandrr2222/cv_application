import type { LangugagesProps } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { LanguagesSection } from "./formComponents/LanguagesSection";

export function Languages({ languages, setLanguages }: LangugagesProps) {
  return (
    <FormSection title={"Language skills"}>
      <AddButton
        label="Add new language"
        onAdd={() =>
          setLanguages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              title: "",
              description: "",
            },
          ])
        }
      />
      <LanguagesSection languages={languages} setLanguages={setLanguages} />
    </FormSection>
  );
}
