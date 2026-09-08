type FormLabelWrapperProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};
export function FormLabelWrapper({
  id,
  label,
  children,
}: FormLabelWrapperProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-label text-xs font-medium" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}
