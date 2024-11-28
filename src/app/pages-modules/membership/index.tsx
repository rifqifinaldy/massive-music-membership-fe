import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useCallback, useContext } from "react";
import MembershipListTable from "./member-list-table";
import useMembers from "@MME-hooks/api's/useMembers";
import { IRootContext, RootContext } from "@MME-context/root.context";
import MemberForm, { TMemberFormType } from "./member-form";
import { IMembers } from "@MME-interface/member.interface";

const Membership: React.FC = () => {
  const { modal } = useContext(RootContext) as IRootContext;
  const { createMembers, editMembers, deleteMember } = useMembers();

  const openMemberForm = useCallback(
    (type: TMemberFormType, data?: IMembers) => {
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

  const openDeleteModal = useCallback(
    (data: IMembers) => {
      modal.onOpen();
      modal.setContent({
        header: "Delete Member",
        closeButton: true,
        overlayClose: false,
        size: "md",
        body: (
          <Text>
            Please, Confirm that you wish to remove{" "}
            <Text as="span" color="primary.500" fontWeight="500">
              {data.email}
            </Text>{" "}
            from the member list
          </Text>
        ),
        footer: (
          <Flex gap="10px">
            <Button
              variant="outline"
              colorScheme="primary"
              onClick={() => modal.onClose()}
            >
              Cancel
            </Button>
            <Button colorScheme="red" onClick={() => deleteMember(data.id)}>
              Yes, Delete
            </Button>
          </Flex>
        ),
      });
    },
    [deleteMember, modal]
  );

  const openActivateModal = useCallback(
    (data: IMembers) => {
      modal.onOpen();
      modal.setContent({
        header: data?.isActive ? "Deactivate Member" : "Activate Member",
        closeButton: true,
        overlayClose: false,
        size: "md",
        body: (
          <Text>
            Please, Confirm that you wish to{" "}
            <Text
              as="span"
              color={data?.isActive ? "red.500" : "green.500"}
              fontWeight="500"
            >
              {data?.isActive ? "Deactivate" : "Activate"}{" "}
            </Text>{" "}
            <Text as="span" color="green.500" fontWeight="500">
              {data.email}
            </Text>{" "}
          </Text>
        ),
        footer: (
          <Flex gap="10px">
            <Button
              variant="outline"
              colorScheme="primary"
              onClick={() => modal.onClose()}
            >
              Cancel
            </Button>
            <Button
              colorScheme={data?.isActive ? "red" : "green"}
              onClick={() =>
                editMembers({ ...data, isActive: !data?.isActive })
              }
            >
              Yes, {data?.isActive ? "Deactivate" : "Activate"}
            </Button>
          </Flex>
        ),
      });
    },
    [editMembers, modal]
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
      <MembershipListTable
        openMemberForm={openMemberForm}
        openDeleteModal={openDeleteModal}
        openActivateModal={openActivateModal}
      />
    </Flex>
  );
};

export default Membership;
