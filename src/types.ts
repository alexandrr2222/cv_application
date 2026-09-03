type Setter<T> = React.Dispatch<React.SetStateAction<T>>;
export type TechSkillsCategory = {
  id: string;
  title: string;
  skills: string;
};
export type GeneralInfoCategory = {
  name: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
};

export type GeneralInfoProps = {
  generalInfo: GeneralInfoCategory;
  setGeneralInfo: Setter<GeneralInfoCategory>;
};
export type TechSkillsProps = {
  technicalSkills: Array<TechSkillsCategory>;
  setTechnicalSkills: Setter<TechSkillsCategory[]>;
};

export type stateProps = GeneralInfoProps & TechSkillsProps;
