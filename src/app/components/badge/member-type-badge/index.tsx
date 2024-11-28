import { Flex } from "@chakra-ui/react";
import { EMemberType, TMemberType } from "@MME-interface/member.interface";
import React, { useCallback } from "react";
import { BORDER } from "../../../../themes/variant";

interface IProps {
  type: TMemberType | null;
}

const MemberTypeBadge: React.FC<IProps> = ({ type }) => {
  const renderBadgeProperty = useCallback((type: TMemberType | null) => {
    let color, bg, border;
    switch (type) {
      case EMemberType.REGULAR:
        color = "primary.500";
        bg = "primary.100";
        border = BORDER.LIGHT_BLUE;
        break;
      case EMemberType.PREMIUM:
        color = "neutral.0";
        bg = "primary.500";
        border = BORDER.DEFAULT;
        break;
      default:
        color = "red.500";
        bg = "red.100";
        border = BORDER.DEFAULT;
        break;
    }

    return { color, bg, border };
  }, []);

  return (
    <Flex
      {...renderBadgeProperty(type)}
      alignItems="center"
      justifyContent="center"
      p="8px"
      borderRadius="18px"
      fontWeight="700"
      w="100px"
    >
      {type}
    </Flex>
  );
};

export default MemberTypeBadge;
