import type { cvDataType } from "./types";

export const emptyCv: cvDataType = {
  generalInfo: {
    name: "",
    email: "",
    phone: "",
    website: "",
    summary: "",
  },
  technicalSkills: [],
  projects: [],
  experience: [],
  education: [],
  languages: [],
};
