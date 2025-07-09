import * as Accordion_ from "@radix-ui/react-accordion";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import React from "react";

import accordionStyles from "./index.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionTrigger_ = React.forwardRef<any, any>(({ children, className, ...props }, forwardedRef) => (
  <Accordion_.Header className={accordionStyles.AccordionHeader_}>
    <Accordion_.Trigger
      className={clsx(`${accordionStyles.AccordionTrigger_}`, className)}
      {...props}
      ref={forwardedRef}
    >
      <b>{children}</b>
      <ChevronUpIcon className={accordionStyles.AccordionChevron_} aria-hidden />
    </Accordion_.Trigger>
  </Accordion_.Header>
));

AccordionTrigger_.displayName = "AccordionTrigger_";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionContent_ = React.forwardRef<any, any>(({ children, className, ...props }, forwardedRef) => (
  <Accordion_.Content className={clsx(`${accordionStyles.AccordionContent_}`, className)} {...props} ref={forwardedRef}>
    <div className={accordionStyles.AccordionContent_Text}>{children}</div>
  </Accordion_.Content>
));

AccordionContent_.displayName = "AccordionContent_";

const Accordion = () => {
  return (
    <Accordion_.Root type="single" defaultValue="item-2" collapsible className={accordionStyles.AccordionRoot_}>
      <Accordion_.Item value="item-1" className={accordionStyles.AccordionItem_}>
        <AccordionTrigger_>Is QSTN secure and reliable?</AccordionTrigger_>
        <AccordionContent_>
          Yes, QSTN is secure and reliable. We use blockchain technology to ensure that all transactions and data are
          immutable and tamper-proof. Additionally, we leverage zero-knowledge proofs (ZKPs) to verify participation
          without accessing personal data, maintaining the highest standards of privacy and security.
        </AccordionContent_>
      </Accordion_.Item>

      <Accordion_.Item className={accordionStyles.AccordionItem_} value="item-2">
        <AccordionTrigger_>What makes QSTN the simplest way to create surveys?</AccordionTrigger_>
        <AccordionContent_>
          QSTN is a platform that connects businesses and individuals through market research surveys. Our partners are
          looking for feedback from consumers like you, and we provide the opportunity for you to earn rewards while
          sharing your opinions. The platform&apos;s user-friendly interface, AI-driven survey creation tools, and
          automated reward distribution make it easy and efficient to create and manage surveys.
        </AccordionContent_>
      </Accordion_.Item>

      <Accordion_.Item className={accordionStyles.AccordionItem_} value="item-3">
        <AccordionTrigger_>How do I start my QSTN journey?</AccordionTrigger_>
        <AccordionContent_>
          To start your QSTN journey: Sign Up: Visit the QSTN website and create an account using your email address.
          Verify Email: Check your email for a verification link and click on it to verify your email address. Complete
          Profile: Fill in your profile details and set up your security settings. Set Up Wallet: Follow the
          instructions to generate a wallet using Magic or connect an existing wallet. Participate in Surveys: Browse
          available surveys, participate, and start earning rewards.
        </AccordionContent_>
      </Accordion_.Item>

      <Accordion_.Item className={accordionStyles.AccordionItem_} value="item-4">
        <AccordionTrigger_>What are the rewards for participating in QSTN surveys?</AccordionTrigger_>
        <AccordionContent_>
          Participants in QSTN surveys can earn a variety of rewards, including: Tokens: Digital currency that can be
          used within the QSTN ecosystem or traded on supported exchanges. NFTs: Unique digital assets that can
          represent ownership or access to special content or benefits. Other Digital Assets: Depending on the survey,
          rewards may also include other forms of digital currency or assets.
        </AccordionContent_>
      </Accordion_.Item>

      <Accordion_.Item className={accordionStyles.AccordionItem_} value="item-5">
        <AccordionTrigger_>How does QSTN ensure unbiased and authentic feedback?</AccordionTrigger_>
        <AccordionContent_>
          QSTN employs several measures to ensure unbiased and authentic feedback: AI-Driven Credibility Scoring: Our AI
          algorithms analyze response patterns, speed, and content depth to assess the credibility of responses.
          Zero-Knowledge Proofs (ZKPs): ZKPs verify participation without revealing personal data, ensuring that
          feedback is genuine and unbiased. Gamification Elements: Leaderboards, points, and rewards incentivize honest
          participation and discourage fraudulent behavior. Survey Design Tools: Our tools help businesses create clear
          and effective surveys, reducing the potential for biased or misleading questions.
        </AccordionContent_>
      </Accordion_.Item>
    </Accordion_.Root>
  );
};

export default Accordion;
