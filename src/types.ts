export type GeneralInfoData = {
  name: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
};
export type GeneralInfoProps = {
  generalInfo: GeneralInfoData;
  setGeneralInfo: React.Dispatch<React.SetStateAction<GeneralInfoData>>;
};
