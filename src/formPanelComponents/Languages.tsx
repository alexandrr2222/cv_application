import { FormSection } from "./formComponents/FormSection";
import { LanguagesSection } from "./formComponents/sections/LanguagesSection";
import type { LanguagesCategory } from "../types";
import { ActionButton } from "../ActionButton";
import { buttonVariants } from "../dataObjects/buttonVariants";

export function Languages({
  languages,
  updateSection,
}: {
  languages: LanguagesCategory[];
  updateSection: (key: "languages", value: LanguagesCategory[]) => void;
}) {
  return (
    <FormSection title={"Language skills"}>
      <ActionButton
        variant={buttonVariants.add}
        label="Add new language"
        onAction={() =>
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
