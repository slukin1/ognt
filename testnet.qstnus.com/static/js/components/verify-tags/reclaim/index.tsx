import { Tooltip } from "@sekmet/radix-ui-themes";

import styles from "./styles.module.scss";

const ReclaimVerifyTag: React.FC = () => {
  return (
    <Tooltip content="Email verified by Reclaim">
      <div className={styles.wrapper}>
        <img src="/images/reclaim-logo.jpg" className={styles.logo} />
      </div>
    </Tooltip>
  );
};

export default ReclaimVerifyTag;
