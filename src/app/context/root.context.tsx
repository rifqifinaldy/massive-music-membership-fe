import BasicModal, {
  BasicModalProps,
} from "@MME-components/pop-up/basic-modal";
import useModal from "@MME-hooks/helper/useModal";
import React, { createContext } from "react";

export interface IRootContext {
  modal: BasicModalProps;
}

export const RootContext = createContext<IRootContext | undefined>(undefined);

const RootProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const initialContext: IRootContext = {
    modal: useModal(),
  };

  return (
    <RootContext.Provider value={initialContext}>
      <BasicModal {...initialContext.modal} />
      {children}
    </RootContext.Provider>
  );
};

export default RootProvider;
