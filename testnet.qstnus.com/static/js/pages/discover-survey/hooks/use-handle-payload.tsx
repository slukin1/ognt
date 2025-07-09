import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/store";
import { resetDiscoverSurveys, setDiscoverSurveyPayload, resetDiscoverSurveyState } from "store/discover-survey";
import { getAllDiscoveredSurveys } from "store/discover-survey/actions";
import { getSurveyTags } from "store/create-survey/survey-tags/actions";

const useHandlePayload = () => {
  const surveyPayload = useAppSelector(state => state.discoverSurvey.surveyPayload);

  const { statuses, search, pageOrder, pageOrderBy, pageSize, isPremium, tagsIds, pageNumber, chainId, currencyCode } =
    surveyPayload;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSurveyTags());
    return () => {
      dispatch(setDiscoverSurveyPayload({ pageNumber: 1, pageSize: 12 }));
      dispatch(resetDiscoverSurveyState());
    };
  }, []);

  useEffect(() => {
    const requestPayload =
      typeof isPremium !== "undefined"
        ? { statuses, search, pageOrder, pageNumber, pageOrderBy, tagsIds, pageSize, isPremium, chainId, currencyCode }
        : { statuses, search, pageOrder, pageOrderBy, pageNumber, tagsIds, pageSize, chainId, currencyCode };
    dispatch(getAllDiscoveredSurveys(requestPayload));
  }, [statuses, search, isPremium, pageOrder, pageOrderBy, tagsIds, pageSize, pageNumber, chainId, currencyCode]);

  const updateSurveyPayload = (key: string, value: string) => {
    dispatch(resetDiscoverSurveys());
    dispatch(setDiscoverSurveyPayload({ [key]: value, pageNumber: 1 }));
  };

  const showNextPage = () => {
    dispatch(setDiscoverSurveyPayload({ pageNumber: pageNumber + 1 }));
  };

  const updateNumSlider = (pageSize: number) => {
    dispatch(setDiscoverSurveyPayload({ pageSize, pageNumber: 1 }));
  };

  return { updateSurveyPayload, updateNumSlider, showNextPage };
};

export default useHandlePayload;
