import { FormLabelWrapper } from "./FormLabelWrapper";
import type { ComponentProps } from "react";

type FormInputProps = Omit<ComponentProps<"input">, "type" | "id"> & {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "url";
};

export function FormInput({ id, label, ...props }: FormInputProps) {
  return (
    <FormLabelWrapper id={id} label={label}>
      <input className="border" {...props} id={id} />
    </FormLabelWrapper>
  );
}
