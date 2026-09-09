import { FormInput } from "../FormInput";
import type { LanguagesCategory } from "../../../types";
import { ActionButton } from "../../../ActionButton";
import { buttonVariants } from "../../../dataObjects/buttonVariants";
import { SectionWrapper } from "../SectionWrapper";

export function LanguagesSection({
  languages,
  onChange,
}: {
  languages: LanguagesCategory[];
  onChange: (upd: LanguagesCategory[]) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {languages.map((pr) => (
        <SectionWrapper key={pr.id} element="li">
          <FormInput
            id={"title" + pr.id}
            label="Title"
            type="text"
            value={pr.title}
            onChange={(e) => {
              onChange(
                languages.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, title: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="Czech"
          />
          <FormInput
            id={"description" + pr.id}
            label="Description"
            type="text"
            value={pr.description}
            onChange={(e) => {
              onChange(
                languages.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, description: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="Native speaker"
          />
          <ActionButton
            variant={buttonVariants.remove}
            label="Remove language"
            onAction={() => {
              onChange(languages.filter((ar) => ar.id !== pr.id));
            }}
          />
        </SectionWrapper>
      ))}
    </ul>
  );
}
