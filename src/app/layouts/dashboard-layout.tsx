import { Box, Flex } from "@chakra-ui/react";
import Navbar from "@MME-components/navbar";
import Sidebar from "@MME-components/sidebar";
import React from "react";

interface IProps {
  children: React.ReactElement;
}

const DashboardLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Box overflow="hidden" maxH="100vh">
      <Flex>
        <Sidebar />
        <Box w="full" h="100vh" overflow="auto">
          <Navbar />
          <Box px="20px" py="40px">
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
