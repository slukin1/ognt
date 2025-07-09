import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/store";
import { getAllDiscoveredSurveys } from "store/discover-survey/actions";
import { getAllDiscoveredBusinesses } from "store/discover-businesses/actions";

const useHandlePayload = () => {
  const surveyPayload = useAppSelector(state => state.discoverSurvey.surveyPayload);
  const businessesPayload = useAppSelector(state => state.discoverBusinesses.businessesPayload);

  const { pageOrder, pageOrderBy, pageSize, pageNumber } = surveyPayload;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllDiscoveredSurveys({ pageOrder: "asc", pageNumber: 1, pageOrderBy: "isFree", pageSize: 4 }));
    dispatch(
      getAllDiscoveredBusinesses({ ...businessesPayload, pageNumber: 1, pageSize: 4, pageOrderBy: "activeSurveys" }),
    );
  }, [pageOrder, pageOrderBy, pageSize, pageNumber]);
};

export default useHandlePayload;
