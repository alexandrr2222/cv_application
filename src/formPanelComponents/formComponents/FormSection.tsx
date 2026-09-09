type FormSectionProps = {
  title: string;
  children: React.ReactNode;
};
export function FormSection({ title, children }: FormSectionProps) {
  return (
    <fieldset className="flex flex-col gap-3 break-inside-avoid mb-7 w-full">
      <legend className="font-bold text-base mb-2">{title}</legend>
      {children}
    </fieldset>
  );
}
