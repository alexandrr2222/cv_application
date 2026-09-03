import type { ProjectsProps } from "../types";
import { FormSection } from "./formComponents/FormSection";
import { AddButton } from "./formComponents/AddButton";
import { ProjectSection } from "./formComponents/ProjectSection";

export function Projects({ projects, setProjects }: ProjectsProps) {
  return (
    <FormSection title={"Projects"}>
      <AddButton
        label="Add new project"
        onAdd={() =>
          setProjects((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              title: "",
              link: "",
              description: "",
            },
          ])
        }
      />
      <ProjectSection projects={projects} setProjects={setProjects} />
    </FormSection>
  );
}
