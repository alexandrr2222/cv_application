type AddButtonProps = {
  label: string;
  onAdd: () => void;
};

export function AddButton({ label, onAdd }: AddButtonProps) {
  return (
    <button type="button" onClick={onAdd}>
      {label}
    </button>
  );
}
