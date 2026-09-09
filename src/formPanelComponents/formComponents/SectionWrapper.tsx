export function SectionWrapper({
  element,
  key,
  children,
}: {
  element: "li" | "div";
  key: string;
  children: React.ReactNode;
}) {
  const Tag = element === "li" ? "li" : "div";
  return (
    <Tag
      key={key}
      className="flex flex-col gap-2 rounded border border-[#d6d0c8] bg-[#f8f6f2] p-3"
    >
      {children}
    </Tag>
  );
}
