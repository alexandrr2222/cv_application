export function SectionHeader({ label }: { label: string }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-500 print:text-neutral-500 [print-color-adjust:exact] [-webkit-print-color-adjust:exact]">
      {label}
    </h2>
  );
}
