import { AiFillCalendar, AiOutlineHome, AiOutlineUser } from "react-icons/ai";

export const NAVIGATION = {
  HOMEPAGE: "/",
  MEMBERSHIP: "/membership",
  EVENT: "/event",
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
  {
    id: 3,
    name: "Event Management",
    url: NAVIGATION.EVENT,
    icon: <AiFillCalendar size="22px" />,
  },
];
