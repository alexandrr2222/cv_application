import { FormLabelWrapper } from "./FormLabelWrapper";
import type { ComponentProps } from "react";

type FormTextAreaProps = Omit<ComponentProps<"textarea">, "id"> & {
  id: string;
  label: string;
};
export function FormTextArea({
  id,
  label,
  className = "",
  ...props
}: FormTextAreaProps) {
  return (
    <FormLabelWrapper id={id} label={label}>
      <textarea
        id={id}
        rows={4}
        {...props}
        className={`w-full rounded border border-neutral-300 bg-white px-2 py-1.5 text-sm leading-relaxed placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 ${className}`}
      />
    </FormLabelWrapper>
  );
}
