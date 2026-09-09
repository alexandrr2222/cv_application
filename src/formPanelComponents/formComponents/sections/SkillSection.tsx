import { FormInput } from "../FormInput";
import type { TechSkillsCategory } from "../../../types";
import { ActionButton } from "../../../ActionButton";
import { buttonVariants } from "../../../dataObjects/buttonVariants";
import { SectionWrapper } from "../SectionWrapper";

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
        <SectionWrapper key={techSkill.id} element="li">
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
        </SectionWrapper>
      ))}
    </ul>
  );
}
