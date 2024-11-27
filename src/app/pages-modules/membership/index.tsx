import useMembers from "@MME-hooks/api's/useMembers";
import React, { useEffect } from "react";

const Membership: React.FC = () => {
  const { getMembersList, membersList } = useMembers();

  console.log("DATA", membersList);

  useEffect(() => {
    getMembersList();
    return () => {};
  }, []);

  return <div>Membership Pages</div>;
};

export default Membership;
