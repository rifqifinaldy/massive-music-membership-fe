import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import MemberTypeBadge from "@MME-components/badge/member-type-badge";
import BasicTable, { ITableColumns } from "@MME-components/table/basic-table";
import useMembers from "@MME-hooks/api's/useMembers";
import { IMembers } from "@MME-interface/member.interface";
import React, { useEffect } from "react";

const MembershipListTable: React.FC = () => {
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
          <Text fontSize="12px" fontWeight="500">
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
      key: "isActive",
      title: "Status",
      width: "100px",
      render: (data: IMembers) => {
        return (
          <Text
            fontWeight={700}
            color={data?.isActive ? "green.500" : "yellow.500"}
          >
            {data?.isActive ? "Active" : "Inactive"}
          </Text>
        );
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
      key: "id",
      title: "Action",
      width: "100px",
      render: () => {
        return <Text>-</Text>;
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
