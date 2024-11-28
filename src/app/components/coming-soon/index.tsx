import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { COLORS } from "../../../themes/variant";

const ComingSoon: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      h="50vh"
      w="full"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      <AiFillExclamationCircle color={COLORS.GREEN} size="64px" />
      <Heading>Coming Soon</Heading>
      <Text>
        {" "}
        Stay tuned for upcoming updates, and thank you for your ongoing support.
      </Text>
    </Flex>
  );
};

export default ComingSoon;
