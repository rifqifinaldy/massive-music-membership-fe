import { Avatar, Box, Button, Flex, Switch, Text } from "@chakra-ui/react";
import MemberTypeBadge from "@MME-components/badge/member-type-badge";
import BasicTable, { ITableColumns } from "@MME-components/table/basic-table";
import useMembers from "@MME-hooks/api's/useMembers";
import { IMembers } from "@MME-interface/member.interface";
import React, { useEffect } from "react";
import { TMemberFormType } from "../member-form";

interface IProps {
  openMemberForm: (type: TMemberFormType, data?: IMembers) => void;
  openDeleteModal: (data: IMembers) => void;
  openActivateModal: (data: IMembers) => void;
}

const MembershipListTable: React.FC<IProps> = ({
  openMemberForm,
  openDeleteModal,
  openActivateModal,
}) => {
  const { getMembersList, membersList } = useMembers();

  const { data, pending } = membersList;

  useEffect(() => {
    getMembersList();
    return () => {};
  }, [getMembersList]);

  const columns: ITableColumns[] = [
    {
      key: "no",
      title: "No",
      width: "5%",
      render: (_, i) => {
        return (
          <Text fontSize="14px" fontWeight="500">
            {(i as number) + 1}
          </Text>
        );
      },
    },
    {
      key: "first_name",
      title: "Members",
      width: "20%",
      capitalize: true,
      render: (data: IMembers) => {
        return (
          <Flex alignItems="center" gap="10px">
            <Avatar
              border="1px solid green"
              src={data?.profile_pic || ""}
              name={`${data?.first_name} ${data?.last_name}`}
            />
            <Box>
              <Text>
                {data?.first_name} {data?.last_name}
              </Text>
              <Text fontSize="12px" color="green.100">
                {data?.email}
              </Text>
            </Box>
          </Flex>
        );
      },
    },
    {
      key: "gender",
      title: "Gender",
      capitalize: true,
      width: "250px",
    },
    {
      key: "age",
      title: "Age",
      capitalize: true,
      width: "250px",
      render: (data: IMembers) => {
        return <Text>{data?.age} Years Old</Text>;
      },
    },
    {
      key: "membership_type",
      title: "Member Type",
      width: "100px",
      render: (data: IMembers) => {
        return <MemberTypeBadge type={data?.member_type} />;
      },
    },
    {
      key: "isActive",
      title: "Status",
      width: "100px",
      render: (data: IMembers) => {
        return (
          <Flex flexDir="column">
            <Switch
              isChecked={data?.isActive}
              colorScheme="green"
              size="lg"
              onChange={() => openActivateModal(data)}
            />
            <Text
              cursor="pointer"
              fontWeight={700}
              color={data?.isActive ? "green.500" : "neutral.100"}
              _hover={{
                textDecoration: "underline",
                color: data?.isActive ? "green.600" : "neutral.100",
              }}
              display="flex"
              alignItems="center"
            >
              {data?.isActive ? "Active" : "Inactive"}
            </Text>
          </Flex>
        );
      },
    },
    {
      key: "action",
      title: "action",
      render: (data: IMembers) => {
        return (
          <Flex gap="10px">
            <Button
              onClick={() => openMemberForm("edit", data)}
              size="sm"
              colorScheme="green"
            >
              Edit
            </Button>
            <Button
              onClick={() => openDeleteModal(data)}
              size="sm"
              colorScheme="red"
            >
              Delete
            </Button>
          </Flex>
        );
      },
    },
  ];

  return (
    <BasicTable
      loadingState={pending}
      width="full"
      datas={data || []}
      columns={columns}
    />
  );
};

export default MembershipListTable;
