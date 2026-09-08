import { FormInput } from "./FormInput";
import type { EducationCategory } from "../../types";
import { ActionButton } from "../../ActionButton";
import { FormTextArea } from "./FormTextArea";
import { buttonVariants } from "../../dataObjects/buttonVariants";

export function EducationSection({
  education,
  onChange,
}: {
  education: EducationCategory[];
  onChange: (upd: EducationCategory[]) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {education.map((pr) => (
        <li
          key={pr.id}
          className="flex flex-col gap-2 rounded border border-neutral-300 p-3"
        >
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
          <FormTextArea
            id={"description" + pr.id}
            label="Additional information"
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
          <ActionButton
            variant={buttonVariants.remove}
            label="Remove education"
            onAction={() => {
              onChange(education.filter((ar) => ar.id !== pr.id));
            }}
          />
        </li>
      ))}
    </ul>
  );
}
