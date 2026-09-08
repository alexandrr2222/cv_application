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
      className={`rounded transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 ${variant} ${className}`}
    >
      {label}
    </button>
  );
}
