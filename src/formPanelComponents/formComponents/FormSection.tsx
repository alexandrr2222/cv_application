type FormSectionProps = {
  title: string;
  children: React.ReactNode;
};
export function FormSection({ title, children }: FormSectionProps) {
  return (
    <>
      <section>
        <h2>{title}</h2>
        <form
          className="p-2 border"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          {children}
        </form>
      </section>
    </>
  );
}
