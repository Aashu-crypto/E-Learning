import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className=" flex justify-between bg-slate-400 p-4 ">
      <div>E-Learning</div>
      <div className="flex space-x-2">
        <ul  className="flex space-x-2">
          <li>
            <Link href={"/SignIn"}>log In</Link>
          </li>
          <li>
            <Link href={"/SignIn"}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
