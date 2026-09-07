import { FormSection } from "./formComponents/FormSection";
import { FormInput } from "./formComponents/FormInput";
import { FormTextArea } from "./formComponents/FormTextArea";
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
      <FormInput
        id={"fullNameInput"}
        label={"Full Name"}
        type={"text"}
        value={generalInfo.name}
        onChange={handleChange("name")}
        autoComplete="name"
        placeholder="Adam Smith"
      />
      <FormInput
        id={"emailInput"}
        label={"Email"}
        type={"email"}
        value={generalInfo.email}
        onChange={handleChange("email")}
        autoComplete="email"
        placeholder="adam.smith@gmail.com"
      />
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
      <FormInput
        id={"websiteInput"}
        label={"Website"}
        type={"url"}
        value={generalInfo.website}
        onChange={handleChange("website")}
        autoComplete="url"
        placeholder="linkedin.com/in/adamsmith"
      />
      <FormTextArea
        id={"summaryInput"}
        label={"Summary"}
        value={generalInfo.summary}
        onChange={handleChange("summary")}
        autoComplete="off"
      />
    </FormSection>
  );
}
