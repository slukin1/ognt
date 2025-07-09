import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BigNumber from "bignumber.js";

import { Breadcrumb, Icons, StepsProgressBar, Button, Modal } from "components";
import { NumOfParticipants, RewardAmount, StripePayment } from "./components";

import { IconButton } from "@sekmet/radix-ui-themes";

import { useHandleSurveyData } from "pages/business/survey/hooks";
import { useHandleSurveyFunding } from "./hooks";

import { useTheme } from "context";
import SkaleFuelModal from "components/skale-fuel-modal";
import { useAppSelector } from "store/store";
import { PaymentMethod } from "store/create-survey/survey/types";
import { selectCombinedData } from "./selectors";
import { SUPPORTED_SKALE_CHAIN_ID } from "configs/web3";
import { ROUTES } from "router/routes";

interface PaymentProps {
  paymentType: PaymentMethod;
}

const SelectFundingParams: React.FC<PaymentProps> = ({ paymentType }) => {
  const { reward, participants, totalRewardAmount, fiatPaymentData, paymentNetwork } =
    useAppSelector(selectCombinedData);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();
  const { surveyId } = useParams();
  const { theme } = useTheme();

  useHandleSurveyData();
  const { loading, fetchFiatPaymentData, fetchCryptoPaymentData, isSkaleModalVisible, toggleSkaleModal } =
    useHandleSurveyFunding();

  const handlePaymentStep = () => {
    if (paymentType === PaymentMethod.CARD) {
      fetchFiatPaymentData();
    } else {
      if (paymentNetwork?.chainId === SUPPORTED_SKALE_CHAIN_ID) {
        toggleSkaleModal();
        return;
      }
      fetchCryptoPaymentData();
    }
  };

  const handleSuccessAction = () => {
    setShowSuccessModal(false);
    navigate(`/${ROUTES.business}/${ROUTES.surveys}/${surveyId}/${ROUTES.surveySettings}`);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "24px",
        marginBottom: "12px",
      }}
    >
      <Breadcrumb
        label="Back"
        path={`/${ROUTES.business}/${ROUTES.surveys}/${surveyId}/${
          paymentType === PaymentMethod.CARD ? ROUTES.surveySettings : ROUTES.payWithCrypto
        }`}
      />

      <StepsProgressBar step={3} />

      <section className="flex flex-grow flex-col justify-between">
        <div className="flex flex-col gap-3 py-6 pt-4">
          <p className="text-2xl font-semibold text-zinc-900 dark:text-white">Select a package</p>

          <div className="flex flex-col">
            <p className="text-sm text-zinc-800">Choose one of our plans to enhance your profile.</p>
            <p className="text-sm text-zinc-800">
              You can ask us for a customized plan that suits your needs by <Link to="#">contacting us</Link>.
            </p>
          </div>

          <div className="flex h-full flex-grow justify-center" style={{ marginTop: "6px" }}>
            <section className="mt-6 grid w-full gap-x-20 flex-grow max-md:gap-4 md:grid-cols-2">
              {paymentType === PaymentMethod.CARD && fiatPaymentData ? (
                <StripePayment />
              ) : (
                <span className="flex w-full">
                  <div className="flex justify-end w-full">
                    <div className="rounded-2xl border border-solid border-zinc-300 p-6 w-full dark:bg-zinc-800/50 border-zinc-700/50">
                      <div className="flex h-full flex-col justify-around gap-4 text-sm">
                        <span className="flex flex-col gap-2">
                          <p className="text-zinc-900 text-base font-semibold dark:text-white">
                            Make your own survey plan
                          </p>

                          <NumOfParticipants label={"Participants"} />

                          <RewardAmount
                            label={"Reward amount"}
                            tokenName={paymentType === PaymentMethod.CARD ? "USD" : paymentNetwork?.token}
                            minAmount={paymentType === PaymentMethod.CARD ? 0.01 : (paymentNetwork?.minAmount ?? 0.01)}
                            maxAmount={paymentType === PaymentMethod.CARD ? 100 : (paymentNetwork?.maxAmount ?? 100)}
                          />
                        </span>

                        <Button
                          pending={loading}
                          disabled={!totalRewardAmount || loading || isSkaleModalVisible}
                          icon={<Icons.ArrowRightIcon mode={theme} stroke="white" />}
                          onClick={handlePaymentStep}
                        >
                          Pay now
                        </Button>
                      </div>
                    </div>
                  </div>
                </span>
              )}

              <div className="flex h-[260px] justify-end">
                <div className="bg-zinc-200 w-full p-6 rounded-2xl dark:bg-zinc-800/50">
                  <div className="flex w-full flex-col justify-around gap-4 text-sm">
                    <span className="flex flex-col gap-2">
                      <p className="font-semibold text-zinc-900 dark:text-white">Campaign plan</p>
                      <div className="bg-zinc-100 p-4 rounded-2xl dark:bg-zinc-800">
                        <div className="flex flex-col gap-2">
                          <p className="flex gap-1 items-center font-semibold text-zinc-900 dark:text-white">
                            <Icons.BusinessPlanIcon mode={theme} />
                            Business plan
                          </p>
                          <p className="text-zinc-600 dark:text-zinc-400">{participants} participants</p>
                          <p className="text-zinc-600 dark:text-zinc-400">
                            {`${BigNumber(reward).toFormatExtended(18)} ${
                              paymentType === PaymentMethod.CARD ? "USD" : (paymentNetwork?.token ?? "")
                            } for each participant`}
                          </p>
                        </div>
                      </div>
                    </span>

                    <div className="bg-white p-4 rounded-2xl dark:bg-zinc-700">
                      <p className="text-base font-semibold">
                        {`${BigNumber(totalRewardAmount).toFormatExtended(18)} ${
                          paymentType === PaymentMethod.CARD ? "USD" : (paymentNetwork?.token ?? "")
                        } for ${participants} Survey Participants`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <SkaleFuelModal isOpen={isSkaleModalVisible} toggleOpen={toggleSkaleModal} invalidate={fetchCryptoPaymentData} />

      {paymentType === PaymentMethod.CRYPTO && (
        <Modal
          open={showSuccessModal}
          setOpen={setShowSuccessModal}
          title="Success!"
          content="The transaction was successful! Your survey is funded."
          buttonText="Ok"
          onAction={handleSuccessAction}
          onCancel={handleSuccessAction}
          onOk={handleSuccessAction}
          icon={
            <IconButton radius="full" style={{ background: "black" }}>
              <Icons.DiamondIcon />
            </IconButton>
          }
        />
      )}
    </main>
  );
};

export default SelectFundingParams;
