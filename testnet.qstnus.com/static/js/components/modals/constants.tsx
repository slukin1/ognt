import { ModalNames } from "store/modal";
import { ActionModal, GenerateSurveyModal, AddRewardModal } from "./components";

export const components = {
  [ModalNames.actionModal]: () => <ActionModal />,
  [ModalNames.generateSurveyModal]: () => <GenerateSurveyModal />,
  [ModalNames.addRewardModal]: () => <AddRewardModal />,
};
