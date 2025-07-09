import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

import { useAppDispatch, useAppSelector } from "store/store";
import { AccountType } from "store/auth/types";
import { getSurveyTemplates } from "store/utils/actions";
import {
  setActiveTemplate as setActiveTemplateState,
  resetActiveTemplate as resetActiveTemplateState,
} from "store/utils";

import { SurveyTemplateItem } from "store/utils/types";

const FROM_TEMPLATE = "fromTemplate";

export const useSurveyTemplates = () => {
  const profileData = useAppSelector(state => state.profile.profileData);
  const surveyTemplates = useAppSelector(state => state.utils.surveyTemplates);
  const activeTemplate = useAppSelector(state => state.utils.activeTemplate);

  const [isFromTemplate, setIsFromTemplate] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fromTemplate = queryParams.get(FROM_TEMPLATE);
    if (fromTemplate && fromTemplate === "true") {
      setIsFromTemplate(true);
    } else {
      setIsFromTemplate(false);
    }
  }, [queryParams, location]);

  useSWR(
    `useSurveyTemplates/${profileData?.type}/${surveyTemplates}`,
    profileData &&
      profileData.type === AccountType.business &&
      (surveyTemplates === null || surveyTemplates.length === 0)
      ? async () => {
          return fetchTemplates();
        }
      : null,
    { revalidateOnFocus: false, refreshInterval: 0 },
  );

  const fetchTemplates = async () => {
    try {
      dispatch(getSurveyTemplates());
    } catch (err) {
      console.error("useSurveyTemplates hook error: ", err);
    }
  };

  const getFilteredTemplates = (isQuiz: boolean) => {
    const filteredTemplates: SurveyTemplateItem[] = [];
    if (surveyTemplates) {
      surveyTemplates.forEach(template => {
        if (template.isQuiz === isQuiz) {
          filteredTemplates.push(template);
        }
      });
    }
    return filteredTemplates;
  };

  const getTemplatesForSurvey = () => {
    return getFilteredTemplates(false);
  };

  const getTemplatesForQuiz = () => {
    return getFilteredTemplates(true);
  };

  const setActiveTemplate = (template: SurveyTemplateItem) => {
    dispatch(setActiveTemplateState(template));
  };

  const resetActiveTemplate = () => {
    dispatch(resetActiveTemplateState());
  };

  return {
    FROM_TEMPLATE,
    isFromTemplate,
    getTemplatesForSurvey,
    getTemplatesForQuiz,
    setActiveTemplate,
    resetActiveTemplate,
    activeTemplate,
  };
};
