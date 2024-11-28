import { useDisclosure } from "@chakra-ui/react";
import { BasicModalContentProps } from "@MME-components/pop-up/basic-modal";
import { useState } from "react";

const useModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   Default Content Modal State
  const [content, setContent] = useState<BasicModalContentProps>({
    header: "",
    body: "",
    footer: "",
    overlayClose: false,
    closeButton: true,
    size: "md",
  });

  return {
    isOpen,
    onOpen,
    onClose,
    content,
    setContent,
  };
};

export default useModal;
