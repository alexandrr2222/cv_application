import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import type { ExperienceProps } from "../../types";
import { RemoveButton } from "./RemoveButton";

export function ExperienceSection({
  experience,
  setExperience,
}: ExperienceProps) {
  return (
    <>
      {experience.map((pr) => (
        <div key={pr.id}>
          <FormInput
            id={"title" + pr.id}
            label="Title"
            type="text"
            value={pr.title}
            onChange={(e) => {
              setExperience((prev) =>
                prev.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, title: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="Accounting"
          />
          <FormInput
            id={"companyName" + pr.id}
            label="Company Name"
            type="text"
            value={pr.companyName}
            onChange={(e) => {
              setExperience((prev) =>
                prev.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, companyName: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="TaxHold Company"
          />
          <FormInput
            id={"date" + pr.id}
            label="Date (From - To)"
            type="text"
            value={pr.date}
            onChange={(e) => {
              setExperience((prev) =>
                prev.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, date: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="2025 - 2026"
          />
          <FormTextArea
            id={"description" + pr.id}
            label="Description"
            value={pr.description}
            onChange={(e) => {
              setExperience((prev) =>
                prev.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, description: e.target.value };
                  } else return ar;
                }),
              );
            }}
            autoComplete="off"
          />
          <RemoveButton
            label="Remove work experience"
            onRemove={() => {
              setExperience((prev) => prev.filter((ar) => ar.id !== pr.id));
            }}
          />
        </div>
      ))}
    </>
  );
}
