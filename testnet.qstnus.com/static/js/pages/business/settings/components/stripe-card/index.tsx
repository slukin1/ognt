import { Avatar, Button } from "components";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "router/routes";

import { SubmitWeb3MailTypes } from "pages/submit-web3-mail/types";

const StripeCard: React.FC<{ profileType: SubmitWeb3MailTypes }> = ({ profileType }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl border border-solid border-zinc-300 dark:border-zinc-800 p-4 flex flex-col w-full">
      <div className="flex gap-4 items-start md:min-h-[240px] 2xl:min-h-[120px]">
        <Avatar imgSrc="/images/stripe-logo.svg" scale="lg" />
        <div className="flex flex-col gap-1">
          <p className="font-medium text-zinc-900 dark:text-white">Stripe</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {
              "Stripe is an online payment processing platform that allows QSTN users to accept payments over the internet. It is widely used for e-commerce, subscriptions, and in-app purchases. Stripe provides a secure and easy way for users to withdraw their earnings with credit cards, debit cards, and other payment methods."
            }
          </p>
        </div>
      </div>

      <div className="h-px w-full bg-zinc-300 dark:bg-zinc-800 my-4" />

      <div>
        <Button
          onClick={() =>
            navigate(
              `/${profileType === SubmitWeb3MailTypes.BUSINESS ? ROUTES.business : ROUTES.user}/${ROUTES.dashboard}/${ROUTES.stripeSetup}`,
            )
          }
          disabled={false}
          variant="secondary"
        >
          Setup Stripe
        </Button>
      </div>
    </div>
  );
};

export default StripeCard;
