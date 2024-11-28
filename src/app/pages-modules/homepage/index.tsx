import { Flex } from "@chakra-ui/react";
import DashboardModuleCard from "@MME-components/cards/dashboard-module-card";
import { NAVIGATION } from "@MME-config/navigation-menu";
import { useRouter } from "next/router";
import React from "react";
import { AiFillCalendar, AiOutlineUser } from "react-icons/ai";

const Homepage = () => {
  const router = useRouter();

  return (
    <Flex
      alignItems="center"
      w="full"
      gap="80px"
      h="full"
      justifyContent="center"
      flexDir={{ lg: "row", base: "column" }}
    >
      <DashboardModuleCard
        moduleName="Manage Member"
        icon={<AiOutlineUser size="80px" />}
        description="Update existing member information / Add new member"
        buttonClick={() => router.push(NAVIGATION.MEMBERSHIP)}
        buttonText="Go to Member Area"
      />
      <DashboardModuleCard
        moduleName="Manage Event"
        icon={<AiFillCalendar size="80px" />}
        description="Create / Update an Scheduled event for the organization"
        buttonClick={() => router.push(NAVIGATION.EVENT)}
        buttonText="Go to Event Area"
      />
    </Flex>
  );
};

export default Homepage;
