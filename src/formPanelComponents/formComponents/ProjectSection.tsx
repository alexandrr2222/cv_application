import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import type { ProjectsProps } from "../../types";
import { RemoveButton } from "./RemoveButton";

export function ProjectSection({ projects, setProjects }: ProjectsProps) {
  return (
    <>
      {projects.map((pr) => (
        <div key={pr.id}>
          <FormInput
            id={"title" + pr.id}
            label="Title"
            type="text"
            value={pr.title}
            onChange={(e) => {
              setProjects((prev) =>
                prev.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, title: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="To Do App"
          />
          <FormInput
            id={"link" + pr.id}
            label="Link"
            type="url"
            value={pr.link}
            onChange={(e) => {
              setProjects((prev) =>
                prev.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, link: e.target.value };
                  } else return ar;
                }),
              );
            }}
            placeholder="https://alexandrr2222.github.io/todoList/"
          />
          <FormTextArea
            id={"description" + pr.id}
            label="Description"
            value={pr.description}
            onChange={(e) => {
              setProjects((prev) =>
                prev.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, description: e.target.value };
                  } else return ar;
                }),
              );
            }}
            autoComplete="off"
          />
          <RemoveButton
            label="Remove project"
            onRemove={() => {
              setProjects((prev) => prev.filter((ar) => ar.id !== pr.id));
            }}
          />
        </div>
      ))}
    </>
  );
}
