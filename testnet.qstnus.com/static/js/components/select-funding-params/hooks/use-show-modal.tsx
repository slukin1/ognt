import { useNavigate, useParams } from "react-router-dom";

import { Icons } from "components";
import { IconButton } from "@sekmet/radix-ui-themes";

import { useAppDispatch } from "store/store";
import { hideModal, showModal } from "store/modal";
import { resetCryptoPaymentData } from "store/create-survey/survey";

import { ROUTES } from "router/routes";

import { ActionModalProps } from "components/modals/components/action-modal/types";
import { ModalProps } from "store/modal/types";

const useShowModal = () => {
  const { surveyId } = useParams();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleCloseSuccessModal = () => {
    dispatch(resetCryptoPaymentData());
    dispatch(hideModal());
    navigate(`/${ROUTES.business}/${ROUTES.surveys}/${surveyId}/${ROUTES.surveySettings}`);
  };
  const showSuccessModal = (isVirtual: boolean = false) => {
    const _showModal = showModal as ModalProps<ActionModalProps>;

    dispatch(
      _showModal({
        modalName: "actionModal",
        clickOutsideHandler: handleCloseSuccessModal,
        title: (
          <IconButton radius="full" style={{ background: "black" }}>
            <Icons.DiamondIcon />
          </IconButton>
        ),
        props: {
          title: isVirtual ? "Survey plan updated!" : "Successfully paid!",
          description: isVirtual
            ? "You successfully add ANSR token for survey!"
            : "You successfully paid for your survey with crypto. Finish survey creation",

          btnArr: [
            {
              buttonText: "Go to settings",
              callback: handleCloseSuccessModal,
            },
          ],
        },
      }),
    );
  };

  return { showSuccessModal };
};

export default useShowModal;
