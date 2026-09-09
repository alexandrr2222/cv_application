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
        className={`w-full rounded border border-[#c9bda9] bg-[#fefdf8] px-2 py-1.5 text-sm leading-relaxed text-text placeholder:text-[#a89c88] transition-colors hover:border-[#b0a288] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 ${className}`}
      />
    </FormLabelWrapper>
  );
}
