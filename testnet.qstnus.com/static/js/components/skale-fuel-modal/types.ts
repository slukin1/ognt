export type SkaleFuelModalProps = {
  isOpen: boolean;
  toggleOpen: () => void;
  invalidate?: () => void;
};

export enum SkaleFuelModalStatuses {
  INITIALIZATION = "Initializing SKALE Assistant...",
  BALANCE_CHECK = "Checking your sFUEL balance...",
  DISTRIBUTE_REQUEST = "Requesting sFUEL distribution...",
  DISTRIBUTE_PENDING = "Pending sFUEL distribution...",
  ALL_RIGHT = "All right! You have enough sFUEL to proceed.",
}
