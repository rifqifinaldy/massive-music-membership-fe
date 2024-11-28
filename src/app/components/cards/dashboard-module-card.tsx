import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BORDER, RADIUS } from "../../../themes/variant";

interface IProps {
  icon: React.JSX.Element;
  moduleName: string;
  buttonText: string;
  buttonClick: () => void;
  description: string;
}

const DashboardModuleCard: React.FC<IProps> = ({
  icon,
  moduleName,
  buttonClick,
  buttonText,
  description,
}) => {
  return (
    <Flex
      w={{ base: "full", xl: "480px" }}
      h="380px"
      rounded={RADIUS.SM}
      border={BORDER.GREEN}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="20px"
    >
      {icon}
      <Text textAlign="center" fontSize="28px">
        {moduleName}
      </Text>
      <Text textAlign="center" fontSize="14px">
        {description}
      </Text>
      <Button size="sm" onClick={() => buttonClick()}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default DashboardModuleCard;
