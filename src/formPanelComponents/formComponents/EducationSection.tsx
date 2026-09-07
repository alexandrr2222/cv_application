import { FormInput } from "./FormInput";
import type { EducationCategory } from "../../types";
import { RemoveButton } from "./RemoveButton";

export function EducationSection({
  education,
  onChange,
}: {
  education: EducationCategory[];
  onChange: (upd: EducationCategory[]) => void;
}) {
  return (
    <>
      {education.map((pr) => (
        <div key={pr.id}>
          <FormInput
            id={"title" + pr.id}
            label="Title"
            type="text"
            value={pr.title}
            onChange={(e) => {
              onChange(
                education.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, title: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="Czech University of Life Sciences"
          />
          <FormInput
            id={"description" + pr.id}
            label="Additional information"
            type="text"
            value={pr.description}
            onChange={(e) => {
              onChange(
                education.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, description: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="Economics and management, 2022 - 2025"
          />
          <RemoveButton
            label="Remove education"
            onRemove={() => {
              onChange(education.filter((ar) => ar.id !== pr.id));
            }}
          />
        </div>
      ))}
    </>
  );
}
