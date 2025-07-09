import { Tooltip } from "@sekmet/radix-ui-themes";

import styles from "./styles.module.scss";

const IxecVerifyTag: React.FC = () => {
  return (
    <Tooltip content="iExec Web3 mail connected">
      <div className={styles.wrapper}>
        <img src="/images/iexec-logo.svg" className={styles.logo} />
      </div>
    </Tooltip>
  );
};

export default IxecVerifyTag;
