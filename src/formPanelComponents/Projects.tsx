import type { ProjectsCategory } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { ProjectSection } from "./formComponents/ProjectSection";

export function Projects({
  projects,
  updateSection,
}: {
  projects: ProjectsCategory[];
  updateSection: (key: "projects", value: ProjectsCategory[]) => void;
}) {
  return (
    <FormSection title={"Projects"}>
      <AddButton
        label="Add new project"
        onAdd={() =>
          updateSection("projects", [
            ...projects,
            {
              id: crypto.randomUUID(),
              title: "",
              link: "",
              description: "",
            },
          ])
        }
      />
      <ProjectSection
        projects={projects}
        onChange={(upd) => updateSection("projects", upd)}
      />
    </FormSection>
  );
}
