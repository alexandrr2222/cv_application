import { FormInput } from "../FormInput";
import { FormTextArea } from "../FormTextArea";
import type { ExperienceCategory } from "../../../types";
import { ActionButton } from "../../../ActionButton";
import { buttonVariants } from "../../../dataObjects/buttonVariants";
import { SectionWrapper } from "../SectionWrapper";

export function ExperienceSection({
  experience,
  onChange,
}: {
  experience: ExperienceCategory[];
  onChange: (upd: ExperienceCategory[]) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {experience.map((pr) => (
        <SectionWrapper key={pr.id} element="li">
          <FormInput
            id={"title" + pr.id}
            label="Title"
            type="text"
            value={pr.title}
            onChange={(e) => {
              onChange(
                experience.map((ar) => {
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
              onChange(
                experience.map((ar) => {
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
              onChange(
                experience.map((ar) => {
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
              onChange(
                experience.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, description: e.target.value };
                  } else return ar;
                }),
              );
            }}
            autoComplete="off"
          />
          <ActionButton
            variant={buttonVariants.remove}
            label="Remove work experience"
            onAction={() => {
              onChange(experience.filter((ar) => ar.id !== pr.id));
            }}
          />
        </SectionWrapper>
      ))}
    </ul>
  );
}
