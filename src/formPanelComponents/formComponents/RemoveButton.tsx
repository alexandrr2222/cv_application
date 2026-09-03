type RemoveButtonProps = {
  label: string;
  onRemove: () => void;
};

export function RemoveButton({ label, onRemove }: RemoveButtonProps) {
  return (
    <button type="button" onClick={onRemove}>
      {label}
    </button>
  );
}
