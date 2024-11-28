import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ResponsiveValue,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

export interface BasicModalContentProps {
  header?: JSX.Element | React.ReactNode | string;
  body?: JSX.Element | React.ReactNode | string;
  footer?: JSX.Element | React.ReactNode | string;
  overlayClose?: boolean;
  closeButton: boolean;
  size:
    | ResponsiveValue<
        | (string & {})
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "full"
        | "xs"
        | "4xl"
        | "5xl"
        | "6xl"
      >
    | undefined;
  color?: string;
}

export interface BasicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  setContent: Dispatch<SetStateAction<BasicModalContentProps>>;
  content: BasicModalContentProps;
}

const BasicModal: React.FC<BasicModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={content.overlayClose}
      isCentered
      motionPreset="slideInBottom"
      size={content.size}
      scrollBehavior="inside"
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent background={content.color}>
        <ModalHeader>{content.header}</ModalHeader>
        {content.closeButton && <ModalCloseButton />}
        <ModalBody display="flex" flexDir="column" gap="16px">
          {content.body}
        </ModalBody>
        <ModalFooter>{content.footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BasicModal;
