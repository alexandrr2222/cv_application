import { FormSection } from "./formComponents/FormSection";
import { FormInput } from "./formComponents/FormInput";
import { FormTextArea } from "./formComponents/FormTextArea";
import { SectionWrapper } from "./formComponents/SectionWrapper";
import type { GeneralInfoCategory } from "../types";
import type { ChangeEvent } from "react";

export function GeneralInfo({
  generalInfo,
  updateSection,
}: {
  generalInfo: GeneralInfoCategory;
  updateSection: (key: "generalInfo", value: GeneralInfoCategory) => void;
}) {
  function handleChange(key: keyof GeneralInfoCategory) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      updateSection("generalInfo", { ...generalInfo, [key]: e.target.value });
  }
  return (
    <FormSection title={"General Info"}>
      <SectionWrapper element="div" key="generalInfo">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li>
            <FormInput
              id={"fullNameInput"}
              label={"Full Name"}
              type={"text"}
              value={generalInfo.name}
              onChange={handleChange("name")}
              autoComplete="name"
              placeholder="Adam Smith"
            />
          </li>
          <li>
            <FormInput
              id={"emailInput"}
              label={"Email"}
              type={"email"}
              value={generalInfo.email}
              onChange={handleChange("email")}
              autoComplete="email"
              placeholder="adam.smith@gmail.com"
            />
          </li>
          <li>
            <FormInput
              id={"phoneInput"}
              label={"Phone"}
              type={"tel"}
              value={generalInfo.phone}
              onChange={handleChange("phone")}
              autoComplete="tel"
              inputMode="tel"
              placeholder="+420 123 456 789"
            />
          </li>
          <li>
            <FormInput
              id={"websiteInput"}
              label={"Website"}
              type={"url"}
              value={generalInfo.website}
              onChange={handleChange("website")}
              autoComplete="url"
              placeholder="linkedin.com/in/adamsmith"
            />
          </li>
        </ul>

        <FormTextArea
          id={"summaryInput"}
          label={"Summary"}
          value={generalInfo.summary}
          onChange={handleChange("summary")}
          autoComplete="off"
        />
      </SectionWrapper>
    </FormSection>
  );
}
