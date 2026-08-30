import { FormSection } from "./formComponents/FormSection";
import { FormInput } from "./formComponents/FormInput";
import { FormTextArea } from "./formComponents/FormTextArea";
import type { GeneralInfoProps, GeneralInfoData } from "../types";
import type { ChangeEvent } from "react";

export function GeneralInfo({ generalInfo, setGeneralInfo }: GeneralInfoProps) {
  function handleChange(key: keyof GeneralInfoData) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setGeneralInfo((prev) => ({ ...prev, [key]: e.target.value }));
  }
  return (
    <FormSection title={"GeneralInfo"}>
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
