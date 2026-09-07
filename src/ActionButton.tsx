export function ActionButton({
  label,
  onAction,
  className = "",
}: {
  label: string;
  onAction: () => void;
  className?: string;
}) {
  return (
    <button type="button" onClick={onAction} className={className}>
      {label}
    </button>
  );
}
