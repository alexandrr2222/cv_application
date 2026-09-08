type FormSectionProps = {
  title: string;
  children: React.ReactNode;
};
export function FormSection({ title, children }: FormSectionProps) {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}
