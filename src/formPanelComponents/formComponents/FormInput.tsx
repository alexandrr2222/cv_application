import { FormLabelWrapper } from "./FormLabelWrapper";
import type { ComponentProps } from "react";

type FormInputProps = Omit<ComponentProps<"input">, "type" | "id"> & {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "url";
};

export function FormInput({
  id,
  label,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <FormLabelWrapper id={id} label={label}>
      <input
        {...props}
        id={id}
        className={`w-full rounded border border-[#c9bda9] bg-[#fefdf8] px-2 py-1.5 text-sm text-text placeholder:text-[#a89c88] transition-colors hover:border-[#b0a288] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 ${className}`}
      />
    </FormLabelWrapper>
  );
}
