import React from "react";

type Props = {};

const CourseCard = (props: Props) => {
  return (
    <div className=" h-1/4 w-56 border flex  flex-col z-10 shadow-lg flex-1 h-screen">
      <div className=" w-56 h-32 bg-blue-600 "></div>
      <div className=" mt-5 flex flex-col ">
        {" "}
        <div className=" ml-2">Cohort</div>
        <button className=" bg-red-600 m-2 rounded-3xl p-2 text-white">
          View Content
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
