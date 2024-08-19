import React from "react";
import { LuSparkles } from "react-icons/lu";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="flex justify-between border p-2 shadow-md ">
      <div className="flex  items-center font-semibold cursor-pointer  ">
        E-Learning
      </div>
      <div className=" space-x-2 hidden md:flex ">
        <button className="border rounded-lg px-4 py-2 text-sm hover:bg-slate-100 font-medium">
          Login{" "}
        </button>
        <button className=" flex items-center border rounded-lg px-4 py-2 bg-blue-700 text-sm text-white font-medium hover:bg-blue-800">
          Join now <LuSparkles className="ml-2" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
