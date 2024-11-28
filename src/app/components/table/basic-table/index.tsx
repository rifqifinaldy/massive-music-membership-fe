import {
  Text,
  LayoutProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  SystemStyleObject,
  PositionProps,
  ComponentWithAs,
  TableCellProps,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export interface ITableColumns {
  key: string;
  title: string;
  width?: LayoutProps["width"];
  capitalize?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (data: any, index?: number) => void;
  renderHeaderProperty?: React.ReactNode;
  tdStyles?: ComponentWithAs<"td", TableCellProps>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DataTable = Record<string, any>;

interface BasicTableProps {
  datas: DataTable[];
  columns: ITableColumns[];
  variant?: "simple" | "striped" | "unstyled";
  size?: "sm" | "md" | "lg";
  colorScheme?: string;
  width?: LayoutProps["width"];
  loadingState?: boolean;
  onHover?: SystemStyleObject;
  linkTo?: string;
  position?: PositionProps["position"];
  headerBackgroundColor?: string;
  headerFontColor?: string;
  border?: string;
  rounded?: string;
}

const noRecordData = (columns: ITableColumns[]) => {
  return (
    <Tbody>
      <Tr>
        <Td textAlign="center" colSpan={columns.length}>
          No Records
        </Td>
      </Tr>
    </Tbody>
  );
};

const RowWithLink: React.FC<{
  children: React.ReactNode;
  dataId: number;
  linkTo: string;
}> = ({ linkTo, children, dataId }) => {
  return <Link href={`${linkTo}/${dataId}`}>{children}</Link>;
};

const BasicTable: React.FC<BasicTableProps> = ({
  datas,
  columns,
  variant,
  size = "md",
  width = "fit-content",
  loadingState,
  onHover,
  linkTo,
  position = "relative",
  headerBackgroundColor = "neutral.300",
  headerFontColor = "neutral.0",
  border = "none",
  rounded = "0",
}) => {
  return (
    <TableContainer w={width} border={border} rounded={rounded} minH="500px">
      <Table variant={variant} size={size} h="500px" position={position}>
        {datas.length === 0 && !loadingState && noRecordData(columns)}
        <Thead bg={headerBackgroundColor} color={headerFontColor}>
          <Tr>
            {columns?.map((column) => {
              return (
                <Th
                  py="10px"
                  fontSize="16px"
                  color="green.900"
                  key={column.key}
                  w={column.width || "fit-content"}
                >
                  <Flex gap="10px" alignItems="center">
                    <Text>{column.title}</Text>
                    {column.renderHeaderProperty}
                  </Flex>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody verticalAlign="top">
          {typeof loadingState !== "undefined" && loadingState ? (
            <Tr>
              <Td colSpan={columns.length} textAlign="center">
                <Flex
                  flexDir="column"
                  h="full"
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                  gap="20px"
                >
                  <Spinner size="xl" color="green.500" />
                  <Text>Loading...</Text>
                </Flex>
              </Td>
            </Tr>
          ) : (
            datas.map((data, i: number) => (
              <Tr key={i} _hover={onHover}>
                {columns.map((column) => (
                  <React.Fragment key={column.key}>
                    {linkTo ? (
                      <RowWithLink dataId={data.id} linkTo={linkTo}>
                        <Td
                          textTransform={
                            column.capitalize ? "capitalize" : "none"
                          }
                          fontSize="14px"
                          w={column.width || "fit-content"}
                        >
                          {column.render
                            ? column.render(data, i)
                            : data[column.key]}
                        </Td>
                      </RowWithLink>
                    ) : (
                      <Td
                        {...column.tdStyles}
                        verticalAlign={datas.length < 5 ? "top" : "middle"}
                        textTransform={
                          column.capitalize ? "capitalize" : "none"
                        }
                        fontSize="14px"
                        w={column.width || "fit-content"}
                        alignItems="center"
                      >
                        {column.render
                          ? column.render(data, i)
                          : data[column.key]}
                      </Td>
                    )}
                  </React.Fragment>
                ))}
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
