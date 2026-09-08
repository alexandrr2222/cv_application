import { FormInput } from "./FormInput";
import type { TechSkillsCategory } from "../../types";
import { ActionButton } from "../../ActionButton";
import { buttonVariants } from "../../dataObjects/buttonVariants";

export function SkillSection({
  technicalSkills,
  onChange,
}: {
  technicalSkills: TechSkillsCategory[];
  onChange: (upd: TechSkillsCategory[]) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {technicalSkills.map((techSkill) => (
        <li
          key={techSkill.id}
          className="flex flex-col gap-2 rounded border border-neutral-300 p-3"
        >
          <FormInput
            id={"title" + techSkill.id}
            label="Title"
            type="text"
            value={techSkill.title}
            onChange={(e) => {
              onChange(
                technicalSkills.map((skill) => {
                  if (skill.id === techSkill.id) {
                    return { ...skill, title: e.target.value };
                  } else return skill;
                }),
              );
            }}
            placeholder="Programming languages"
          />
          <FormInput
            id={"skills" + techSkill.id}
            label="Skills"
            type="text"
            value={techSkill.skills}
            onChange={(e) => {
              onChange(
                technicalSkills.map((skill) => {
                  if (skill.id === techSkill.id) {
                    return { ...skill, skills: e.target.value };
                  } else return skill;
                }),
              );
            }}
            placeholder="TypeScript, Python, C++"
          />
          <ActionButton
            label="Remove skillset"
            variant={buttonVariants.remove}
            onAction={() => {
              onChange(
                technicalSkills.filter((skill) => skill.id !== techSkill.id),
              );
            }}
          />
        </li>
      ))}
    </ul>
  );
}
