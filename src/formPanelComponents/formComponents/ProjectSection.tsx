import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import type { ProjectsCategory } from "../../types";
import { ActionButton } from "../../ActionButton";
import { buttonVariants } from "../../dataObjects/buttonVariants";

export function ProjectSection({
  projects,
  onChange,
}: {
  projects: ProjectsCategory[];
  onChange: (upd: ProjectsCategory[]) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {projects.map((pr) => (
        <li
          key={pr.id}
          className="flex flex-col gap-2 rounded border border-neutral-300 p-3"
        >
          <FormInput
            id={"title" + pr.id}
            label="Title"
            type="text"
            value={pr.title}
            onChange={(e) => {
              onChange(
                projects.map((ar) => {
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
              onChange(
                projects.map((ar) => {
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
              onChange(
                projects.map((ar) => {
                  if (ar.id === pr.id) {
                    return { ...ar, description: e.target.value };
                  } else return ar;
                }),
              );
            }}
            autoComplete="off"
          />
          <ActionButton
            variant={buttonVariants.remove}
            label="Remove project"
            onAction={() => {
              onChange(projects.filter((ar) => ar.id !== pr.id));
            }}
          />
        </li>
      ))}
    </ul>
  );
}
