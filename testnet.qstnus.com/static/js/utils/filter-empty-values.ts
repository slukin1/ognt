import { SurveyPage } from "store/create-survey/survey/types";

export const filterEmptyValues = (data: {
  [key: string]: string | File | number | null | boolean | SurveyPage[] | undefined;
}) => {
  return Object.fromEntries(Object.entries(data).filter(([_, value]) => value && value !== "")) as {
    [key: string]: string;
  };
};
