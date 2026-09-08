type PrintedCvSectionType<T> = {
  label: string;
  cvDataArray: Array<T>;
  renderItem: (item: T) => React.ReactNode;
};

export function PrintedCvSection<T>({
  label,
  cvDataArray,
  renderItem,
}: PrintedCvSectionType<T>) {
  if (cvDataArray.length > 0) {
    return (
      <section className="space-y-2">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          {label}
        </h2>
        {cvDataArray.map((item) => renderItem(item))}
      </section>
    );
  } else return null;
}
