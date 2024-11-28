import React from "react";
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
  PositionProps,
  ComponentWithAs,
  TableCellProps,
  Spinner,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";

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
  width?: LayoutProps["width"];
  loadingState?: boolean;
  position?: PositionProps["position"];
  headerBackgroundColor?: string;
  headerFontColor?: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
}

const noRecordData = (columns: ITableColumns[]) => (
  <Tbody>
    <Tr>
      <Td textAlign="center" colSpan={columns.length}>
        No Records
      </Td>
    </Tr>
  </Tbody>
);

const BasicTable: React.FC<BasicTableProps> = ({
  datas,
  columns,
  variant,
  size = "md",
  width = "fit-content",
  loadingState,
  position = "relative",
  headerBackgroundColor = "neutral.300",
  headerFontColor = "neutral.0",
  currentPage,
  setCurrentPage,
  pageSize = 5,
}) => {
  const totalPages = Math.ceil(datas.length / pageSize);
  const paginatedData = datas.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Change page handler
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Box>
      <TableContainer w={width} minH="500px">
        <Table variant={variant} size={size} h="500px" position={position}>
          {datas.length === 0 && !loadingState && noRecordData(columns)}
          <Thead bg={headerBackgroundColor} color={headerFontColor}>
            <Tr>
              {columns.map((column) => (
                <Th
                  py="10px"
                  fontSize="16px"
                  color="green.900"
                  key={column.key}
                  w={column.width || "fit-content"}
                >
                  <Flex gap="10px">
                    <Text>{column.title}</Text>
                    {column.renderHeaderProperty}
                  </Flex>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody verticalAlign="top">
            {loadingState ? (
              <Tr>
                <Td colSpan={columns.length} textAlign="center">
                  <Flex
                    flexDir="column"
                    h="full"
                    w="full"
                    gap="20px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Spinner size="xl" color="green.500" />
                    <Text>Loading...</Text>
                  </Flex>
                </Td>
              </Tr>
            ) : (
              paginatedData.map((data, i) => (
                <Tr key={i}>
                  {columns.map((column) => (
                    <React.Fragment key={column.key}>
                      <Td
                        {...column.tdStyles}
                        verticalAlign="middle"
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
                    </React.Fragment>
                  ))}
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <Flex justifyContent="flex-start" mt="20px">
          <HStack spacing={4}>
            <Button
              size="xs"
              variant="outline"
              colorScheme="green"
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
            >
              First
            </Button>
            <Button
              size="xs"
              variant="outline"
              colorScheme="green"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </Button>
            <Text fontSize={{ base: "8px", md: "12px" }}>
              Page {currentPage} of {totalPages}
            </Text>
            <Button
              size="xs"
              variant="outline"
              colorScheme="green"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
            <Button
              size="xs"
              variant="outline"
              colorScheme="green"
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              Last
            </Button>
          </HStack>
        </Flex>
      )}
    </Box>
  );
};

export default BasicTable;
