"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
type Props = {};

const NavBar = (props: Props) => {
  const [showToast, setShowToast] = useState();
  const session = useSession();
  return (
    <div className=" flex justify-between p-4 z-10 shadow-md ">
      <div className=" font-semibold text-xl">E-Learning</div>
      <div className="flex space-x-2">
        <ul className="md:flex space-x-2 hidden">
          <button
            className=" border p-2 rounded-md text-sm hover:bg-blue-50 text-center font-semibold  "
            onClick={() => signIn()}
          >
            Sign In :{JSON.stringify(session)}
          </button>
          <button
            className=" border p-2 rounded-md text-sm hover:bg-blue-50 text-center font-semibold  "
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
