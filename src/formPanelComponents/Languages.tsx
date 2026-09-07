import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { LanguagesSection } from "./formComponents/LanguagesSection";
import type { LanguagesCategory } from "../types";

export function Languages({
  languages,
  updateSection,
}: {
  languages: LanguagesCategory[];
  updateSection: (key: "languages", value: LanguagesCategory[]) => void;
}) {
  return (
    <FormSection title={"Language skills"}>
      <AddButton
        label="Add new language"
        onAdd={() =>
          updateSection("languages", [
            ...languages,
            {
              id: crypto.randomUUID(),
              title: "",
              description: "",
            },
          ])
        }
      />
      <LanguagesSection
        languages={languages}
        onChange={(upd) => updateSection("languages", upd)}
      />
    </FormSection>
  );
}
