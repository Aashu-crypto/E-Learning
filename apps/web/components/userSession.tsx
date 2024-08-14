import { getSession } from "next-auth/react";
import React from "react";

type Props = {};

const UserSession = (props: Props) => {
  const session = getSession();
  console.log(session);

  return <div>userSession:{JSON.stringify(session)}</div>;
  
};

export default UserSession;
