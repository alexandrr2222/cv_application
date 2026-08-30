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
    <div>
      <label className="text-dark-label" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}
