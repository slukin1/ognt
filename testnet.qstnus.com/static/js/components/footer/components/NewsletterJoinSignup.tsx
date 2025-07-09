import { KeyboardEventHandler, useState } from "react";
import { toast } from "react-hot-toast";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Flex } from "@sekmet/radix-ui-themes";
import { Link } from "react-router-dom";
import { Input } from "components";

import { useAppDispatch } from "store/store";
import { subscribeToNewsletter } from "store/subscriptions/actions";

import { isErrorResult } from "services";
import { EXTERNAL_LINK, REGEX } from "configs";

import footerStyles from "../Footer.module.scss";

function NewsletterJoinSignup() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");

  const onSubmit = (email?: string) => {
    if (email && REGEX.email.test(email)) {
      dispatch(subscribeToNewsletter({ email })).then(res => {
        if (!isErrorResult(res.payload)) {
          setEmail("");
          toast.success("Thank you for subscribing to our newsletter!");
        }
      });
    } else {
      toast.error("Email invalid!");
    }
  };

  const handleKeyDown: KeyboardEventHandler = event => {
    if (!email) {
      return;
    }
    switch (event.key) {
      case "Enter":
      case "Tab":
        onSubmit(email);
    }
  };

  return (
    <Flex className={footerStyles.footerSubscribe} direction={"column"} gap={"1"}>
      <p>Subscribe to newsletter</p>

      <Input
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
        suffixIcon={<ArrowRightIcon onClick={() => onSubmit(email)} className="hover:cursor-pointer" />}
      />

      <p style={{ color: "#71717A" }}>By signing up for email, you agree to QSTN&apos;s</p>
      <p style={{ color: "#71717A" }}>
        <Link target="_blank" to={EXTERNAL_LINK.privacyPolicy}>
          <span style={{ color: "#A855F7" }}>Terms of Service</span>
        </Link>{" "}
        and{" "}
        <Link target="_blank" to={EXTERNAL_LINK.privacyPolicy}>
          <span style={{ color: "#A855F7" }}>Privacy Policy</span>
        </Link>
      </p>
    </Flex>
  );
}

export default NewsletterJoinSignup;
