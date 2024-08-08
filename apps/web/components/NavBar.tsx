"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const NavBar = (props: Props) => {
  const [showToast, setShowToast] = useState();
  return (
    <div className=" flex justify-between p-4 z-10 shadow-md ">
      <div className=" font-semibold text-xl">E-Learning</div>
      <div className="flex space-x-2">
        <ul className="md:flex space-x-2 hidden">
          <li className=" border p-2 rounded-md text-sm hover:bg-blue-50 text-center font-semibold  ">
            <Link href={"/SignIn"}>Login</Link>
          </li>
          <li className="  p-2 rounded-md text-sm bg-blue-600 text-white text-center  font-semibold">
            <Link href={"/SignIn"}>Join Now</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
