import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="flex flex-col justify-center  items-center text-center font-manrope pt-32 p-4 ">
      <ReactLoading type="spin" color={"black"} height={"10%"} width={"25%"} />
      <h1
        style={{ height: "500px" }}
        className=" text-2xl  pt-20 font-semibold"
      >
        Loading
      </h1>
    </div>
  );
}

export default Loading;
