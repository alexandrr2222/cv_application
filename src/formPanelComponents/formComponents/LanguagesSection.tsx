import { FormInput } from "./FormInput";
import type { LanguagesCategory } from "../../types";
import { ActionButton } from "../../ActionButton";

export function LanguagesSection({
  languages,
  onChange,
}: {
  languages: LanguagesCategory[];
  onChange: (upd: LanguagesCategory[]) => void;
}) {
  return (
    <>
      {languages.map((pr) => (
        <div key={pr.id}>
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
            label="description"
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
            label="Remove language"
            onAction={() => {
              onChange(languages.filter((ar) => ar.id !== pr.id));
            }}
          />
        </div>
      ))}
    </>
  );
}
