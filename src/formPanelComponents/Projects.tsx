import type { ProjectsCategory } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { ProjectSection } from "./formComponents/ProjectSection";
import { ActionButton } from "../ActionButton";

export function Projects({
  projects,
  updateSection,
}: {
  projects: ProjectsCategory[];
  updateSection: (key: "projects", value: ProjectsCategory[]) => void;
}) {
  return (
    <FormSection title={"Projects"}>
      <ActionButton
        label="Add new project"
        onAction={() =>
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
