import { AiFillHome, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { COLORS } from "../../themes/variant";

export const NAVIGATION = {
  HOMEPAGE: "/",
  MEMBERSHIP: "/membership",
};

export const MENUS = [
  {
    id: 1,
    name: "Homepage",
    url: NAVIGATION.HOMEPAGE,
    icon: <AiOutlineHome size="22px" />,
  },
  {
    id: 2,
    name: "Membership",
    url: NAVIGATION.MEMBERSHIP,
    icon: <AiOutlineUser size="22px" />,
  },
];
