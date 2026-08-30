import { FormLabelWrapper } from "./FormLabelWrapper";
import type { ComponentProps } from "react";

type FormTextAreaProps = Omit<ComponentProps<"textarea">, "id"> & {
  id: string;
  label: string;
};
export function FormTextArea({ id, label, ...props }: FormTextAreaProps) {
  return (
    <FormLabelWrapper id={id} label={label}>
      <textarea className="border" id={id} {...props}></textarea>
    </FormLabelWrapper>
  );
}
