import { toast } from "react-hot-toast";

import { SurveyData, SurveyPage, SurveyPageElement } from "store/create-survey/survey/types";

export const checkSurveyData = (data: string, isQuiz: boolean, checkAnswers: boolean = false) => {
  const surveyData = JSON.parse(data) as SurveyData;
  if (!("title" in surveyData)) {
    toast.error(`Add title to ${isQuiz ? "Quiz" : "Survey"}`);
  } else {
    if ("pages" in surveyData) {
      const pages = surveyData.pages as SurveyPage[];

      return pages.every(page => {
        if ("elements" in page) {
          const elements = page.elements as SurveyPageElement[];
          let pageName = "";
          if ("name" in page) {
            pageName = page.name as string;
          }

          if (isQuiz && checkAnswers) {
            elements.forEach(element => {
              let elementName = "";
              if ("name" in element) {
                elementName = element.name as string;
              }
              if (!("correctAnswer" in element)) {
                toast.error(`Add correct answer to ${pageName}`);
              } else if (!("title" in element)) {
                toast.error(`Add title to ${elementName} in ${pageName}`);
              }
            });
            return elements.every(element => "correctAnswer" in element && "title" in element);
          } else {
            elements.forEach(element => {
              let elementName = "";
              if ("name" in element) {
                elementName = element.name as string;
              }
              if (!("title" in element)) {
                toast.error(`Add title to ${elementName} in ${pageName}`);
              }
            });
            return elements.every(element => "title" in element);
          }
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  }
  return false;
};
