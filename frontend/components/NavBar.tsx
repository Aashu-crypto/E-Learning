import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="flex justify-between border p-2 shadow-md ">
      <div>E-Learning</div>
      <div className=" space-x-2 hidden md:flex ">
        <button className="border rounded-lg p-2 ">Login </button>
        <button className="border rounded-lg p-2 bg-blue-700">Join Now</button>
      </div>
    </nav>
  );
};

export default NavBar;
