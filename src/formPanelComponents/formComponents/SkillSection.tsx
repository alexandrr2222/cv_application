import { FormInput } from "./FormInput";
import type { TechSkillsProps } from "../../types";

export function SkillSection({
  technicalSkills,
  setTechnicalSkills,
}: TechSkillsProps) {
  return (
    <>
      {technicalSkills.map((techSkill) => (
        <div key={techSkill.id}>
          <FormInput
            id={"title" + techSkill.id}
            label="Title"
            type="text"
            value={techSkill.title}
            onChange={(e) => {
              setTechnicalSkills((prev) =>
                prev.map((skill) => {
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
              setTechnicalSkills((prev) =>
                prev.map((skill) => {
                  if (skill.id === techSkill.id) {
                    return { ...skill, skills: e.target.value };
                  } else return skill;
                }),
              );
            }}
            placeholder="TypeSript, Python, C++,"
          />
          <button
            type="button"
            onClick={() => {
              setTechnicalSkills((prev) =>
                prev.filter((skill) => skill.id !== techSkill.id),
              );
            }}
          >
            remove line
          </button>
        </div>
      ))}
    </>
  );
}
