type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export type GeneralInfoCategory = {
  name: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
};
export type TechSkillsCategory = {
  id: string;
  title: string;
  skills: string;
};
export type ProjectsCategory = {
  id: string;
  title: string;
  link: string;
  description: string;
};
export type ExperienceCategory = {
  id: string;
  title: string;
  companyName: string;
  date: string;
  description: string;
};
export type EducationCategory = {
  id: string;
  title: string;
  description: string;
};
export type LanguagesCategory = {
  id: string;
  title: string;
  description: string;
};

export type GeneralInfoProps = {
  generalInfo: GeneralInfoCategory;
  setGeneralInfo: Setter<GeneralInfoCategory>;
};
export type TechSkillsProps = {
  technicalSkills: Array<TechSkillsCategory>;
  setTechnicalSkills: Setter<TechSkillsCategory[]>;
};
export type ProjectsProps = {
  projects: Array<ProjectsCategory>;
  setProjects: Setter<ProjectsCategory[]>;
};
export type ExperienceProps = {
  experience: Array<ExperienceCategory>;
  setExperience: Setter<ExperienceCategory[]>;
};
export type EducationProps = {
  education: Array<EducationCategory>;
  setEducation: Setter<EducationCategory[]>;
};
export type LangugagesProps = {
  languages: Array<LanguagesCategory>;
  setLanguages: Setter<LanguagesCategory[]>;
};

export type StateProps = GeneralInfoProps &
  TechSkillsProps &
  ProjectsProps &
  ExperienceProps &
  EducationProps &
  LangugagesProps;
