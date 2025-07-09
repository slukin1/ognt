import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/store";
import { resetCreateNftState } from "store/create-nft";

import { ROUTES } from "router/routes";

const useHandleSurveyData = () => {
  const pending = useAppSelector(state => state.createSurvey.pending);
  const surveyDetail = useAppSelector(state => state.createSurvey.surveyDetail);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { surveyId } = useParams();

  useEffect(() => {
    return () => {
      dispatch(resetCreateNftState());
    };
  }, []);

  useEffect(() => {
    if (!surveyDetail && !pending) {
      navigate(`/${ROUTES.business}/${ROUTES.surveys}/${surveyId}/${ROUTES.surveySettings}`);
    }
  }, [surveyDetail, pending]);
};

export default useHandleSurveyData;
