import { SurveyDetailResponseItem, SurveyAnswers } from "./types";

export const handleSurveyAnswers = (response: SurveyDetailResponseItem) => {
  const answers = {} as SurveyAnswers;
  if (response && response.pages && response.isQuiz === true) {
    response.pages.forEach(page => {
      page.elements.forEach(element => {
        if (element.correctAnswer) {
          answers[element.name] = element.correctAnswer;
        }
      });
    });
  }

  return answers;
};
