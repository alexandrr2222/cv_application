export function ActionButton({
  label,
  onAction,
}: {
  label: string;
  onAction: () => void;
}) {
  return (
    <button type="button" onClick={onAction}>
      {label}
    </button>
  );
}
