import { useNavigate, useParams, useLocation } from "react-router-dom";
import { SurveyCreator } from "survey-creator-react";
import { createSurvey, updateSurvey } from "store/create-survey/survey/actions";
import { useAppDispatch, useAppSelector } from "store/store";
import { CreateSurveyResponse } from "store/create-survey/survey/types";
import { ROUTES } from "router/routes";
import { isErrorResult } from "services";
import { checkSurveyData, convertBase64ToFile } from "utils";
import { toast } from "react-hot-toast";

export const useAdditionalActions = (creator: SurveyCreator) => {
  const surveyDetail = useAppSelector(state => state.createSurvey.surveyDetail);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { surveyId } = useParams();
  const { pathname } = useLocation();

  const isQuiz = pathname.includes(ROUTES.createQuiz) || (surveyId && surveyDetail?.isQuiz);

  const handleBackNavigate = () => {
    navigate(-1);
  };

  const createSurveyData = () => {
    const surveyData = JSON.parse(creator.text);

    if (surveyData) {
      const text = JSON.stringify(surveyData);
      const isValid = checkSurveyData(text, !!isQuiz);
      if (isValid) {
        const isBase64Logo = surveyData.logo?.includes("base64");
        const formData = new FormData();
        if (isBase64Logo) {
          const file = convertBase64ToFile(surveyData.logo!, surveyData.title);

          formData.append("logo", file);
        }
        if (surveyId) {
          dispatch(updateSurvey({ data: { ...surveyData, isQuiz: !!isQuiz }, id: surveyId })).then(res => {
            if (!isErrorResult(res)) {
              if (isBase64Logo) {
                dispatch(updateSurvey({ data: formData, id: surveyId })).then(res => {
                  if (!isErrorResult(res)) {
                    navigate(`/${ROUTES.business}/${ROUTES.surveys}/${surveyId}/${ROUTES.surveySettings}`);
                  }
                });
              } else {
                navigate(`/${ROUTES.business}/${ROUTES.surveys}/${surveyId}/${ROUTES.surveySettings}`);
              }
            }
          });
        } else {
          dispatch(createSurvey({ ...surveyData, isQuiz: !!isQuiz })).then(res => {
            if (!isErrorResult(res)) {
              const { id } = res.payload as CreateSurveyResponse;
              if (isBase64Logo) {
                dispatch(updateSurvey({ data: formData, id })).then(res => {
                  if (!isErrorResult(res)) {
                    navigate(`/${ROUTES.business}/${ROUTES.surveys}/${id}/${ROUTES.surveySettings}`);
                  }
                });
              } else {
                navigate(`/${ROUTES.business}/${ROUTES.surveys}/${id}/${ROUTES.surveySettings}`);
              }
            }
          });
        }
      }
    } else {
      toast.error(`Please, fill ${isQuiz ? "quiz" : "survey"} data`);
    }
  };

  return {
    handleBackNavigate,
    createSurveyData,
  };
};
