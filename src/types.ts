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
export type cvDataType = {
  generalInfo: GeneralInfoCategory;
  technicalSkills: Array<TechSkillsCategory>;
  projects: Array<ProjectsCategory>;
  experience: Array<ExperienceCategory>;
  education: Array<EducationCategory>;
  languages: Array<LanguagesCategory>;
};
export type FormPanelProps = {
  cvData: cvDataType;
  updateSection: <K extends keyof cvDataType>(
    key: K,
    value: cvDataType[K],
  ) => void;
};
