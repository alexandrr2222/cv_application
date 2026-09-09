export function ActionButton({
  label,
  onAction,
  className = "",
  variant,
}: {
  label: string;
  onAction: () => void;
  className?: string;
  variant: string;
}) {
  return (
    <button
      type="button"
      onClick={onAction}
      className={`rounded cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${variant} ${className}`}
    >
      {label}
    </button>
  );
}
