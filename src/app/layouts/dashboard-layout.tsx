import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  children: React.ReactElement;
}

const DashboardLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Flex>
      <Text>Sidebar</Text>
      {children}
    </Flex>
  );
};

export default DashboardLayout;
