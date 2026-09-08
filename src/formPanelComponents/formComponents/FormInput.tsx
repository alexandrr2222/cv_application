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
        className={`w-full rounded border border-neutral-300 bg-white px-2 py-1.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 ${className}`}
      />
    </FormLabelWrapper>
  );
}
