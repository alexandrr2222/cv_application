import { FormInput } from "./FormInput";
import type { LangugagesProps } from "../../types";
import { RemoveButton } from "./RemoveButton";

export function LanguagesSection({ languages, setLanguages }: LangugagesProps) {
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
              setLanguages((prev) =>
                prev.map((ar) => {
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
              setLanguages((prev) =>
                prev.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, description: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="Native speaker"
          />
          <RemoveButton
            label="Remove language"
            onRemove={() => {
              setLanguages((prev) => prev.filter((ar) => ar.id !== pr.id));
            }}
          />
        </div>
      ))}
    </>
  );
}
