import { Root, Portal, Overlay, Content, Title } from "@radix-ui/react-dialog";
import { Loader2, CircleCheck } from "lucide-react";
import { useSkaleFuelModal } from "./hooks/use-skale-fuel-modal";
import modalStyles from "./skale-fuel-modal.module.scss";
import { SkaleFuelModalProps } from "./types";

const SkaleFuelModal: React.FC<SkaleFuelModalProps> = props => {
  const { isLoading, currentStatus, isOpen, isModalVisible } = useSkaleFuelModal(props);

  return (
    <Root open={isOpen && isModalVisible}>
      <Portal>
        <Overlay className={modalStyles.DialogOverlay} />
        <Content className={modalStyles.DialogContent}>
          <Title className="text-center">SKALE Assistant</Title>
          <div className="w-full flex flex-col items-center justify-center gap-2 mt-4">
            {isLoading ? <Loader2 className="animate-spin h-16 w-16" /> : <CircleCheck className="h-16 w-16" />}
            <p>{currentStatus}</p>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default SkaleFuelModal;
