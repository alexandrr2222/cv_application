import type { TechSkillsProps } from "../../types";

export function AddSkill({
  setTechnicalSkills,
}: Pick<TechSkillsProps, "setTechnicalSkills">) {
  return (
    <button
      type="button"
      onClick={() =>
        setTechnicalSkills((prev) => [
          ...prev,
          { id: crypto.randomUUID(), title: "", skills: "" },
        ])
      }
    >
      Add new skill
    </button>
  );
}
