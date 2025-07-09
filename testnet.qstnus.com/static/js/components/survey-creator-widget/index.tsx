import { useParams } from "react-router-dom";

import { useEffect, useMemo } from "react";
import { Serializer, Action } from "survey-core";
import { DefaultDark, DefaultLight } from "survey-core/themes";

import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";

import { useTheme } from "context";
import { useAdditionalActions } from "./hooks/use-additional-actions";

import { validateSurveyData } from "utils";

import { useSurveyTemplates } from "hooks";

import { useAppDispatch } from "store/store";
import { setSurveyData } from "store/create-survey/survey";

import { SurveyData } from "store/create-survey/survey/types";

import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";

Serializer.addProperty("question", {
  name: "points:number",
  category: "data",
});

const creatorOptions = {
  showLogicTab: false,
  showSidebar: false,
  showEmbeddedSurveyTab: false,
  showJSONEditorTab: false,
  haveCommercialLicense: true,
  isAutoSave: true,
  questionTypes: ["radiogroup", "text", "boolean", "checkbox"],
};

const SurveyCreatorWidget: React.FC<{ data?: string }> = ({ data }) => {
  const { surveyId } = useParams();

  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  const { isFromTemplate, activeTemplate } = useSurveyTemplates();

  const creator = useMemo(() => {
    return new SurveyCreator(creatorOptions);
  }, []);

  const { handleBackNavigate, createSurveyData } = useAdditionalActions(creator);

  creator.theme = theme === "dark" ? DefaultDark : DefaultLight;

  const cancelAction = new Action({
    id: "cancelCustomSurveyButton",
    title: "Cancel",
    visible: true,
    action: () => {
      handleBackNavigate();
    },
  });

  const saveAction = new Action({
    id: "saveCustomSurveyButton",
    title: "Save",
    visible: true,
    action: () => {
      createSurveyData();
    },
  });

  creator.toolbarItems.push(cancelAction);
  creator.toolbarItems.push(saveAction);

  useEffect(() => {
    if (data && surveyId) {
      creator.text = data;
      dispatch(setSurveyData(JSON.parse(data)));
    } else if (isFromTemplate && activeTemplate) {
      const surveyData = {
        title: activeTemplate?.title || "",
        description: activeTemplate?.description || "",
        pages: activeTemplate?.pages,
        logo: activeTemplate?.logo,
      };
      creator.text = JSON.stringify(surveyData);
      dispatch(setSurveyData(surveyData));
    }
  }, [data, isFromTemplate, activeTemplate]);

  creator.saveSurveyFunc = (saveNo: number, callback: (no: number, success: boolean) => void) => {
    // const isValid = checkSurveyData(creator.text, !!isQuiz);
    // if (isValid) {
    const validSurveyData = JSON.parse(creator.text) as SurveyData;
    dispatch(setSurveyData(validateSurveyData(validSurveyData)));
    // } else {
    //   if (surveyData) {
    //     dispatch(setDiscoverSurveyPayload());
    //     dispatch(setSurveyData());
    //   }
    // }

    callback(saveNo, true);
  };

  return <SurveyCreatorComponent creator={creator} />;
};

export default SurveyCreatorWidget;
