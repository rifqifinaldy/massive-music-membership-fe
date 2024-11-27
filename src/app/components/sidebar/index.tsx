import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BORDER } from "../../../themes/variant";
import { MENUS } from "config/navigation-menu";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderMenu = () => (
    <Flex
      flexDir="column"
      h="100vh"
      bg="neutral.900"
      borderRight={BORDER.GREEN}
      w="full"
      py="20px"
    >
      <Box px="20px" h="80px">
        <Heading color="neutral.0" fontWeight={700} fontSize="24px">
          Massive Music
        </Heading>
        <Text fontSize="16px" color="neutral.300">
          Dashboard
        </Text>
      </Box>
      {MENUS.map((menu) => {
        const isActiveMenu = router.asPath === menu.url;
        return (
          <Flex
            as={Link}
            key={`menu-${menu.id}`}
            justifyContent="space-between"
            bg={isActiveMenu ? "neutral.500" : "inherit"}
            href={menu.url}
            transition="all 0.15s ease-in"
            _hover={
              !isActiveMenu
                ? {
                    bg: "neutral.600",
                  }
                : {}
            }
          >
            <Flex
              color={isActiveMenu ? "green.500" : "green.0"}
              px="20px"
              alignItems="center"
              gap="10px"
              py="20px"
            >
              {menu.icon}
              <Text fontSize="18px">{menu.name}</Text>
            </Flex>
            {isActiveMenu && (
              <Box h="full" w="10px" bg="green.500" borderLeftRadius="20px" />
            )}
          </Flex>
        );
      })}
    </Flex>
  );

  return (
    <Box>
      {/* Desktop Sidebar */}
      <Box
        display={{ base: "none", md: "block" }}
        w={{ base: "320px", md: "280px", xl: "320px" }}
      >
        {renderMenu()}
      </Box>

      {/* Mobile/Tablet Sidebar */}
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<FiMenu />}
          aria-label="Open menu"
          onClick={onOpen}
          position="fixed"
          top="20px"
          left="20px"
          bg="neutral.900"
          color="green.0"
          fontSize="32px"
          _hover={{ bg: "neutral.700" }}
        />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="neutral.900">
            <DrawerCloseButton color="green.0" />
            {renderMenu()}
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
