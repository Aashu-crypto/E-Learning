import React from "react";

type Props = {};

const CourseCard = (props: Props) => {
  return (
    <div className=" h-80 w-1/4 border flex  flex-col z-10 shadow-lg rounded-md overflow-hidden ">
      <div className=" w-auto h-32 bg-blue-600 "></div>
      <div className=" mt-5 flex flex-col ">
        {" "}
        <div className=" ml-2 mt-4"> Ad hoc Cohort</div>
        <button className=" bg-blue-600 m-2 rounded-3xl p-2 text-white">
          View Content
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
