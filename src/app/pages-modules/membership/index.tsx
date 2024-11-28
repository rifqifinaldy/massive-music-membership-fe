import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useCallback, useContext } from "react";
import MembershipListTable from "./member-list-table";
import useMembers from "@MME-hooks/api's/useMembers";
import { IRootContext, RootContext } from "@MME-context/root.context";
import MemberForm, { TMemberFormType } from "./member-form";
import { IMembers } from "@MME-interface/member.interface";

const Membership: React.FC = () => {
  const { modal } = useContext(RootContext) as IRootContext;
  const { createMembers, editMembers } = useMembers();

  const openMemberForm = useCallback(
    (type: TMemberFormType, data?: IMembers) => {
      console.log("DATA form", data);
      modal.onOpen();
      modal.setContent({
        header: type === "create" ? "Create New User" : "Edit User",
        closeButton: true,
        overlayClose: false,
        size: "2xl",
        body: (
          <MemberForm
            type={type}
            action={type === "create" ? createMembers : editMembers}
            data={data}
          />
        ),
      });
    },
    [createMembers, editMembers, modal]
  );

  return (
    <Flex flexDir="column" gap="20px" w="full">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Heading>Membership</Heading>
          <Text color="green.200">Add / Manage Membership</Text>
        </Box>
        <Button
          onClick={() => openMemberForm("create")}
          size="sm"
          colorScheme="green"
          variant="outline"
        >
          Create new Member
        </Button>
      </Flex>
      <MembershipListTable openMemberForm={openMemberForm} />
    </Flex>
  );
};

export default Membership;
