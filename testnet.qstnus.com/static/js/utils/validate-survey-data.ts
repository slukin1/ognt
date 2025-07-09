import { SurveyData } from "store/create-survey/survey/types";

export const validateSurveyData = (validSurveyData: SurveyData) => {
  return {
    ...validSurveyData,
    pages: validSurveyData?.pages?.map(page => ({
      ...page,
      title: page.title ? page.title : page.name,
      elements: page.elements.map(element => ({
        ...element,
        choices: element?.choices?.map(choice =>
          typeof choice === "string" ? { text: choice, value: choice } : choice,
        ),
      })),
    })),
  };
};
