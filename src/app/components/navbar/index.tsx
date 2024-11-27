import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Flex
      gap="20px"
      w="full"
      px="20px"
      h="80px"
      bg="neutral.900"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Flex gap="10px" alignItems="center">
        <Avatar size="sm" shadow="sm" />
        <Flex flexDir="column">
          <Text color="green.0" fontSize="18px">
            Admin
          </Text>
          <Text color="green.200" fontWeight={400} fontSize="12px">
            {new Date().toDateString()}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
