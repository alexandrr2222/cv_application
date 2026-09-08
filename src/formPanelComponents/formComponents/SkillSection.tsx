import { FormInput } from "./FormInput";
import type { TechSkillsCategory } from "../../types";
import { ActionButton } from "../../ActionButton";

export function SkillSection({
  technicalSkills,
  onChange,
}: {
  technicalSkills: TechSkillsCategory[];
  onChange: (upd: TechSkillsCategory[]) => void;
}) {
  return (
    <ul>
      {technicalSkills.map((techSkill) => (
        <li key={techSkill.id}>
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
            placeholder="TypeSript, Python, C++,"
          />
          <ActionButton
            label="Remove skillset"
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
