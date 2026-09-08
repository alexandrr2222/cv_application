type FormSectionProps = {
  title: string;
  children: React.ReactNode;
};
export function FormSection({ title, children }: FormSectionProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-medium text-base mb-2">{title}</legend>
      {children}
    </fieldset>
  );
}
